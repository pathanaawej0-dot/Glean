---
name: email-outreach
description: "Email lead generation and outreach automation. Use when the user says: email outreach, send emails, cold email, find emails, email campaign."
---

# Email Outreach

BrowserAct-powered email prospecting and outreach. Load the `browser-act` skill for CLI commands.

**Before any outreach, read "Custom Instructions for Agent" in `~/glean/icp/ideal-customer-profile.md`.**

## Requirements
- BrowserAct CLI installed
- Chrome-direct browser `glean` with email provider logged in (Gmail, Outlook, etc.)

## Workflow

### 1. Find Emails
Search for email finder tools via BrowserAct, or extract from LinkedIn/X profiles. Common patterns:
```bash
browser-act --session glean navigate "<email-finder-tool-url>"
```

### 2. Verify Email
Use email verification tools to confirm deliverability.

### 3. Save to CSV
```bash
echo "<id>,<name>,<title>,<company>,<industry>,<linkedin_url>,<x_handle>,<email>,<stage>,<score>,<source>,<platform>,<tags>,<notes>,<first_contact>,<last_followup>,<next_followup>" >> ~/glean/data/leads.csv
```

### 4. Send Email
```bash
browser-act --session glean navigate "https://mail.google.com"
# Compose and send with personalized message from ICP outreach angle
```

### 5. Track Responses
Periodically check inbox for replies and update CSV stage.

### 6. Follow-up
Check leads with stage=contacted where last_followup > 3 days. Send follow-up email. Respect max follow-ups from Custom Instructions.

## Lead Stages
Same as `linkedin-outreach`: discovered, contacted, replied, meeting_booked, converted, dead.
