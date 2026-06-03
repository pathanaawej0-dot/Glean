---
name: glean
description: "Glean — AI-powered lead management CRM. Orchestrates all outreach platforms (LinkedIn, X/Twitter, Email). Use when the user says: glean, lead management, outreach, prospecting, find leads, my pipeline, CRM, lead tracking, multi-platform outreach."
---

# Glean

BrowserAct-powered lead management. Finds prospects on LinkedIn, X/Twitter, and Email, tracks them in CSV, automates outreach.

## Requirements

Before first run, user must have BrowserAct installed:
```bash
uv tool install browser-act-cli --python 3.12
browser-act get-skills core --skill-version 2.0.2
```

## Setup

If `~/glean/icp/ideal-customer-profile.md` is empty template, run first-run setup:

1. Ask ICP questions one at a time (target role, industry, company size, stage, location, keywords, outreach angle, exclusions, custom instructions)
2. Save answers to `~/glean/icp/ideal-customer-profile.md`
3. Create Chrome-direct browser:
   ```bash
   browser-act browser create --name glean --type chrome-direct --desc "Glean outreach browser"
   ```
4. Confirm user is logged into LinkedIn, X/Twitter, and Email in Chrome

## Platform Skills

Load the platform-specific skill for detailed workflow:

| Platform | Skill | Use Case |
|----------|-------|----------|
| LinkedIn | `linkedin-outreach` | Search people, connect, message |
| X/Twitter | `x-outreach` | Search tweets/profiles, reply, DM |
| Email | `email-outreach` | Find/verify emails, send campaigns |

### Quick Reference

```bash
# Pipeline summary
echo "Discovered: $(tail -n +2 ~/glean/data/leads.csv | grep -c ',discovered,')"
echo "Contacted: $(tail -n +2 ~/glean/data/leads.csv | grep -c ',contacted,')"
echo "Replied: $(tail -n +2 ~/glean/data/leads.csv | grep -c ',replied,')"
echo "Booked: $(tail -n +2 ~/glean/data/leads.csv | grep -c ',meeting_booked,')"
echo "Converted: $(tail -n +2 ~/glean/data/leads.csv | grep -c ',converted,')"

echo "--- By Platform ---"
echo "LinkedIn: $(tail -n +2 ~/glean/data/leads.csv | grep -c ',linkedin,')"
echo "X/Twitter: $(tail -n +2 ~/glean/data/leads.csv | grep -c ',x,')"
echo "Email: $(tail -n +2 ~/glean/data/leads.csv | grep -c ',email,')"

# Add lead manually
echo "<id>,<name>,<title>,<company>,<industry>,<linkedin_url>,<x_handle>,<email>,<stage>,<score>,<source>,<platform>,<tags>,<notes>,<first_contact>,<last_followup>,<next_followup>" >> ~/glean/data/leads.csv
```

## File Paths
- ICP: `~/glean/icp/ideal-customer-profile.md`
- Leads: `~/glean/data/leads.csv`
- Scripts: `~/glean/scripts/daily-outreach.sh`
