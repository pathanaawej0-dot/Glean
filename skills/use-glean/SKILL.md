---
name: use-glean
description: "Glean — AI-powered lead management CRM. Use when the user says: glean, lead management, outreach, prospecting, find leads, my pipeline, CRM, lead tracking. On first run, guides the user through ICP setup by asking questions one at a time. After setup, runs outreach workflows."
---

# Glean

BrowserAct-powered lead management. Finds prospects on LinkedIn/X, tracks them in CSV, automates outreach.

## Requirements

Before first run, the user must have BrowserAct installed. Load the `browser-act` skill from `~/glean/skills/browser-act/SKILL.md` and run its setup.

### 0. Install BrowserAct

Load the `browser-act` skill, then run:

```bash
uv tool install browser-act-cli --python 3.12
browser-act get-skills core --skill-version 2.0.2
```

## First Run Setup

If `~/glean/icp/ideal-customer-profile.md` contains only the template (default), or `~/glean/data/leads.csv` has no leads, run first-run setup.

### Step 1: Greet & Explain

Tell the user:
> "Glean is your AI lead management system. I'll search LinkedIn and X, find prospects matching your target, track them in a CSV, and handle outreach. First, I need to know who you want to target."

### Step 2: Ask ICP Questions (one at a time)

Ask each question, wait for answer, save. Do NOT dump all questions at once.

1. **Target Role**: "What role/title should I target? (e.g., CTO, VP Engineering, Head of Product)"
2. **Industry**: "What industry? (e.g., SaaS, Fintech, HealthTech)"
3. **Company Size**: "Company size? (e.g., 1-10, 10-50, 50-200, 200-1000, 1000+)"
4. **Company Stage**: "Company stage? (e.g., Bootstrapped, Seed, Series A, B, C+, Enterprise)"
5. **Location**: "Target location? (e.g., US, EU, Remote, India)"
6. **Keywords**: "Keywords to search for? (e.g., AI agent, browser automation, web scraping)"
7. **Outreach Angle**: "What's your outreach angle? What value do you offer? (e.g., 'We built a tool that automates LinkedIn outreach using AI agents')"
8. **Exclusions**: "Anything to exclude? (e.g., agencies, freelancers, students)"
9. **Custom Instructions**: "Any specific instructions for how I should handle outreach? Tone, style, do's and don'ts, follow-up rules? (e.g., casual tone, no pitching in first message, wait 5 days before follow-up)"

### Step 3: Save ICP

```bash
cat > ~/glean/icp/ideal-customer-profile.md << 'ICPEOF'
# Ideal Customer Profile

## Target Role
- Title(s): <answer1>
- Seniority: <answer1>

## Industry
- <answer2>

## Company
- Size: <answer3>
- Stage: <answer4>
- Location: <answer5>

## Keywords for Search
- <answer6>

## Outreach Angle
- <answer7>

## Exclusions
- <answer8>

## Custom Instructions for Agent

These rules override everything else. The agent MUST follow them strictly.

- <answer9>
ICPEOF
```

### Step 4: Setup BrowserAct & Create Browser

Load the `browser-act` skill from `~/glean/skills/browser-act/SKILL.md` for full CLI usage guide. Then:

```bash
# Check if browser exists
browser-act browser list
```

If no browser named `glean` exists, ask user to log into LinkedIn in Chrome first, then create:

```bash
browser-act browser create --name glean --type chrome-direct --desc "Glean LinkedIn outreach browser"
```

### Step 5: Confirm Setup

> "Glean is ready! I'll search for leads matching your ICP. Want me to find the first batch?"

## Daily Workflows

### Find Leads

```bash
# Search LinkedIn
browser-act --session glean navigate "https://www.linkedin.com/search/results/people/?keywords=<keywords>"
browser-act --session glean state
# Extract profiles and save to CSV
```

### Check Pipeline

```bash
# Show pipeline summary
echo "=== GLEAN PIPELINE ==="
echo "Discovered: $(tail -n +2 ~/glean/data/leads.csv | grep -c ',discovered,')"
echo "Contacted: $(tail -n +2 ~/glean/data/leads.csv | grep -c ',contacted,')"
echo "Replied: $(tail -n +2 ~/glean/data/leads.csv | grep -c ',replied,')"
echo "Meetings: $(tail -n +2 ~/glean/data/leads.csv | grep -c ',meeting_booked,')"
echo "Converted: $(tail -n +2 ~/glean/data/leads.csv | grep -c ',converted,')"
```

### Send Connection Requests

```bash
# Get a lead from discovered stage
browser-act --session glean navigate "<linkedin_url>"
browser-act --session glean click <connect_button>
browser-act --session glean input <note_field> "Hi <name>, <outreach_angle>"
browser-act --session glean click <send_button>
# Update CSV stage to contacted
```

### Follow Up

Check for leads with stage=contacted and last_followup > 3 days. Send follow-up message.

## File Paths

- ICP: `~/glean/icp/ideal-customer-profile.md`
- Leads: `~/glean/data/leads.csv`
- Scripts: `~/glean/scripts/daily-outreach.sh`
