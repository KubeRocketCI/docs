import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { redirectMaps } from '../redirectMappings';
import {
  sanitizeUrl,
  isMaliciousPath,
  normalizePath,
  escapeHtmlContent
} from "../utils/security";

// The built 404 page is a static asset served by SWA, so it is fetched once
// and cached for the lifetime of the function instance.
let cachedNotFoundHtml: string | null = null;

const MINIMAL_NOT_FOUND_HTML =
  '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><title>Page Not Found</title></head>' +
  '<body><h1>Page Not Found</h1><p>The page you are looking for does not exist. ' +
  'Visit the <a href="/">KubeRocketCI documentation home page</a>.</p></body></html>';

async function getNotFoundPage(baseUrl: string, context: InvocationContext): Promise<string> {
  if (cachedNotFoundHtml) {
    return cachedNotFoundHtml;
  }

  try {
    // SWA redirects /404.html to /404, which serves the page with status 404
    // by design (staticwebapp.config.json), so a 404 status is expected here.
    const response = await fetch(`${baseUrl}/404.html`);
    if (response.ok || response.status === 404) {
      const html = await response.text();
      // Cache only the genuine Docusaurus page (its root element id is a
      // stable marker), never a CDN/error body that happens to contain HTML —
      // a bad cache entry would persist for the function instance lifetime.
      if (html.includes('__docusaurus')) {
        cachedNotFoundHtml = html;
        return html;
      }
    }
    context.log(`404 page fetch returned unusable content (status ${response.status})`);
  } catch (error) {
    context.log(`Failed to fetch 404 page content: ${error}`);
  }

  return MINIMAL_NOT_FOUND_HTML;
}

/**
 * Handle fallback requests for routes that don't match any static files
 * This is triggered when Azure Static Web Apps can't find a static file for a given URL
 * @param request The HTTP request
 * @param context The invocation context
 * @returns HTTP response with appropriate redirect or 404
 */
export async function fallbackHandler(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
  try {
    // Get the original URL from the header (SWA sends this for proxy requests)
    const originalUrl = request.headers.get('x-ms-original-url') || '';

    if (!originalUrl) {
      context.log('No original URL provided in headers');
      return {
        status: 404,
        headers: {
          "Content-Type": "text/plain",
          "X-Content-Type-Options": "nosniff"
        },
        body: 'Not Found'
      };
    }

    context.log(`Fallback handler processing request for original URL: "${originalUrl}"`);

    // Check for common hack attempts
    if (isMaliciousPath(originalUrl)) {
      context.log(`Blocked malicious path: "${originalUrl}"`);
      return {
        status: 403,
        headers: {
          "Content-Type": "text/plain",
          "X-Content-Type-Options": "nosniff"
        },
        body: 'Forbidden'
      };
    }    // Parse the URL to get the path
    let requestPath = '';    try {      // Sanitize the URL to prevent security issues
      const safeUrl = sanitizeUrl(originalUrl);
      const parsedURL = new URL(safeUrl);
      requestPath = parsedURL.pathname;

      // First, let's clean up any double slashes in the path
      requestPath = requestPath.replace(/\/+/g, '/');
      context.log(`Path after removing double slashes: "${requestPath}"`);

      // Normalize the path - this will remove the leading slash to match our mapping format
      requestPath = normalizePath(requestPath);

      // Log the normalized path for debugging
      context.log(`Normalized path: "${requestPath}"`);
    } catch (error) {
      context.log(`Failed to parse original URL: ${error}`);
      return {
        status: 400,
        headers: {
          "Content-Type": "text/plain",
          "X-Content-Type-Options": "nosniff"
        },
        body: 'Invalid URL'
      };
    }

    context.log(`Looking for redirect for path: "${requestPath}"`);

    // Dropped docs versions (e.g. /docs/3.11/*, /docs/3.12/*) only reach the
    // fallback because their static files no longer exist — live versions are
    // served statically and never get here. Preserve their accumulated search
    // equity by permanently redirecting to the unversioned latest URL.
    const droppedVersionMatch = requestPath.match(/^docs\/\d+\.\d+(?:\/(.+))?$/);
    if (droppedVersionMatch) {
      const baseUrl = new URL(originalUrl).origin;
      const rest = droppedVersionMatch[1];
      const redirectUrl = rest ? `${baseUrl}/docs/${rest}` : `${baseUrl}/docs`;
      context.log(`Dropped docs version, redirecting to: "${redirectUrl}"`);

      return {
        status: 301,
        headers: {
          "Location": redirectUrl,
          "Cache-Control": "max-age=86400",
          "X-Content-Type-Options": "nosniff",
          "X-Frame-Options": "DENY",
          "Referrer-Policy": "no-referrer-when-downgrade"
        }
      };
    }

    // Check if we have a redirect for this path
    if (redirectMaps[requestPath]) {
      const redirectTo = redirectMaps[requestPath];
      context.log(`Redirecting to "${redirectTo}"`);

      // Sanitize the redirect URL to prevent open redirect vulnerabilities
      const sanitizedRedirectTo = sanitizeUrl(redirectTo);

      // Check if it's an external URL
      if (sanitizedRedirectTo.startsWith('http')) {
        // Verify that the URL is in our allowlist of valid external domains
        const allowedExternalDomains = ['docs.kuberocketci.io', 'www.docs.kuberocketci.io', 'kuberocketci.io', 'www.kuberocketci.io'];

        let isAllowedDomain = false;
        try {
          const redirectUrl = new URL(sanitizedRedirectTo);
          isAllowedDomain = allowedExternalDomains.some(domain =>
            redirectUrl.hostname === domain || redirectUrl.hostname.endsWith(`.${domain}`)
          );
        } catch (error) {
          context.log(`Invalid redirect URL: ${error}`);
          isAllowedDomain = false;
        }

        if (!isAllowedDomain) {
          context.log(`Blocked potential open redirect to non-allowlisted domain: ${sanitizedRedirectTo}`);
          return {
            status: 400,
            headers: {
              "Content-Type": "text/plain",
              "X-Content-Type-Options": "nosniff"
            },
            body: 'Invalid redirect'
          };
        }

        return {
          status: 301, // Permanent redirect
          headers: {
            "Location": sanitizedRedirectTo,
            "Cache-Control": "max-age=86400", // Cache for 24 hours
            "X-Content-Type-Options": "nosniff",
            "X-Frame-Options": "DENY",
            "Referrer-Policy": "no-referrer-when-downgrade"
          }
        };
      } else {
        // For internal redirects
        const baseUrl = new URL(originalUrl).origin;
        const redirectUrl = `${baseUrl}/${sanitizedRedirectTo}`;
        context.log(`Redirecting to internal URL: "${redirectUrl}"`);

        return {
          status: 301, // Permanent redirect
          headers: {
            "Location": redirectUrl,
            "Cache-Control": "max-age=86400", // Cache for 24 hours
            "X-Content-Type-Options": "nosniff",
            "X-Frame-Options": "DENY",
            "Referrer-Policy": "no-referrer-when-downgrade"
          }
        };
      }
    }

    // No redirect found: serve the Docusaurus 404 page content at the
    // originally requested URL with a true 404 status. A redirect to /404
    // would erase the failed path from the address bar (hiding broken links
    // from analytics) and send crawlers a redirect instead of a 404.
    context.log(`No redirect found for path: "${requestPath}"`);

    const baseUrl = new URL(originalUrl).origin;
    const notFoundHtml = await getNotFoundPage(baseUrl, context);

    return {
      status: 404,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "no-cache",
        "X-Content-Type-Options": "nosniff",
        "X-Frame-Options": "DENY",
        "Referrer-Policy": "no-referrer-when-downgrade"
      },
      body: notFoundHtml
    };
  } catch (error) {
    context.error('Problem with fallback handler', error);
    return {
      status: 500,
      headers: {
        "Content-Type": "text/plain",
        "X-Content-Type-Options": "nosniff"
      },
      body: 'Something went wrong processing your request'
    };
  }
}

app.http('fallback', {
  methods: ['GET'],
  authLevel: 'anonymous',
  route: 'fallback',
  handler: fallbackHandler
});
