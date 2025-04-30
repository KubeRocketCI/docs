/**
 * Security utility functions for URL handling and prevention of common attacks
 */

/**
 * List of known malicious path fragments that are commonly used in attacks
 */
const MALICIOUS_PATH_FRAGMENTS = [
  'wp-admin',
  'wp-includes',
  'wp-content',
  'wp-login',
  'xmlrpc.php',
  'admin/',
  'administrator/',
  '.env',
  'config.php',
  '.git/',
  '.svn/',
  '.htaccess',
  'shell.php',
  'cmd.php',
  '/proc/self/',
  'etc/passwd',
  'bitcoin',
  'fckeditor',
  'ckeditor',
  'webconfig',
];

/**
 * Checks if a URL path contains known malicious fragments
 * @param path The URL path to check
 * @returns True if the path appears malicious, false otherwise
 */
export function isMaliciousPath(path: string): boolean {
  const lowerPath = path.toLowerCase();
  return MALICIOUS_PATH_FRAGMENTS.some(fragment => lowerPath.includes(fragment));
}

/**
 * Sanitizes a URL to prevent security issues
 * @param url The URL to sanitize
 * @returns The sanitized URL
 */
export function sanitizeUrl(url: string): string {
  // Trim the URL and convert to lowercase for safer checks
  const sanitizedUrl = url.trim();
  const lowercaseUrl = sanitizedUrl.toLowerCase();

  // Block javascript: protocol URLs which can lead to XSS
  if (lowercaseUrl.startsWith('javascript:')) {
    return 'about:blank';
  }

  // Block data: URLs which can be used for XSS
  if (lowercaseUrl.startsWith('data:')) {
    return 'about:blank';
  }

  // Block vbscript: URLs which can lead to XSS in older IE browsers
  if (lowercaseUrl.startsWith('vbscript:')) {
    return 'about:blank';
  }

  // Block file: protocol URLs which can access local files
  if (lowercaseUrl.startsWith('file:')) {
    return 'about:blank';
  }

  // Block any other potentially dangerous protocols
  if (lowercaseUrl.match(/^([^\w]*)(javascript|data|vbscript|file|ftp|blob|about|:\/\/)/) ||
      lowercaseUrl.match(/^([^\w]*)((\/\/+)|(\\\\+))/)) {
    return 'about:blank';
  }

  return sanitizedUrl;
}

/**
 * Makes a URL path safe for use in HTML output
 * @param path The path to escape
 * @returns The escaped path
 */
export function escapeHtmlContent(content: string): string {
  return content
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Normalizes URL paths by removing duplicate slashes, resolving relative paths, etc.
 * @param path The path to normalize
 * @returns The normalized path
 */
export function normalizePath(path: string): string {
  // Remove duplicate slashes (important to do this first)
  let normalized = path.replace(/\/+/g, '/');

  // Remove trailing slash if not the root path
  if (normalized.length > 1 && normalized.endsWith('/')) {
    normalized = normalized.slice(0, -1);
  }

  // Always remove leading slash to match our redirect map format
  if (normalized.startsWith('/')) {
    normalized = normalized.substring(1);
  }

  return normalized;
}
