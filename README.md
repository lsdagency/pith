# Pith website

Astro site, content in Sanity, hosted on Netlify. Owned by the `website` agent; decisions and history in `../memory/website.md`.

- `src/pages/index.astro` — the holding page: the three-tap sentence, the intro line and "Then what?", the photo.
- `src/layouts/Base.astro` — shared shell: fonts, favicon, the intro animation (mark inks in, once per session), header, legal footer with the "made by AI" line, noindex.
- `src/components/TapForm.astro` — the form. One unfinished sentence with three blanks; six chips per blank plus "something else…"; email and Send once complete. Netlify Forms (fields who/what/need/message/email/name) + HubSpot Forms API.
- `src/styles/global.css` — brand tokens and the motion primitives (`.rv`, `.mask`, `.pop`, `.draw`, `.intro`).
- `sanity/schemaTypes` — case study and blog post structures. `sanity.config.ts` is the editor at `/admin`.
- `public/_headers` — Netlify headers, including noindex until the name is cleared.

Local: `npm run dev`. Build: `npm run build` (output in `dist/`). `.env` holds the Sanity project ID and, when Liam supplies it, `PUBLIC_HUBSPOT_FORM_ID`.
