/** Fallback used whenever the client-supplied origin is not trusted. */
const CANONICAL_ORIGIN = 'https://docs.kuberocketci.io';

/**
 * Origins this site is served from. The `x-ms-original-url` header and the
 * request Host header are client-controlled: match any origin taken from them
 * against this list before using it in a fetch or a Location header.
 * Keep separate from the handlers' redirect-target allowlists, which permit
 * outbound destinations rather than origins this app answers as.
 * Extend per environment via the comma-separated `TRUSTED_ORIGINS` app setting.
 */
const DEFAULT_TRUSTED_ORIGINS = [
  CANONICAL_ORIGIN,
  'https://www.docs.kuberocketci.io',
];

function toOrigin(value: string): string | null {
  try {
    const { origin } = new URL(value);
    return origin === 'null' ? null : origin;
  } catch {
    return null;
  }
}

const TRUSTED_ORIGINS: string[] = [
  ...DEFAULT_TRUSTED_ORIGINS,
  ...(process.env.TRUSTED_ORIGINS || '')
    .split(',')
    .map(entry => toOrigin(entry.trim()))
    .filter((origin): origin is string => origin !== null),
];

/**
 * Resolves the origin of a client-supplied URL to a trusted origin.
 * @param url The client-supplied URL
 * @returns The origin if it is allowlisted, CANONICAL_ORIGIN otherwise
 */
export function resolveTrustedOrigin(url: string): string {
  const origin = toOrigin(url);
  return origin !== null && TRUSTED_ORIGINS.includes(origin) ? origin : CANONICAL_ORIGIN;
}

/**
 * Domains an absolute `redirectMaps` entry may point to, subdomains included.
 * Covers outbound destinations only; origins this app answers as are governed
 * by DEFAULT_TRUSTED_ORIGINS above. Both handlers must apply the same list, so
 * declare it here rather than per handler.
 */
const ALLOWED_REDIRECT_DOMAINS = [
  'docs.kuberocketci.io',
  'www.docs.kuberocketci.io',
  'kuberocketci.io',
  'www.kuberocketci.io',
];

/**
 * Checks an absolute redirect target against the outbound allowlist.
 * @param url The absolute redirect target
 * @returns True if the hostname is an allowed domain or a subdomain of one
 */
export function isAllowedRedirectTarget(url: string): boolean {
  let hostname: string;
  try {
    hostname = new URL(url).hostname;
  } catch {
    return false;
  }

  return ALLOWED_REDIRECT_DOMAINS.some(
    domain => hostname === domain || hostname.endsWith(`.${domain}`)
  );
}

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
 * Normalizes a path for redirectMaps lookups: collapses duplicate slashes,
 * strips a trailing slash (except root), and strips the leading slash.
 * Does not resolve `.` or `..` segments.
 * @param path The path to normalize
 * @returns The normalized path, without a leading slash
 */
export function normalizePath(path: string): string {
  // Collapse duplicate slashes first; the later checks assume single slashes.
  let normalized = path.replace(/\/+/g, '/');

  if (normalized.length > 1 && normalized.endsWith('/')) {
    normalized = normalized.slice(0, -1);
  }

  // Always remove leading slash to match our redirect map format
  if (normalized.startsWith('/')) {
    normalized = normalized.substring(1);
  }

  return normalized;
}
