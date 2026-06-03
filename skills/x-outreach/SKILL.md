---
name: x-outreach
description: "X/Twitter lead generation and outreach automation. Use when the user says: find leads on X, search X, tweet outreach, DM on X, twitter prospecting."
---

# X/Twitter Outreach

BrowserAct-powered X/Twitter lead generation. Load the `browser-act` skill for CLI commands.

**Before any outreach, read "Custom Instructions for Agent" in `./glean-data/icp/ideal-customer-profile.md`.**

## Requirements
- BrowserAct CLI installed
- Chrome-direct browser `glean` with X/Twitter login

## Workflow

### 1. Search for Leads
```bash
browser-act --session glean navigate "https://x.com/search?q=<keywords>&f=user"
browser-act --session glean state
```
Extract profile URLs from search results. Also search for posts with pain-point keywords:
```bash
browser-act --session glean navigate "https://x.com/search?q=<pain-point-keyword>&f=live"
```

### 2. Extract Profile
Navigate to each profile, get markdown: name, bio, location, website, recent posts.

### 3. Save to CSV
```bash
echo "<id>,<name>,<title>,<company>,<industry>,<linkedin_url>,<x_handle>,<email>,<stage>,<score>,<source>,<platform>,<tags>,<notes>,<first_contact>,<last_followup>,<next_followup>" >> ./glean-data/data/leads.csv
```

### 4. Engage / DM
- Reply to their posts with value-add comments (using ICP outreach angle)
- Send DMs for deeper conversations
- Follow tone/style from Custom Instructions

### 5. Follow-up
Check leads with stage=contacted where last_followup > 3 days. Respect max follow-ups from Custom Instructions.

## Lead Stages
Same as `linkedin-outreach`: discovered, contacted, replied, meeting_booked, converted, dead.
