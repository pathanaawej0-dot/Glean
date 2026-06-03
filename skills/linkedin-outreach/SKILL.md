---
name: linkedin-outreach
description: "LinkedIn lead generation and outreach automation. Use when the user says: find leads, outreach, prospecting, connect on LinkedIn, scrape LinkedIn profiles, send LinkedIn messages, follow up on LinkedIn."
---

# LinkedIn Outreach

A BrowserAct-powered skill for LinkedIn lead generation and outreach.

## Requirements

- BrowserAct CLI installed
- Chrome-direct browser `glean` created (or chrome with LinkedIn login)

## Workflow

### 1. Search Leads

```bash
browser-act --session outreach navigate "https://www.linkedin.com/search/results/people/?keywords=<keywords>"
browser-act --session outreach state
# Extract profile links
```

### 2. Extract Profile

Navigate to each profile:
```bash
browser-act --session outreach navigate "https://www.linkedin.com/in/<username>/"
browser-act --session outreach get markdown
```

### 3. Save to CSV

```bash
echo "<id>,<name>,<title>,<company>,<industry>,<linkedin_url>,<x_handle>,<email>,<stage>,<score>,<source>,<tags>,<notes>,<first_contact>,<last_followup>,<next_followup>" >> ~/glean/data/leads.csv
```

### 4. Connect / Message

```bash
browser-act --session outreach navigate "https://www.linkedin.com/in/<username>/"
# Click Connect button, add note
browser-act --session outreach click <connect_button_index>
browser-act --session outreach input <note_field_index> "Hi <name>, I came across your profile..."
browser-act --session outreach click <send_index>
```

### 5. Follow-up

Read leads.csv for stage=contacted and last_followup > 3 days, then send follow-up.

## Lead Stages

- `discovered` — found but not contacted
- `contacted` — connection request/message sent
- `replied` — they responded
- `meeting_booked` — call scheduled
- `converted` — became a customer
- `dead` — no response after 3 follow-ups
