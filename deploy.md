# Deploying

Two Netlify sites, one codebase, same team ("LSD Agency", `liam-nlsmybc`).

| Site | Netlify id | Address | Purpose |
|---|---|---|---|
| **pith-holding** | `3838c93d-c418-41ed-80bb-cb8f4186e322` | pith-holding.netlify.app → `pithstudio.co.uk` at the switch | **Production.** The public holding page. Only deploy here on Liam's say-so. |
| **pith-dev** | `2a9f9eae-25ee-4a26-ac1d-042343df574b` | pith-dev.netlify.app | **Dev.** Unlisted (noindex, never linked, unguessable name). The full website is built and reviewed here. Site-wide password protection is a paid Netlify feature (API returned 422 on the free plan). |

Build with `npm run build` in `site/`, then deploy `dist/` with the Netlify MCP `deploy-site` operation for the site id above (it returns an `npx @netlify/mcp … --site-id …` command to run from inside `dist/`).

Rules
- Production is `pith-holding` and nothing else. Never point `pithstudio.co.uk` at `pith-dev`.
- The dev site keeps `noindex`. Never remove it there, and never link to the dev address from anywhere public.
- When a full-site page is ready to go public, it is promoted by deploying the same build to `pith-holding`, not by moving the domain.
- Forms: `pith-dev` has Netlify Forms off, so test submissions from dev don't pollute the record. HubSpot still receives them unless `PUBLIC_HUBSPOT_FORM_ID` is blanked in `.env` for dev builds.
