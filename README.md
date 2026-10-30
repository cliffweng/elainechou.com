# elainechou.com

Professional website for Elaine Chou, CFA, Esq. A static single page built with Vite, React, and TypeScript.

## Develop

```sh
npm ci
npm run dev      # local dev server
npm run build    # type-check, build, and prerender to dist/
npm run preview  # serve the built dist/ locally
```

The build output is `dist/`. `npm run build` runs the client build, then an SSR build of `src/entry-server.tsx` into `dist-ssr/`, then `scripts/prerender.mjs`, which injects the rendered page into `dist/index.html` (so it contains the full content without JavaScript) and removes `dist-ssr/`. The client hydrates the prerendered markup.

### Social preview image

`public/og-image.png` (1200×630) is rendered from `scripts/og-image.html`. Playwright is not a project dependency; to regenerate the image run:

```sh
PLAYWRIGHT_MODULE=/path/to/node_modules/playwright node scripts/render-og-image.mjs
```

Install Playwright anywhere with `npm i playwright && npx playwright install chromium`.

Deployment is not yet configured.
