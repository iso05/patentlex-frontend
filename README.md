# PatentLex Website

Multilingual legal-services website with service pages, articles, team information, a trademark-fee calculator and administrative screens.

**Stack:** Next.js 15 · React 19 · Tailwind CSS · i18next · Axios

## Run locally

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Supply your own API and integration configuration in a local environment file; do not commit it.

## Build

```sh
npm run build
```

The current Next.js configuration uses `output: 'export'`. Deploy the generated `out/` directory on static hosting. Blog and administrative features depend on the separately hosted API. Use a static file server to preview the export; `next start` is not the production mode for this configuration.

## Structure

- `src/app`: Next.js routes, layouts and page metadata.
- `src/components`: Public pages, calculator and administration UI.
- `src/locales`: Uzbek, Russian and English translations.
- `src/api`, `src/services`: API clients and service logic.
- `public`: Public website assets.

See the SEO guides in this repository for the existing content and metadata workflow. Environment files, `out/` and `.next/` are excluded from commits.

[Project overview](https://github.com/iso05/patentlex) · [API repository](https://github.com/iso05/patentlex-backend)

## Brand analysis configuration

Brand analysis defaults to a local, illustrative heuristic. It does not query an official trademark registry, verify availability or provide legal clearance. Existing score and verdict wording must not be treated as a verified legal opinion.

An optional trusted backend can be configured with `NEXT_PUBLIC_BRAND_ANALYSIS_URL` before building. It receives a JSON POST containing `brandName`, `nicheId` and `lang`, and returns `score` (0–98), `verdict`, `riskVerdict`, optional `classes`, `status` and four string `alternatives`. This repository does not implement that backend. Failed or invalid responses fall back to the local heuristic.

Provider credentials belong only on the backend, which must enforce input validation, rate limits and an allowed origin. Never use `NEXT_PUBLIC_GEMINI_API_KEY`: Next.js exposes public environment variables in browser bundles. Rotate any previously exposed provider key before enabling an AI integration.
