# Glean — AI Agent Lead Management

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Install with npx skills](https://img.shields.io/badge/install-npx%20skills-6B46C1)](https://github.com/pathanaawej0-dot/Glean)
[![BrowserAct](https://img.shields.io/badge/powered%20by-BrowserAct-FF6B35)](https://www.browseract.com)

**Glean** is an AI agent skill pack that turns your coding agent into a lead management system. It searches **LinkedIn, X/Twitter, and Email** for prospects matching your ideal customer profile (ICP), tracks them in a local CSV, and handles outreach — all through natural conversation.

No SaaS. No third-party CRM. No API keys. Everything runs locally through your browser.

> Glean means to gather slowly and deliberately — just like building a quality pipeline.

## How It Works

| You Say | Agent Does |
|---------|-----------|
| `"setup glean"` | Asks 9 ICP questions, creates `./glean-data/` directory and browser |
| `"find leads on LinkedIn"` | Searches LinkedIn with ICP keywords, extracts profiles to CSV |
| `"find leads on X"` | Searches X/Twitter profiles and posts, saves to CSV |
| `"find leads via email"` | Finds and verifies email addresses, saves to CSV |
| `"show my pipeline"` | Reads CSV, shows breakdown by stage and platform |
| `"send follow-ups"` | Finds contacted leads >3 days old, sends follow-ups |
| `"update lead 5 to replied"` | Updates CSV stage for a lead |
| `"connect with John from Google"` | Opens LinkedIn profile, sends personalized connection request |

No automation. No cron. No scheduled tasks. Everything is manual — you ask, the agent does.

## Prerequisites

- **Node.js** (for `npx skills`)
- **BrowserAct CLI** — auto-installed by the agent during setup, or manually:
  ```bash
  uv tool install browser-act-cli --python 3.12
  ```
- **Google Chrome** — for browser automation (remote debugging mode)

## Install

```bash
npx skills add pathanaawej0-dot/Glean
```

This installs 5 skills to your AI agent. Works with **OpenCode, Claude Code, Codex, Cursor, Windsurf, and 67+ other agents**.

### Installed Skills

| Skill | Description |
|-------|-------------|
| `glean` | Main entry point — setup, pipeline, orchestration across all platforms |
| `linkedin-outreach` | LinkedIn people search, profile extraction, connection requests, messaging |
| `x-outreach` | X/Twitter profile and post search, replies, DMs |
| `email-outreach` | Email discovery, verification, sending, tracking |
| `browser-act` | BrowserAct CLI reference (loaded automatically by other skills) |

### Verify Installation

Open your AI agent and say:
> *"list installed skills"*

You should see: `glean`, `linkedin-outreach`, `x-outreach`, `email-outreach`, `browser-act`.

## First Run

### 1. Start Fresh

Open your AI agent and type:

> *"setup glean"*

The agent will take it from here — asking 9 ICP questions one at a time.

### 2. Answer ICP Questions

The agent asks (one by one, waiting for your answer):
1. **Target Role** — e.g., CTO, VP Engineering, Head of Product
2. **Industry** — e.g., SaaS, Fintech, HealthTech
3. **Company Size** — e.g., 1-10, 10-50, 50-200
4. **Company Stage** — e.g., Bootstrapped, Seed, Series A
5. **Location** — e.g., US, EU, Remote
6. **Keywords** — search terms for finding leads
7. **Outreach Angle** — your value proposition
8. **Exclusions** — who to skip (e.g., agencies, students)
9. **Custom Instructions** — outreach tone, style, do's/don'ts

### 3. Setup Complete

The agent creates `./glean-data/` with your ICP, an empty CSV with headers, and a BrowserAct browser named `glean`. Make sure you're logged into LinkedIn, X/Twitter, and Gmail/Outlook in Chrome before this step.

## Daily Use

### Finding Leads

| Command | Platform | Agent Action |
|---------|----------|-------------|
| `"find 10 leads on LinkedIn"` | LinkedIn | Searches people with ICP keywords, visits profiles, saves to CSV |
| `"find leads posting about GEO on X"` | X/Twitter | Searches posts with pain-point keywords, extracts profiles |
| `"find emails for my ICP on LinkedIn"` | Email | Cross-references LinkedIn profiles with email finders |
| `"find leads interested in AI agents"` | All | Asks which platform, then searches |

### Managing Pipeline

| Command | Agent Action |
|---------|-------------|
| `"show my pipeline"` | Reads CSV, shows breakdown by stage and platform |
| `"show leads by platform"` | Groups leads by LinkedIn/X/Email |
| `"show leads who replied"` | Filters CSV for stage=replied |

### Outreach

| Command | Agent Action |
|---------|-------------|
| `"send connection requests to 5 discovered leads"` | Opens each LinkedIn profile, sends personalized connect request |
| `"reply to John's tweet"` | Opens X profile, writes reply using outreach angle |
| `"send email to leads at Series A startups"` | Composes and sends personalized emails |

### Following Up

| Command | Agent Action |
|---------|-------------|
| `"send follow-ups"` | Checks all platforms for leads contacted >3 days ago, sends follow-up |
| `"mark lead 5 as meeting booked"` | Updates CSV stage in-place |

## Project Structure

```
./glean-data/
├── data/
│   └── leads.csv               ← All leads (agent creates at setup)
└── icp/
    └── ideal-customer-profile.md  ← Your ICP (agent creates at setup)
```

The data lives at `./glean-data/` in your project directory. The skills live in your agent's config directory (installed by `npx skills add`).

### CSV Schema

```
id,name,title,company,industry,linkedin_url,x_handle,email,stage,score,source,platform,tags,notes,first_contact,last_followup,next_followup
```

| Field | Description |
|-------|-------------|
| `platform` | `linkedin`, `x`, or `email` — which source the lead came from |
| `stage` | `discovered` → `contacted` → `replied` → `meeting_booked` → `converted` → `dead` |
| `source` | e.g., "LinkedIn search", "X post reply", "email finder" |
| `custom_instructions` | Stored in ICP file, read by agent before every outreach |

## Tips

- **Be specific** — "find leads on LinkedIn" gives LinkedIn results. "find leads" without platform prompts you to choose.
- **Update stages** — keep your pipeline accurate so follow-ups target the right leads.
- **Custom instructions** — set tone, max follow-ups, and rules in the ICP. The agent reads these before every outreach.
- **Check-ins** — ask "show my pipeline" daily to see where things stand.

## Contributing

PRs welcome! Ideas for contributions:
- Reddit outreach skill
- Better email finder workflows
- Lead scoring improvements
- Additional platform support (GitHub, Discord)

## License

MIT — see [LICENSE](LICENSE).

## Built With

- [BrowserAct](https://www.browseract.com) — browser automation CLI
- [npx skills](https://github.com/vercel-labs/skills) — open agent skills ecosystem
- [OpenCode](https://opencode.ai) — AI coding agent
