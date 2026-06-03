# Glean — AI Agent Lead Management

A private CRM powered by BrowserAct. An AI agent finds leads on LinkedIn/X, tracks them in a CSV, and handles outreach automatically. Glean means to gather slowly and deliberately — just like building a quality pipeline.

## Structure

```
glean/
├── LICENSE                         # MIT License
├── icp/
│   └── ideal-customer-profile.md   # Define who to target
├── data/
│   └── leads.csv                   # All lead data
├── skills/
│   ├── browser-act/
│   │   └── SKILL.md                # BrowserAct CLI skill
│   ├── linkedin-outreach/
│   │   └── SKILL.md                # LinkedIn automation skill
│   └── use-glean/
│       └── SKILL.md                # Main Glean skill (start here)
├── scripts/
│   └── daily-outreach.sh           # Cron entry point
└── README.md
```

## Setup

1. Edit `icp/ideal-customer-profile.md` — tell the agent who to target
2. Create a Chrome browser with LinkedIn login:
   ```
   browser-act browser create --name glean --type chrome-direct --desc "Glean LinkedIn outreach browser"
   ```
3. Add cron job:
   ```
   crontab -e
   0 9 * * 1-5 /home/aawej/glean/scripts/daily-outreach.sh
   ```

## Usage

- "Find 10 new leads matching my ICP"
- "Extract profiles from my LinkedIn search results"
- "Send connection requests to 5 leads in 'discovered' stage"
- "Follow up with leads contacted more than 3 days ago"
- "Show me my pipeline"
