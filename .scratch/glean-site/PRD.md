Status: ready-for-agent

# Glean-Site — Marketing Website & Documentation

## Problem Statement

Glean is a published open-source AI agent skill pack on GitHub, but it has no web presence. Potential users discover the repo through `npx skills add` listings or GitHub search, then hit a plain README. There is no way to:

- Understand Glean's value proposition at a glance
- Browse platform-specific workflows without reading raw SKILL.md files
- See what the tool produces (sample output, CSV preview)
- Access polished documentation outside of terminal README
- Install Glean with a single click/command after being convinced

Without a website, Glean lacks credibility, discoverability, and conversion. Developers evaluating lead-gen tools need to see proof it works before they `npx skills add` it.

## Solution

A multi-page marketing website + documentation site at `glean-site/`, built with Next.js 15 + Tailwind CSS v4, deployed to Vercel. Dark minimalist design inspired by openclaw.ai.

The site serves three audiences:
- **Browsers** — land on homepage, see what Glean does, click Install
- **Evaluators** — read platform docs, see sample CSV output, understand the pipeline
- **Users** — reference documentation for setup, ICP, per-platform workflows

## User Stories

1. As a developer landing on the site, I want to see a clear hero explaining what Glean does, so that I know within 5 seconds if it's relevant to me.
2. As a developer, I want to see the four supported platforms (LinkedIn, X, Email, Google Maps) summarized, so that I know if my channels are covered.
3. As a developer, I want to see the install command prominently displayed, so that I can copy-paste it immediately.
4. As a developer, I want to see GitHub badges (stars, license, last commit), so that I can assess project credibility.
5. As a developer, I want to see a "Works With" brand strip showing LinkedIn, X, Gmail, and Google Maps logos, so that I know Glean integrates with tools I already use.
6. As a developer, I want to see compatibility badges showing which AI agents Glean works with (Claude Code, Codex, Cursor, opencode, Windsurf, 67+ others), so that I know it works with my setup.
7. As a developer, I want to see sample CSV output with mock leads, so that I can visualize what the tool produces before installing.
8. As a developer, I want to see use case scenario cards (e.g., "Find 50 YC founders in SF on LinkedIn"), so that I can imagine applying it to my own needs.
9. As a developer, I want to see a "Before vs After" comparison of manual lead hunting vs using Glean, so that I understand the value proposition concretely.
10. As an evaluator, I want to visit a dedicated /platforms page, so that I can read detailed workflow descriptions for each platform.
11. As an evaluator, I want each platform section to show a step-by-step workflow, so that I understand how the agent operates on that platform.
12. As an evaluator, I want to see a /quickstart page with a full install and setup walkthrough, so that I can get started without reading raw markdown.
13. As an evaluator, I want the quickstart to include first-run ICP setup, so that I know what questions the agent will ask me.
14. As an evaluator, I want to see a preview of the ICP template, so that I can prepare my answers before running setup.
15. As a user, I want to visit a /docs section with a sidebar navigation, so that I can reference platform-specific documentation.
16. As a user, I want a /docs/linkedin page explaining LinkedIn skill commands and workflow, so that I can reference it during use.
17. As a user, I want a /docs/x page explaining X/Twitter skill commands and workflow, so that I can reference it during use.
18. As a user, I want a /docs/email page explaining email skill commands and workflow, so that I can reference it during use.
19. As a user, I want a /docs/gmaps page explaining Google Maps skill commands and workflow, so that I can reference it during use.
20. As a user, I want a /docs/pipeline page explaining CSV schema, stages, and pipeline management, so that I can understand the data model.
21. As a user, I want a /docs/icp page explaining ICP setup and customization, so that I can optimize my targeting.
22. As any visitor, I want a /faq page answering common questions, so that I can resolve doubts without contacting anyone.
23. As a visitor, I want the site to be fully responsive, so that I can browse on mobile or desktop.
24. As a visitor, I want the site to load fast (Lighthouse 90+), so that I don't wait for content.
25. As a developer considering contributing, I want to see a link to GitHub and contributing guide, so that I know how to get involved.
26. As a brand builder, I want the site to use consistent design tokens (colors, typography, spacing) matching openclaw's aesthetic, so that Glean feels like part of the agent ecosystem.

## Implementation Decisions

### Framework & Stack

- **Next.js 15** with App Router for file-based routing and static generation
- **Tailwind CSS v4** for utility-first styling matching openclaw's approach
- **Satoshi** font via `next/font` or `@fontsource/satoshi` — same as openclaw.ai
- **Vercel** for deployment — zero-config, auto-deploy from GitHub

### Design System

Dark minimalist theme mirroring openclaw.ai:

| Token | Value |
|-------|-------|
| Background | `#050810` |
| Surface/card | `#0a0e1a` |
| Text primary | `#f0f4ff` |
| Text secondary | `#8892a4` |
| Accent | `#6B46C1` (purple — matches npx skills brand) |
| Font family | Satoshi, system-ui, sans-serif |
| Body size | 16px |
| H1 | 72px bold, -2.16px letter-spacing |
| H2 | 22.4px semibold with `⟩` prefix |
| Nav | 14.4px semibold |
| Section padding | 60px 24px 40px |

### Route Structure

| Route | File | Content |
|-------|------|---------|
| `/` | `app/page.tsx` | Hero, platform cards, GitHub stats, install CTA, social proof strip, use cases |
| `/platforms` | `app/platforms/page.tsx` | LinkedIn, X, Email, Maps — each with workflow steps + sample output |
| `/quickstart` | `app/quickstart/page.tsx` | Install command, setup walkthrough, first pipeline, ICP preview |
| `/docs` | `app/docs/page.tsx` | Documentation layout with sidebar navigation |
| `/docs/linkedin` | `app/docs/linkedin/page.tsx` | LinkedIn skill reference |
| `/docs/x` | `app/docs/x/page.tsx` | X/Twitter skill reference |
| `/docs/email` | `app/docs/email/page.tsx` | Email skill reference |
| `/docs/gmaps` | `app/docs/gmaps/page.tsx` | Google Maps skill reference |
| `/docs/pipeline` | `app/docs/pipeline/page.tsx` | Pipeline management, CSV schema, stages |
| `/docs/icp` | `app/docs/icp/page.tsx` | ICP setup and customization guide |
| `/faq` | `app/faq/page.tsx` | Frequently asked questions |

### Component Architecture

```
components/
├── layout/
│   ├── Header.tsx        ← Nav bar with links + Install CTA button
│   ├── Footer.tsx        ← Links: GitHub, Discord, License, Docs
│   └── RootLayout.tsx    ← Wraps all pages (header + footer + main)
├── home/
│   ├── Hero.tsx          ← H1 + tagline + subtitle
│   ├── PlatformCards.tsx ← 4 card grid summarizing platforms
│   ├── InstallSection.tsx← Code block with copy button
│   ├── SocialProof.tsx   ← "Works With" logos + GitHub badges
│   ├── UseCaseCards.tsx  ← Scenario mini-cards
│   └── ComparisonSection.tsx ← Before vs After
├── docs/
│   ├── Sidebar.tsx       ← Docs navigation sidebar
│   └── DocPage.tsx       ← Content wrapper for doc pages
└── shared/
    ├── CodeBlock.tsx     ← Syntax highlighted code with copy btn
    └── Badge.tsx          ← Agent compatibility badges
```

### Navigation Bar

```
[Glean logo]  Platforms  Quickstart  Docs  FAQ  [GitHub icon]  [Install button]
```

"Install" is a visually distinct CTA button (purple accent). All other items are text links at 14.4px semibold.

### Social Proof Strategy

Since Glean has no real users at launch, the site uses:

1. **"Works With" platform strip** — LinkedIn, X/Twitter, Gmail, Google Maps brand logos (greyed, linked to respective platforms)
2. **Sample CSV output** — Rendered table with mock leads data (proves the output format exists)
3. **GitHub badges** — Star count, license, last commit (from shields.io)
4. **Agent compatibility badges** — "Claude Code · Codex · Cursor · opencode · Windsurf · 67+ more"
5. **Use-case scenario cards** — e.g., "Find 50 YC SaaS founders in SF on LinkedIn in 10 minutes"
6. **Before/After comparison** — "Before: 4 tabs, manual spreadsheet, no follow-up tracking. After: one command, unified CSV, automated pipeline."
7. **ICP template preview** — Shows the structured ICP questions (proves methodology)
8. **"Built for developers"** — Tone conveys understanding of the target audience

### Content

All copy should be written fresh for the site, not copied verbatim from README. Tone: minimalist, confident, developer-first. Short sentences. No hype — just what it does.

Key tagline: `GLEAN — THE LEAD SKILL THAT ACTUALLY FINDS PEOPLE.`

## Testing Decisions

This is a static marketing website. Testing focuses on correctness and quality:

- **Link checking** — all internal routes and external links are valid
- **Lighthouse audit** — target 90+ across Performance, Accessibility, Best Practices, SEO
- **Visual consistency** — check all pages match design tokens (colors, spacing, typography)
- **Responsive** — verify layout at 375px, 768px, 1024px, 1440px viewports
- **No prior art** for web tests in this repo — first site. Use `@playwright/test` if E2E testing is desired, or manual checklist for v1.

Acceptance criteria: all routes render without error, nav links navigate correctly, code blocks display properly, responsive layout works on mobile and desktop.

## Out of Scope

- User authentication or accounts
- Blog or content management system
- Interactive demos or playground
- Real-time GitHub stats API calls (use static badges)
- Analytics or cookie consent (future)
- Community showcase page content (no community yet — page shell can exist but content deferred)
- Dark/light mode toggle (dark only, matching openclaw)
- i18n (English only for v1)

## Further Notes

- The logo file `glean-logo.svg` exists in the repo root — use it in the header hero and as favicon
- The site should be fully static (SSG) — no server runtime needed. Pre-render all pages at build time
- Domain: TBD — start with Vercel `.vercel.app` preview domain, add custom domain later
- README.md and ARCHITECTURE.md contain source material for all site content
- Icons can use simple SVG inline or lucide-react — no icon library dependency for v1
- The `⟩` prefix on section headings is a deliberate stylistic choice matching openclaw.ai — use `⟩ ` before all H2 headings on marketing pages
