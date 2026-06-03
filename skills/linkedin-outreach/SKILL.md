---
name: linkedin-outreach
description: "LinkedIn lead generation and outreach automation. Use when the user says: find leads, outreach, prospecting, connect on LinkedIn, scrape LinkedIn profiles, send LinkedIn messages, follow up on LinkedIn."
---

# LinkedIn Outreach

BrowserAct-powered LinkedIn lead generation. Load the `browser-act` skill from `~/glean/skills/browser-act/SKILL.md` for all CLI commands (state, click, input, navigate, etc.). This skill covers the LinkedIn-specific workflow only.

## Requirements

- BrowserAct CLI installed (see `use-glean` skill)
- Chrome-direct browser `glean` with LinkedIn login

## Workflow

### 1. Search Leads

Use BrowserAct to navigate to LinkedIn search with ICP keywords, extract profile URLs from the search results page.

### 2. Extract Profile

Navigate to each profile URL, get markdown, parse: name, title, company, location, about section.

### 3. Save to CSV

```bash
echo "<id>,<name>,<title>,<company>,<industry>,<linkedin_url>,<x_handle>,<email>,<stage>,<score>,<source>,<tags>,<notes>,<first_contact>,<last_followup>,<next_followup>" >> ~/glean/data/leads.csv
```

### 4. Connect / Message

Navigate to profile → click Connect → add personalized note using ICP outreach angle → send.

### 5. Follow-up

Check `leads.csv` for stage=contacted where last_followup > 3 days. Send a follow-up message.

## Lead Stages

- `discovered` — found but not contacted
- `contacted` — connection request/message sent
- `replied` — they responded
- `meeting_booked` — call scheduled
- `converted` — became a customer
- `dead` — no response after 3 follow-ups
