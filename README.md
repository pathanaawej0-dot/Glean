# Glean — AI Agent Lead Management

A private CRM powered by BrowserAct. AI agents find leads on **LinkedIn, X/Twitter, and Email**, track them in a CSV, and handle outreach. All manual, all you.

Glean means to gather slowly and deliberately — just like building a quality pipeline.

## Install

```bash
npx skills add pathanaawej0-dot/Glean
```

Installs 5 skills to your AI agent (works with OpenCode, Claude Code, Codex, Cursor, and 67+ agents).

## Structure

```
glean/
├── skills/
│   ├── glean/                  ← Main entry: setup + pipeline + orchestration
│   ├── linkedin-outreach/     ← LinkedIn: search, connect, message
│   ├── x-outreach/            ← X/Twitter: search, reply, DM
│   ├── email-outreach/        ← Email: find, verify, send
│   └── browser-act/           ← BrowserAct CLI reference
├── data/
│   └── leads.csv              ← All leads (created by agent at setup)
├── icp/
│   └── ideal-customer-profile.md  ← Your ICP (created by agent at setup)
├── .gitignore
├── LICENSE
└── README.md
```

## Usage

| You Say | Agent Does |
|---------|-----------|
| "setup glean" | Asks ICP questions, creates `~/glean/` and browser |
| "find leads on LinkedIn" | Searches LinkedIn, extracts profiles, saves to CSV |
| "find leads on X" | Searches X, extracts profiles, saves to CSV |
| "find leads via email" | Finds/verifies emails, saves to CSV |
| "show my pipeline" | Reads CSV, shows breakdown by stage and platform |
| "send follow-ups" | Finds contacted leads >3 days, sends follow-ups |
| "update lead 5 to replied" | Updates CSV stage for that lead |

No automation. No cron. Everything requires you to ask.
