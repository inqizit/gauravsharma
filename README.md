# gauravsharma.dev

Personal website for Gaurav Sharma — React + TypeScript + Vite, UI only, no backend.

```bash
make install    # install dependencies
make dev        # local dev server (hot reload)
make build      # type-check + production build → dist/
make preview    # serve the production build
make typecheck  # type-check only
make deploy     # build + push dist/ to the gh-pages branch
make clean      # remove dist/ and node_modules/
```

`make help` lists all targets (each wraps the corresponding npm script).

## Deploying to GitHub Pages

Every push (or PR merge) to `main` auto-deploys via GitHub Actions
([.github/workflows/deploy.yml](.github/workflows/deploy.yml)): it builds the
site and force-pushes `dist/` to the `gh-pages` branch.

`make deploy` does the same thing manually from your machine (via the
[gh-pages](https://www.npmjs.com/package/gh-pages) package).
To serve it, enable Pages once in the repo settings:
**Settings → Pages → Deploy from a branch → `gh-pages` / `/ (root)`** —
the site then lives at <https://inqizit.github.io/gauravsharma/>.
Vite's `base` is set to `./` so assets resolve under that sub-path.

## Architecture

The site is strictly data-driven, with three independent layers:

```
src/
├── content/        # DATA — all site content as typed modules
│   ├── types.ts    #   the schema (the only contract the UI knows)
│   ├── profile.ts  #   name, headline, summary, contact info
│   ├── experience.ts, projects.ts, skills.ts, education.ts
│   ├── sections.ts #   section order / visibility / labels → drives the nav
│   └── index.ts    #   assembles everything into one `siteContent` object
├── components/     # UI — pure presentational components (props in, markup out)
├── styles/         # DESIGN — tokens.css holds every color/font/space variable
│   ├── tokens.css  #   reskin the whole site by editing this file
│   └── global.css
├── lib/format.ts   # presentation helpers (date ranges, durations)
└── App.tsx         # composition root — the ONLY place data meets UI
```

### Rules that keep the layers swappable

- **UI components never import data** — only types from `content/types.ts`. Data arrives via props from `App.tsx`.
- **Data files never import UI.** Swap the data source (JSON, CMS, API) by keeping `content/index.ts` exporting a `SiteContent` object.
- **Components never hardcode design values** — everything comes from CSS variables in `styles/tokens.css` (dark + light themes included).
- **Sections are registry-driven**: `content/sections.ts` decides which sections render, in what order, with what headings — the nav follows automatically. A new section = one type, one data file, one component, one registry entry in `App.tsx`.
