# api

Azure Functions backend for the Static Web App. Two anonymous HTTP handlers:

- `fallback` — serves the Docusaurus 404 page for routes with no static file. Wired to `navigationFallback.rewrite` in `staticwebapp.config.json`.
- `redirect` — resolves legacy paths through `src/redirectMappings.ts`.

## Commands

```bash
npm run build    # tsc -> dist/
npm run watch    # tsc -w
npm start        # clean, build, then func start
```

## App settings

| Setting | Required | Default | Purpose |
|---|---|---|---|
| `TRUSTED_ORIGINS` | No | unset | Comma-separated extra origins the handlers may treat as their own, added to the built-in production list. |

Both handlers read the client-controlled `x-ms-original-url` header and the request Host header. An origin taken from either is used only after it matches the allowlist in `src/utils/security.ts`; anything else falls back to `https://docs.kuberocketci.io`. This blocks SSRF and open redirects (CWE-918).

Production needs no configuration — the built-in list covers `docs.kuberocketci.io` and `www.docs.kuberocketci.io`.

Set `TRUSTED_ORIGINS` when the site answers on another host, or the 404-page fetch and internal redirects will point at production instead of that host:

```bash
# local dev
TRUSTED_ORIGINS=http://localhost:4280

# preview slot
TRUSTED_ORIGINS=https://<slot>.azurestaticapps.net
```

Entries must include the scheme. Malformed entries are dropped, not fatal.

Separate from this list, `isAllowedRedirectTarget()` in `src/utils/security.ts` governs which domains a `redirectMappings.ts` entry may point to. Keep the two lists apart: the redirect list includes the marketing domain, which must never reach the fetch path.
