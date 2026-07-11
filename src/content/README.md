# Content layer

All site data lives in this folder — the UI never hardcodes content.

- `types.ts` — the schema. The only file the UI layer imports from here (types only).
- `index.ts` — assembles everything into one `siteContent` object consumed by `App.tsx`.
- `profile.ts`, `experience.ts`, `projects.ts`, `skills.ts`, `education.ts` — the actual data.
- `sections.ts` — page section order, visibility and labels; the nav derives from this.

## Detail pages

Any project or experience entry can carry an optional `details` object
(`DetailContent` in `types.ts`). When present, the entry automatically gets:

- a dedicated page at `#/projects/<id>` or `#/experience/<id>`
- a "View project →" / "More about this role →" link on the home page

`DetailContent` blocks (all optional except `overview`):

- `overview` — long-form paragraphs
- `features` — bullet highlights rendered as a card grid
- `downloads` — per-platform builds (`macos` / `windows` / `linux` / `android` / `ios` / `web`), each with a URL, format and size
- `tutorial` — intro plus numbered steps; steps can carry paragraphs, a code snippet and a tip/note callout
- `links` — external links

Remove the `details` key and the entry renders as a plain card again — no
other change needed.

## Editing rules

- To change any text on the site, edit the data files only.
- To add a new kind of content, extend `types.ts` first, then add the data, then build a component for it.
- To switch the data format entirely (JSON, YAML, a CMS, an API), keep `index.ts` exporting a `SiteContent` object and nothing else needs to change.
