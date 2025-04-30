import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { redirectMaps } from '../redirectMappings';
import {
  sanitizeUrl,
  isMaliciousPath,
  normalizePath,
  escapeHtmlContent
} from "../utils/security";

/**
 * Handle redirect requests based on defined redirect mappings
 * @param request The HTTP request
 * @param context The invocation context
 * @returns HTTP response with appropriate redirect
 */
export async function redirectHandler(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
  try {
    context.log(`Redirect function processed request for url "${request.url}"`);

    // Get the path from the request URL
    const requestUrl = new URL(request.url);
    let requestPath = requestUrl.pathname;

    // First, let's clean up any double slashes in the original path
    requestPath = requestPath.replace(/\/+/g, '/');

    context.log(`Path after removing double slashes: "${requestPath}"`);

    // Check if this is coming from a fallback route (SWA sends original URL in a header)
    const originalUrl = request.headers.get('x-ms-original-url');
    if (originalUrl) {
      context.log(`Original URL from header: "${originalUrl}"`);
      try {
        const safeOriginalUrl = sanitizeUrl(originalUrl);
        const parsedOriginalUrl = new URL(safeOriginalUrl);
        requestPath = parsedOriginalUrl.pathname;
      } catch (error) {
        context.log(`Failed to parse original URL: ${error}`);
        return {
          status: 400,
          body: 'Invalid URL format'
        };
      }
    }

    // Check for malicious path patterns
    if (isMaliciousPath(requestPath)) {
      context.log(`Blocked malicious path: "${requestPath}"`);
      return {
        status: 403,
        body: 'Forbidden'
      };
    }

    // Remove 'api/redirect' prefix from the path
    // Use regex to remove the api/redirect part regardless of exact format
    requestPath = requestPath.replace(/^\/?api\/redirect\/?/, '');

    // Log path after removing API prefix
    context.log(`Path after removing API prefix: "${requestPath}"`);

    // Now normalize the path - this will remove any remaining leading/trailing slashes and handle duplicates
    requestPath = normalizePath(requestPath);

    // Log the normalized path
    context.log(`Normalized path: "${requestPath}"`);

    context.log(`Looking for redirect for path: "${requestPath}"`);

    // Check if we have a redirect for this path in our static mapping
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
        // For internal redirects, we need to keep the base URL
        const baseUrl = `${requestUrl.protocol}//${requestUrl.host}`;
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

    const baseUrl = `${requestUrl.protocol}//${requestUrl.host}`;
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
    context.error('Error in redirect handler', error);
    return {
      status: 500,
      headers: {
        "Content-Type": "text/plain"
      },
      body: "Internal Server Error"
    };
  }
}

app.http('redirect', {
  methods: ['GET'],
  authLevel: 'anonymous',
  route: 'redirect/{*path}',
  handler: redirectHandler
});
