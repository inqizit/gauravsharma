# Content layer

All site data lives in this folder — the UI never hardcodes content.

- `types.ts` — the schema. The only file the UI layer imports from here (types only).
- `index.ts` — assembles everything into one `siteContent` object consumed by `App.tsx`.
- `profile.ts`, `experience.ts`, `projects.ts`, `skills.ts`, `education.ts` — the actual data.
- `sections.ts` — page section order, visibility and labels; the nav derives from this.

## Editing rules

- To change any text on the site, edit the data files only.
- To add a new kind of content, extend `types.ts` first, then add the data, then build a component for it.
- To switch the data format entirely (JSON, YAML, a CMS, an API), keep `index.ts` exporting a `SiteContent` object and nothing else needs to change.
