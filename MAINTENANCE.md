# Maintenance

## Icon catalog

The icon catalog comes from the installed `simple-icons` npm package. `npm ci`
uses the version recorded in `package-lock.json`; updating the catalog requires
updating that dependency, rebuilding, and deploying the site.

The development server serves the package's original SVG files at
`/icons/<slug>.svg`. The production build copies them to `dist/icons/` so
existing links and embeds keep working.

The Vite plugin in `build/icon-catalog.ts` packages metadata and SVG paths into a
content-hashed WebAssembly asset. It generates a standard data-only Wasm module
without requiring a Rust or C compiler. The development server serves the same
catalog through a virtual asset.

A module Worker loads and reads the catalog once, calculates brightness, and
builds the fuzzy search index. Search responses contain indices rather than
copying the entire catalog. Cards render cached paths as inline SVG with `fill`;
previews and downloads use the same packaged version and do not fetch individual
icon files from an external CDN. Wasm is the resource container; catalog and
search calculations run as JavaScript inside the Worker.

`npm test` validates the Wasm encoding and catalog contents, builds the site, and
runs lint. The build emits the catalog and Worker beside the other static assets.

## Deploying a Simple Icons release

After publishing to npm, the `simple-icons/simple-icons` release workflow can
set `GH_TOKEN` to its GitHub App installation token and run:

```sh
gh workflow run auto-release.yml --repo simple-icons/simpleicons.org --ref main
```

The caller's installation token needs **Actions: write** on
`simple-icons/simpleicons.org`. The receiving workflow updates the npm dependency
and lockfile to `simple-icons@latest`. When they change, it runs `npm test` and
pushes the update to `main`, triggering the existing Cloudflare Pages deployment.
For the push, this repository needs access to the `BOT_CLIENT_ID` and
`BOT_PRIVATE_KEY` Actions secrets for a GitHub App allowed to write contents
and push to `main`.

## Open Graph covers

When adding or updating a tool page’s sharing image, use the shared prompt and
visual references in [Open Graph cover prompts](docs/open-graph-covers.md).

## Caching on Cloudflare Pages

The build generates `dist/_headers` with a one-year browser cache rule for each
file under `/assets/`, including the icon catalog and Workers. Pages and the
custom domain's cache settings determine the cache headers for HTML and the
stable SVG URLs under `/icons/`. Missing assets return HTTP 404 through
`public/404.html` and use the default cache policy.

Pages has its own built-in asset cache. A custom domain's `CF-Cache-Status` refers
to a separate CDN cache layer, and `.wasm` is not among that layer's default cached
file extensions. To enable it there too, add a Cloudflare Cache Rule matching the
site hostname, the `/assets/` path prefix, and the `.wasm` suffix, set eligibility
to **Eligible for cache**, and respect the response's cache-control headers.
