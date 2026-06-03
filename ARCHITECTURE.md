# Glean — Architecture

## Overview

Glean is an AI agent skill pack for lead management. It finds prospects on LinkedIn, X/Twitter, Email, and Google Maps, tracks them in a local CSV, and handles outreach — all through natural conversation with an AI coding agent.

No SaaS. No third-party CRM. No API keys. Everything runs locally through the user's browser via BrowserAct.

## Philosophy

- **Manual-first**: Every action is user-triggered. No automation, no cron, no scheduled tasks.
- **Local-first**: All data lives in `./glean-data/` relative to the user's project. No cloud sync.
- **Browser-native**: Uses the user's existing Chrome session (chrome-direct) to interact with web platforms.
- **Pipeline-over-tooling**: A simple CSV with stages replaces a CRM. Simplicity wins.
- **Skill-ecosystem**: Distributed via `npx skills add` — works across 67+ AI coding agents.

## Repository Structure

```
pathanaawej0-dot/Glean/
├── skills/
│   ├── glean/                 ← Entry point: setup + pipeline + orchestration
│   │   ├── SKILL.md           ← Skill instructions for the agent
│   │   ├── leads.csv          ← CSV template (bundled, installed with skill)
│   │   └── icp-template.md    ← ICP template (bundled, installed with skill)
│   ├── linkedin-outreach/     ← LinkedIn: search, connect, message, follow-up
│   │   └── SKILL.md
│   ├── x-outreach/            ← X/Twitter: search profiles/posts, reply, DM
│   │   └── SKILL.md
│   ├── email-outreach/        ← Email: find, verify, send, track
│   │   └── SKILL.md
│   ├── gmaps-outreach/        ← Google Maps: business search, enrichment
│   │   └── SKILL.md
│   └── browser-act/           ← BrowserAct CLI reference (copied from agent skills)
│       └── SKILL.md
├── glean-site/                ← Next.js marketing + docs site (source)
├── glean-logo.svg             ← Project logo (SVG)
├── README.md                  ← Install guide, command reference, CSV schema
├── ARCHITECTURE.md            ← This file
├── AGENTS.md                  ← Agent session context
├── LICENSE                    ← MIT
├── .gitignore
└── package.json               ← (future: site dependencies if needed)
```

## Skill Architecture

### How Skills Work Together

The skills use a **hub-and-spoke** pattern:

```
┌─────────────────────────────────┐
│         glean (hub)             │
│  Setup · Pipeline · Orchestrate │
│  Bundles: leads.csv, icp.md     │
└──────────┬──────────────────────┘
           │ loads platform skill
     ┌─────┼─────┬──────┬──────┐
     ▼     ▼     ▼      ▼      ▼
 ┌──────┐ ┌──┐ ┌─────┐ ┌────┐ ┌──────────┐
 │Linked│ │ X│ │Email│ │Maps│ │BrowserAct│
 │ -in  │ │  │ │     │ │    │ │ (ref)    │
 └──────┘ └──┘ └─────┘ └────┘ └──────────┘
```

- **glean** is the hub. The user loads this first. It handles setup (ICP questions, directory creation, BrowserAct installation) and pipeline management (view CSV, update stages, send follow-ups across platforms).
- **Platform skills** are loaded on demand. The user says "find leads on LinkedIn" → Glean loads `linkedin-outreach` skill. Each platform skill handles search, extraction, outreach, and platform-specific follow-up.
- **browser-act** is a shared reference skill. It's loaded by any platform skill when BrowserAct CLI commands are needed. Never invoked directly.

### Skill Lifecycle

1. **Install**: `npx skills add pathanaawej0-dot/Glean` copies all 6 skills to agent's skills directory (`.agents/skills/` or `~/.config/opencode/skills/`).
2. **Setup**: User says `"setup glean"`. Agent reads glean skill, runs first-run wizard:
   - Checks/installs BrowserAct CLI
   - Creates chrome-direct browser `glean`
   - Asks 9 ICP questions
   - Writes `./glean-data/icp/ideal-customer-profile.md`
   - Writes `./glean-data/data/leads.csv`
3. **Use**: User triggers any workflow. Agent loads relevant platform skill.
4. **Pipeline**: Agent reads/writes CSV directly. All state is in the file.

### Skill Loading Convention

Each SKILL.md has:
- `---` frontmatter with name and trigger description
- Agent reads the frontmatter `description` to decide when to load
- Platform skills start by saying "Load the `browser-act` skill for all CLI commands"
- All paths use `./glean-data/` (relative to cwd)

## Data Model

### CSV Schema

File: `./glean-data/data/leads.csv`

```
id,name,title,company,industry,linkedin_url,x_handle,email,stage,score,source,platform,tags,notes,first_contact,last_followup,next_followup
```

| Field | Type | Description |
|-------|------|-------------|
| `id` | int | Auto-incrementing ID |
| `name` | string | Lead name (person or business name) |
| `title` | string | Job title (LinkedIn/X) or business category (Maps) |
| `company` | string | Company name |
| `industry` | string | Industry classification |
| `linkedin_url` | string | LinkedIn profile URL |
| `x_handle` | string | X/Twitter handle |
| `email` | string | Email address |
| `stage` | enum | `discovered` → `contacted` → `replied` → `meeting_booked` → `converted` → `dead` |
| `score` | int | Lead score (0-100). For Maps: star rating * 20 |
| `source` | string | How the lead was found (e.g., "linkedin search: CTO SaaS", "maps: plumber Austin") |
| `platform` | enum | `linkedin`, `x`, `email`, `gmaps` — which platform sourced this lead |
| `tags` | string | Comma-separated tags for filtering |
| `notes` | string | Outreach notes, phone number, website URL |
| `first_contact` | date | Date of first outreach |
| `last_followup` | date | Date of most recent follow-up |
| `next_followup` | date | Scheduled next follow-up date |

### ICP Structure

File: `./glean-data/icp/ideal-customer-profile.md`

```markdown
# Ideal Customer Profile

## Target Role
- Title(s): <answer>
- Seniority: <answer>

## Industry
- <answer>

## Company
- Size: <answer>
- Stage: <answer>
- Location: <answer>

## Keywords for Search
- <answer>

## Outreach Angle
- <answer>

## Exclusions
- <answer>

## Custom Instructions for Agent
These rules override everything else. The agent MUST follow them strictly.
- Outreach tone:
- Connection note style:
- Follow-up cadence:
- Do NOT:
- Always:
- Lead qualification:
```

The agent reads this file before every outreach session. Exclusions are enforced strictly — the agent skips any lead matching exclusion criteria.

### Runtime Directory Structure

After setup, the user's project has:

```
./glean-data/
├── data/
│   └── leads.csv
└── icp/
    └── ideal-customer-profile.md
```

## Pipeline Flow

```
                    ┌─────────────┐
                    │  User says  │
                    │ "find leads"│
                    └──────┬──────┘
                           ▼
                    ┌─────────────┐
                    │  Load glean │
                    │   skill     │
                    └──────┬──────┘
                           ▼
              ┌──────────────────────┐
              │  Ask: which platform? │
              └──┬───┬───┬────┬──────┘
                 ▼   ▼   ▼    ▼
           ┌──────┐ ┌─┐ ┌──┐ ┌────┐
           │Linked │ │X│ │Mail│ │Maps│
           │ -in   │ │ │ │   │ │    │
           └───┬───┘ └┬┘ └┬──┘ └┬───┘
               │      │    │     │
               ▼      ▼    ▼     ▼
         ┌─────────────────────────┐
         │  Search, extract, save  │
         │  leads to CSV           │
         └────────────┬────────────┘
                      ▼
         ┌─────────────────────────┐
         │  Pipeline management:   │
         │  show, update, follow-up│
         └─────────────────────────┘
```

### Stages

| Stage | Meaning | Next Action |
|-------|---------|-------------|
| `discovered` | Found but not contacted | Send first outreach |
| `contacted` | First outreach sent | Wait for reply or follow-up |
| `replied` | Lead responded | Engage further, try to book meeting |
| `meeting_booked` | Meeting scheduled | Prepare for call |
| `converted` | Deal won / qualified | Move to active customer track |
| `dead` | No longer pursuing | No further action |

## Platform Workflows

### LinkedIn

1. Navigate to LinkedIn search with ICP keywords
2. Scroll and extract profile URLs from search results
3. Visit each profile, extract: name, title, company, location, about
4. Save to CSV with `platform=linkedin`
5. On user command: navigate to profile, send connect request with personalized note from ICP angle
6. Follow-up: check CSV for `stage=contacted` where `last_followup` > 3 days, send InMail/message

### X/Twitter

1. Search X for profiles matching ICP keywords (`?f=user`)
2. Search X for posts with pain-point keywords (`?f=live`)
3. Extract: name, bio, location, website, recent posts
4. Save to CSV with `platform=x`
5. On user command: reply to posts with value-add comments, or send DMs
6. Follow-up: same cadence as LinkedIn

### Email

1. Cross-reference LinkedIn/X profiles with email finder tools (via BrowserAct)
2. Verify email deliverability
3. Save to CSV with `platform=email`
4. On user command: compose and send personalized email via Gmail/Outlook
5. Track replies, update stage

### Google Maps

1. Agent asks 8 customization questions before searching
2. Search Maps for `<keyword> in <location>`
3. Extract from result cards + detail panels: name, category, address, phone, website, rating
4. Optionally visit each business website to find emails
5. Save to CSV with `platform=gmaps`
6. Outreach uses email (if found) or cross-reference to other platforms

## Glean-Site Architecture

### Purpose

Multi-page marketing website and documentation for Glean. Hosted on Vercel. Built with Next.js + Tailwind CSS.

### Design System

Mirrors [openclaw.ai](https://openclaw.ai) — minimalist, monochrome dark theme.

| Token | Value |
|-------|-------|
| Background | `#050810` |
| Text | `#f0f4ff` |
| Accent | TBD (purple? orange?) |
| Font | Satoshi / system-ui sans-serif |
| H1 | 72px bold, -2.16px letter-spacing |
| H2 | 22.4px semibold, `⟩` prefix |
| Body | 16px |
| Nav | 14.4px semibold |

### Page Structure

```
/
├── (Home)           → Hero, platform cards, GitHub stats, Install CTA
├── platforms/       → 4 sections: LinkedIn, X, Email, Google Maps
├── quickstart/      → Install guide, first-run setup, pipeline walkthrough
├── docs/            → Documentation index (sidebar nav)
│   ├── linkedin     → LinkedIn skill reference
│   ├── x            → X skill reference
│   ├── email        → Email skill reference
│   ├── gmaps        → Google Maps skill reference
│   └── pipeline     → Pipeline management, CSV schema, stages
├── faq/             → Frequently asked questions
└── showcase/        → (future) Community usage examples
```

#### Navigation

```
Glean | Platforms | Quickstart | Docs | GitHub | Install
```

- "Glean" = logo + home link
- "Install" = prominent CTA button (different visual weight)

### Social Proof Strategy

Since Glean has no real users yet:

1. **"Works With" brand strip** — LinkedIn, X/Twitter, Gmail, Google Maps logos. Borrows credibility from established platforms.
2. **Sample CSV output** — A rendered table showing mock leads (name, title, company, platform, stage). Proves the tool produces real output.
3. **GitHub badges** — Star count, last commit, license. Shows activity and credibility.
4. **Agent compatibility badges** — "Works with Claude Code, Codex, Cursor, opencode, Windsurf, and 67+ others"
5. **Use case scenarios** — Mini-cards like "Find 50 YC founders in SF on LinkedIn in 10 min" — aspirational proof
6. **Comparison section** — "Before: 4 browser tabs, manual spreadsheet, no follow-up tracking. After: one command, unified CSV, automated pipeline"
7. **ICP template preview** — Shows the structured approach, proves it's a real methodology

### Route Design

| Route | File | Content |
|-------|------|---------|
| `/` | `app/page.tsx` | Hero, platform summary, GitHub stats, install CTA, badges, social proof strip |
| `/platforms` | `app/platforms/page.tsx` | 4 platform sections with workflow + sample output |
| `/quickstart` | `app/quickstart/page.tsx` | Install, setup walkthrough, first pipeline |
| `/docs` | `app/docs/page.tsx` | Documentation sidebar + content area |
| `/docs/linkedin` | `app/docs/linkedin/page.tsx` | LinkedIn skill docs |
| `/docs/x` | `app/docs/x/page.tsx` | X skill docs |
| `/docs/email` | `app/docs/email/page.tsx` | Email skill docs |
| `/docs/gmaps` | `app/docs/gmaps/page.tsx` | Google Maps skill docs |
| `/docs/pipeline` | `app/docs/pipeline/page.tsx` | Pipeline, CSV schema, stages |
| `/docs/icp` | `app/docs/icp/page.tsx` | ICP setup and customization |
| `/faq` | `app/faq/page.tsx` | FAQ |
| `/showcase` | `app/showcase/page.tsx` | (Future) Community examples |

### Tech Stack

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Framework | Next.js 15 (App Router) | SSG-friendly, Vercel-native, file-based routing |
| Styling | Tailwind CSS v4 | Matches openclaw's utility-first approach |
| Font | Satoshi (via next/font) | Same as openclaw |
| Deployment | Vercel | Zero-config, free tier, auto-deploy from GitHub |
| Domain | glean.sh (or glean-leads.com) | Short, memorable (TBD) |

### Dev Setup

```bash
cd glean-site
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir
npm install @fontsource/satoshi
npm run dev
```

## Tech Choices & Rationale

| Decision | Choice | Why |
|----------|--------|-----|
| Distribution | `npx skills add` | Works across 67+ agents, no npm packaging needed |
| Browser automation | BrowserAct (chrome-direct) | Uses user's existing Chrome session, no separate browser |
| Data storage | Local CSV | Simplest possible, zero infra, git-trackable |
| Project scope | `./glean-data/` | Relative to project, not home dir — works in any workspace |
| No automation | Manual only | User wants full control, no cron, no scheduled tasks |
| Website framework | Next.js + Tailwind | Same ecosystem as openclaw, easy Vercel deploy |
| Website theme | Dark minimal | Matches openclaw aesthetic, dev audience expectation |
| Outreach platforms | LinkedIn, X, Email, Maps | Covers professional social, social media, direct email, local business |

## Roadmap

### Phase 1 — Current (v1.0)
- 4 platform skills working
- ICP setup with 9 questions
- CSV pipeline management
- Basic outreach (connect, DM, email, follow-up)
- README + install guide

### Phase 2 — Website (v1.1)
- glean-site built and deployed
- Social proof sections live
- Full documentation pages

### Phase 3 — Community (v1.2+)
- Reddit outreach skill
- Better email finder workflows
- Lead scoring improvements
- Additional platform support (GitHub, Discord, Slack)
- Showcase page with community examples
