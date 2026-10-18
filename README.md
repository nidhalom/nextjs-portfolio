# nextjs-portfolio

My personal portfolio site: a Next.js (App Router, TypeScript) app exported as a fully static site, with English and French
versions behind a toggle. Sections: About, Projects (cards linking to my GitHub repositories), Experience, Education and
Contact. All text lives in one typed content file, so updating it means editing data, not markup.

## Features

- Static export (`output: "export"`), no server needed
- FR/EN toggle; remembers the choice in `localStorage`, otherwise follows the browser language
- Projects, experience and education rendered from `lib/content.ts`
- Responsive, light/dark aware, no UI framework or runtime dependency besides Next and React
- GitHub Pages deploy workflow using `actions/deploy-pages`

## Quick start

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # static site in ./out
```

Example build output:

```
Route (app)                Size  First Load JS
┌ ○ /
└ ○ /_not-found
○  (Static)  prerendered as static content
```

## Deploying to GitHub Pages

`.github/workflows/deploy.yml` builds with `NEXT_PUBLIC_BASE_PATH=/nextjs-portfolio` and publishes `out/` with
`actions/deploy-pages`. Pages is not enabled by this repo: in Settings > Pages choose "GitHub Actions" as the source, then
re-run the workflow. For a user site or custom domain, remove the `NEXT_PUBLIC_BASE_PATH` env in the workflow.

## Project structure

```
app/            layout, page, global styles
components/     Portfolio.tsx (client component: language state and all sections)
lib/content.ts  all copy in EN and FR, project list, experience, education
next.config.mjs static export and optional base path
```

## How it works

`Portfolio` keeps the language in state and reads every string as `value[lang]` from `lib/content.ts`. The static HTML is
generated in English; after hydration the saved or browser language is applied.

## Limitations

- The French version is applied after hydration, so French visitors briefly see English before the switch
- Single page, no blog, no contact form (email and LinkedIn links only)
- Project blurbs are short summaries taken from each repository's description; see the repositories for details

## License

MIT
