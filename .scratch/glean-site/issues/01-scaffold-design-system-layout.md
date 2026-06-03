Status: ready-for-agent

## Parent

`.scratch/glean-site/PRD.md`

## What to build

Scaffold the Next.js 15 project inside `glean-site/`, configure the full design system, and build the site skeleton (layout, header, footer, route stubs).

**Setup:**
- `npx create-next-app@latest glean-site --typescript --tailwind --eslint --app --src-dir`
- Install `@fontsource/satoshi` for the Satoshi font
- Configure `tailwind.config` with the design tokens from the PRD

**Design tokens in Tailwind config:**

| Token | Value |
|-------|-------|
| `bg-primary` | `#050810` |
| `bg-surface` | `#0a0e1a` |
| `text-primary` | `#f0f4ff` |
| `text-secondary` | `#8892a4` |
| `accent` | `#6B46C1` |
| `font-sans` | `Satoshi`, `system-ui`, `sans-serif` |

**Components to build:**

- `RootLayout` — wraps all pages with `<html lang="en">`, font loading, bg color, global CSS (no default margin/padding on body)
- `Header` — nav bar with: [Glean logo] Platforms · Quickstart · Docs · FAQ · [GitHub icon link] · [Install CTA button]
- `Footer` — minimal: GitHub · License (MIT) · Docs links, light subtle separator
- Route stubs for: `/`, `/platforms`, `/quickstart`, `/docs`, `/docs/linkedin`, `/docs/x`, `/docs/email`, `/docs/gmaps`, `/docs/pipeline`, `/docs/icp`, `/faq` — each returns a placeholder `<h1>` with the page name

**Glean logo** — the file `glean-logo.svg` at the repo root should be copied into `glean-site/public/` and referenced in the Header.

## Acceptance criteria

- [ ] `npm run dev` starts without errors
- [ ] All 11 routes render without crashing (show stub content)
- [ ] Header nav links navigate correctly to each route
- [ ] Header has Install CTA button with accent color
- [ ] Header shows the Glean logo
- [ ] Footer renders with GitHub + License + Docs links
- [ ] Background is `#050810`, text is `#f0f4ff`, font is Satoshi
- [ ] No visible default browser styles (body reset applied)
- [ ] Lighthouse passes basic audit (no render-blocking, proper lang, meta viewport)

## Blocked by

None — can start immediately
