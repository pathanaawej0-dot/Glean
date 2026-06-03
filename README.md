# Glean — AI Agent Lead Management

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Install with npx skills](https://img.shields.io/badge/install-npx%20skills-6B46C1)](https://github.com/pathanaawej0-dot/Glean)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fpathanaawej0-dot%2FGlean)
[![BrowserAct](https://img.shields.io/badge/powered%20by-BrowserAct-FF6B35)](https://www.browseract.com)

**Glean** is an AI agent skill pack that turns your coding agent into a lead management system. It searches **LinkedIn, X/Twitter, Email, and Google Maps** for prospects matching your ideal customer profile (ICP), tracks them in a local CSV, and handles outreach — all through natural conversation.

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

This installs 6 skills to your AI agent. Works with **OpenCode, Claude Code, Codex, Cursor, Windsurf, and 67+ other agents**.

### Installed Skills

| Skill | Description | Bundled Templates |
|-------|-------------|-------------------|
| `glean` | Main entry — setup, pipeline, orchestration | `leads.csv`, `icp-template.md` |
| `linkedin-outreach` | LinkedIn people search, connect, message | — |
| `x-outreach` | X/Twitter search, reply, DM | — |
| `email-outreach` | Email discovery, verification, sending | — |
| `gmaps-outreach` | Google Maps local business search, enrichment | — |
| `browser-act` | BrowserAct CLI reference | — |

### Verify Installation

Open your AI agent and say:
> *"list installed skills"*

You should see: `glean`, `linkedin-outreach`, `x-outreach`, `email-outreach`, `gmaps-outreach`, `browser-act`.

## First Run — "setup glean"

Open your agent and type:

> *"setup glean"*

The agent will:
1. Check/install BrowserAct and create a browser
2. Ask **9 ICP questions** one at a time (role, industry, size, stage, location, keywords, angle, exclusions, custom instructions)
3. Create `./glean-data/` with your ICP and lead CSV right in your current project

```
./glean-data/
├── data/
│   └── leads.csv
└── icp/
    └── ideal-customer-profile.md
```

4. Confirm everything is ready

## Daily Use

### Finding Leads

| Command | Platform | Agent Action |
|---------|----------|-------------|
| `"find 10 leads on LinkedIn"` | LinkedIn | Searches people with ICP keywords, visits profiles, saves to CSV |
| `"find leads posting about GEO on X"` | X/Twitter | Searches posts with pain-point keywords, extracts profiles |
| `"find emails for my ICP"` | Email | Cross-references LinkedIn/X profiles with email finders |
| `"find plumbers in Austin on Google Maps"` | Google Maps | Asks customization questions, searches, extracts to CSV |

### Managing Pipeline

| Command | Agent Action |
|---------|-------------|
| `"show my pipeline"` | Reads CSV, shows breakdown by stage and platform |
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
pathanaawej0-dot/Glean/
├── skills/
│   ├── glean/                 ← Entry: setup + pipeline + orchestration
│   │   ├── SKILL.md           ← Skill instructions
│   │   ├── leads.csv          ← CSV template (bundled)
│   │   └── icp-template.md    ← ICP template (bundled)
│   ├── linkedin-outreach/     ← LinkedIn workflow
│   ├── x-outreach/            ← X/Twitter workflow
│   ├── email-outreach/        ← Email workflow
│   ├── gmaps-outreach/        ← Google Maps workflow
│   └── browser-act/           ← CLI reference
├── .gitignore
├── LICENSE
└── README.md
```

After setup, `./glean-data/` appears in your working directory:
```
./glean-data/
├── data/
│   └── leads.csv
└── icp/
    └── ideal-customer-profile.md
```

### CSV Schema

```
id,name,title,company,industry,linkedin_url,x_handle,email,stage,score,source,platform,tags,notes,first_contact,last_followup,next_followup
```

| Field | Description |
|-------|-------------|
| `platform` | `linkedin`, `x`, `email`, or `gmaps` — which source the lead came from |
| `stage` | `discovered` → `contacted` → `replied` → `meeting_booked` → `converted` → `dead` |

## Tips

- **Be specific** — "find leads on LinkedIn" searches LinkedIn. "find leads" prompts you to pick a platform.
- **Update stages** — keep your pipeline accurate so follow-ups target the right leads.
- **Custom instructions** — set tone, max follow-ups, and rules in the ICP. Agent reads these before every outreach.
- **Check-ins** — "show my pipeline" daily to see where things stand.

## Contributing

PRs welcome! Ideas:
- Reddit outreach skill
- Better email finder workflows
- Lead scoring improvements
- Additional platform support (GitHub, Discord, Reddit)

## License

MIT — see [LICENSE](LICENSE).

## Built With

- [BrowserAct](https://www.browseract.com) — browser automation CLI
- [npx skills](https://github.com/vercel-labs/skills) — open agent skills ecosystem
- [OpenCode](https://opencode.ai) — AI coding agent
