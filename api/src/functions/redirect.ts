import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { redirectMaps } from '../redirectMappings';
import {
  sanitizeUrl,
  isMaliciousPath,
  normalizePath,
  resolveTrustedOrigin,
  isAllowedRedirectTarget
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

    const requestUrl = new URL(request.url);
    let requestPath = requestUrl.pathname;

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

    if (isMaliciousPath(requestPath)) {
      context.log(`Blocked malicious path: "${requestPath}"`);
      return {
        status: 403,
        body: 'Forbidden'
      };
    }

    requestPath = requestPath.replace(/^\/?api\/redirect\/?/, '');
    context.log(`Path after removing API prefix: "${requestPath}"`);

    requestPath = normalizePath(requestPath);
    context.log(`Normalized path: "${requestPath}"`);

    context.log(`Looking for redirect for path: "${requestPath}"`);

    if (redirectMaps[requestPath]) {
      const redirectTo = redirectMaps[requestPath];
      context.log(`Redirecting to "${redirectTo}"`);

      // Sanitize the redirect URL to prevent open redirect vulnerabilities
      const sanitizedRedirectTo = sanitizeUrl(redirectTo);

      if (sanitizedRedirectTo.startsWith('http')) {
        if (!isAllowedRedirectTarget(sanitizedRedirectTo)) {
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
        // Internal redirects are relative to redirectMaps; prepend the trusted origin.
        const baseUrl = resolveTrustedOrigin(request.url);
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

    const baseUrl = resolveTrustedOrigin(request.url);
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
