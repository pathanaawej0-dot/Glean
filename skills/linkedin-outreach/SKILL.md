---
name: linkedin-outreach
description: "LinkedIn lead generation and outreach automation. Use when the user says: find leads on LinkedIn, LinkedIn outreach, connect on LinkedIn, scrape LinkedIn, send LinkedIn message."
---

# LinkedIn Outreach

Platform-specific workflow for Glean. For multi-platform orchestration, load the `glean` skill.

BrowserAct-powered LinkedIn lead generation. Load the `browser-act` skill for all CLI commands.

**Before any outreach, read "Custom Instructions for Agent" in `~/glean/icp/ideal-customer-profile.md` and follow strictly.**

## Requirements
- BrowserAct CLI installed
- Chrome-direct browser `glean` with LinkedIn login

## Workflow

### 1. Search Leads
Use BrowserAct to navigate LinkedIn search with ICP keywords, extract profile URLs.

### 2. Extract Profile
Navigate to each profile, get markdown: name, title, company, location, about.

### 3. Save to CSV
```bash
echo "<id>,<name>,<title>,<company>,<industry>,<linkedin_url>,<x_handle>,<email>,<stage>,<score>,<source>,<tags>,<notes>,<first_contact>,<last_followup>,<next_followup>" >> ~/glean/data/leads.csv
```

### 4. Connect / Message
Navigate to profile → Connect → personalized note using ICP outreach angle → send. Follow tone rules from Custom Instructions.

### 5. Follow-up
Check leads with stage=contacted where last_followup > 3 days. Respect max follow-ups from Custom Instructions.

## Lead Stages
discovered → contacted → replied → meeting_booked → converted → dead
