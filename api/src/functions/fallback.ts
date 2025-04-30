import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { redirectMaps } from '../redirectMappings';
import {
  sanitizeUrl,
  isMaliciousPath,
  normalizePath,
  escapeHtmlContent
} from "../utils/security";

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

    // If no redirect found, redirect to the Docusaurus default 404 page
    context.log(`No redirect found for path: "${requestPath}"`);

    const baseUrl = new URL(originalUrl).origin;
    const notFoundUrl = `${baseUrl}/404`;

    return {
      status: 302, // Temporary redirect
      headers: {
        "Location": notFoundUrl,
        "X-Content-Type-Options": "nosniff",
        "X-Frame-Options": "DENY",
        "Referrer-Policy": "no-referrer-when-downgrade"
      }
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
