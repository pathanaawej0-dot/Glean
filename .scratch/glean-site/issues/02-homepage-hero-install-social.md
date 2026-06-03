Status: ready-for-agent

## Parent

`.scratch/glean-site/PRD.md`

## What to build

Build the complete homepage (`/`) inside the scaffolded site. The homepage is a single-scroll page with these sections in order:

1. **Hero** — Large "Glean" heading (72px bold), tagline "THE LEAD SKILL THAT ACTUALLY FINDS PEOPLE." (uppercase, smaller), subtitle explaining the 4 platforms and local CSV tracking. Use `⟩` prefix on section H2s.

2. **PlatformCards** — 4 cards in a 2×2 grid. Each card has the platform name (LinkedIn, X/Twitter, Email, Google Maps), a 1-line description, and an icon (simple inline SVG — no icon library). Cards link to `/platforms`.

3. **InstallSection** — Code block showing `npx skills add pathanaawej0-dot/Glean` with a copy-to-clipboard button. Below it: "Works with Claude Code, Codex, Cursor, opencode, Windsurf, and 67+ other agents."

4. **SocialProof** — "Works With" brand strip showing LinkedIn, X, Gmail, Google Maps logos as grey-scale SVG badges. GitHub badges (stars, license) as static shields.io images. Agent compatibility badge row.

5. **UseCaseCards** — 3 scenario cards in a row: "Find 50 YC founders in SF on LinkedIn", "Discover plumbers in Austin on Google Maps", "Send cold emails to Series A SaaS leads". Each has a brief explanation.

6. **ComparisonSection** — Two-column layout: "Before" (4 tabs, manual spreadsheet, no follow-up tracking) vs "After" (one command, unified CSV, automated pipeline).

7. **Sample CSV table** — Render a styled HTML table with 5-6 mock lead rows showing: id, name, title, company, platform, stage. Use the exact column names from the real CSV schema.

8. **ICP template preview** — Collapsed/expandable section showing the 9 ICP questions.

All copy should be written fresh for the site (not copied from README). Section H2s use `⟩ ` prefix.

## Acceptance criteria

- [ ] `/` renders all sections in order without layout breakage
- [ ] Hero heading, tagline, and subtitle are present
- [ ] Platform cards render in 2×2 grid and link to `/platforms`
- [ ] Code block shows install command and copy button works
- [ ] "Works with..." text below install block shows all agent names
- [ ] SocialProof strip shows 4 platform logos + GitHub badges + agent badges
- [ ] 3 use case cards render with text
- [ ] Before/After comparison renders in two columns
- [ ] Sample CSV table renders with correct column headers and mock data
- [ ] ICP preview section is expandable/collapsible
- [ ] All section H2s have `⟩` prefix
- [ ] Page renders without errors in browser

## Blocked by

- `.scratch/glean-site/issues/01-scaffold-design-system-layout.md`
