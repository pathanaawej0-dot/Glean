Status: ready-for-agent

## Parent

`.scratch/glean-site/PRD.md`

## What to build

The documentation section with sidebar navigation, all 6 doc pages, and the FAQ page.

**Docs layout (`/docs`):**
- Left sidebar with navigation links to each doc sub-page
- Right content area showing the selected doc
- `/docs` itself shows an overview/index of all documentation topics

**Sidebar links:**
- Getting Started (links to `/quickstart` — external link to that page)
- LinkedIn
- X/Twitter
- Email
- Google Maps
- Pipeline Management
- ICP Setup

**Doc pages (each is a content page with the sidebar layout):**

- `/docs/linkedin` — LinkedIn skill: search, extract profile, save to CSV, connect/message, follow-up, lead stages
- `/docs/x` — X skill: search profiles, search posts, extract, engage/DM, follow-up, lead stages
- `/docs/email` — Email skill: find emails, verify, save, send, track replies, follow-up
- `/docs/gmaps` — Google Maps skill: 8 customization questions, search, extract, email enrichment, save to CSV
- `/docs/pipeline` — CSV schema (all fields documented), lead stages table, commands for show/update/filter pipeline
- `/docs/icp` — ICP setup: the 9 questions with explanations, custom instructions section, tips for good ICPs

**`/faq`:**
Full-page FAQ (no sidebar). Sections:
- What is Glean?
- Do I need API keys? (no)
- What agents does it work with?
- How is data stored? (local CSV)
- Can I use it without BrowserAct? (no)
- How do I update the ICP?
- Can I export leads?
- Is there automation/cron? (no — everything is manual)

## Acceptance criteria

- [ ] `/docs` renders with sidebar navigation and content area
- [ ] All 6 doc pages render with sidebar visible and correct content
- [ ] Sidebar links navigate to correct sub-pages
- [ ] Active page is highlighted in sidebar
- [ ] `/faq` renders with all 8 questions answered
- [ ] FAQ page has nav/footer from layout
- [ ] All content uses fresh copy (not verbatim from README)
- [ ] H2s use `⟩ ` prefix

## Blocked by

- `.scratch/glean-site/issues/01-scaffold-design-system-layout.md`
