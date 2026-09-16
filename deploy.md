# Deploying

**Source of truth: https://github.com/lsdagency/pith** (public). Only the site lives there. The agency repo (`lsd-agent-team`) is never pushed anywhere; the site is copied out of its `site/` folder with `git subtree`.

| Site | Netlify id | Address | Builds from |
|---|---|---|---|
| **pith-holding** | `3838c93d-c418-41ed-80bb-cb8f4186e322` | https://pithstudio.co.uk | `main` on lsdagency/pith. **Production.** |
| **pith-dev** | `2a9f9eae-25ee-4a26-ac1d-042343df574b` | https://pith-dev.netlify.app | `dev` branch on lsdagency/pith. Unlisted (noindex, unlinked). The full website is built here. |

## Publishing a change (from the agency repo)
1. Commit in `lsd-agent-team` as usual (the site is `site/`).
2. Push the site subtree:
   `git subtree push --prefix=site git@github.com:lsdagency/pith.git main`
   (for dev work push to `dev` instead: `git subtree push --prefix=site git@github.com:lsdagency/pith.git dev`)
3. Netlify builds automatically (`npm run build`, publishes `dist/`, Node 22, all from `netlify.toml`). Env vars live in Netlify, not in the repo: `PUBLIC_SANITY_PROJECT_ID`, `PUBLIC_SANITY_DATASET`, `PUBLIC_HUBSPOT_FORM_ID` are set on pith-holding.

## Rules
- Production is `pith-holding` and nothing else. Never point `pithstudio.co.uk` at `pith-dev`.
- `pith-dev` keeps `noindex` and is never linked from anywhere public.
- Full-site pages are promoted by merging `dev` into `main`, not by moving the domain.
- The local build-and-upload path (Netlify MCP `deploy-site`) still works as a fallback but bypasses git; avoid it once GitHub is linked.
