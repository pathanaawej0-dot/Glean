---
name: glean
description: "Glean — AI-powered lead management CRM. Use when the user says: glean, setup glean, lead management, my pipeline, show leads, prospect, find leads, outreach, send follow-ups, CRM."
---

# Glean

BrowserAct-powered lead management. Finds prospects on LinkedIn, X/Twitter, and Email — all stored in a local CSV. No automation, no cron — everything is triggered by you.

## First-Run Setup

If `~/glean/` does not exist, or `~/glean/icp/ideal-customer-profile.md` contains only template text, run first-run setup:

### Step 1: Check BrowserAct
```bash
which browser-act || uv tool install browser-act-cli --python 3.12
browser-act get-skills core --skill-version 2.0.2
```
If no browser named `glean` exists, ask user to:
1. Launch Chrome with remote debugging enabled
2. Log into LinkedIn, X/Twitter, and Gmail/Outlook
3. Then create the browser:
   ```bash
   browser-act browser create --name glean --type chrome-direct --desc "Glean outreach browser"
   ```

### Step 2: Ask ICP Questions (one at a time)

Greet user, then ask each question and wait for answer before next:

1. **Target Role**: "What role/title should I target? (e.g., CTO, VP Engineering, Head of Product)"
2. **Industry**: "What industry? (e.g., SaaS, Fintech, HealthTech)"
3. **Company Size**: "Company size? (e.g., 1-10, 10-50, 50-200, 200-1000, 1000+)"
4. **Company Stage**: "Company stage? (e.g., Bootstrapped, Seed, Series A, B, C+, Enterprise)"
5. **Location**: "Target location? (e.g., US, EU, Remote, India)"
6. **Keywords**: "Keywords to search for? (e.g., AI agent, browser automation, web scraping)"
7. **Outreach Angle**: "What's your outreach angle? What value do you offer?"
8. **Exclusions**: "Anything to exclude? (e.g., agencies, freelancers, students)"
9. **Custom Instructions**: "Any specific instructions for how I should handle outreach? Tone, style, do's/don'ts, follow-up rules?"

### Step 3: Create Directory Structure
```bash
mkdir -p ~/glean/data
```

### Step 4: Save ICP
```bash
cat > ~/glean/icp/ideal-customer-profile.md << 'EOF'
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
EOF
```

### Step 5: Create CSV
```bash
echo "id,name,title,company,industry,linkedin_url,x_handle,email,stage,score,source,platform,tags,notes,first_contact,last_followup,next_followup" > ~/glean/data/leads.csv
```

### Step 6: Confirm
"Glean is ready. I can find leads on LinkedIn, X/Twitter, or via Email — all tracked in your CSV. What would you like to do?"

## Manual Workflows

### Find Leads
Load platform-specific skill:
- `linkedin-outreach` — search people, connect, message
- `x-outreach` — search profiles/posts, reply, DM
- `email-outreach` — find/verify emails, send campaigns

### Show Pipeline
```bash
echo "Discovered: $(tail -n +2 ~/glean/data/leads.csv | grep -c ',discovered,')"
echo "Contacted: $(tail -n +2 ~/glean/data/leads.csv | grep -c ',contacted,')"
echo "Replied: $(tail -n +2 ~/glean/data/leads.csv | grep -c ',replied,')"
echo "Booked: $(tail -n +2 ~/glean/data/leads.csv | grep -c ',meeting_booked,')"
echo "Converted: $(tail -n +2 ~/glean/data/leads.csv | grep -c ',converted,')"
echo "--- By Platform ---"
echo "LinkedIn: $(tail -n +2 ~/glean/data/leads.csv | grep -c ',linkedin,')"
echo "X/Twitter: $(tail -n +2 ~/glean/data/leads.csv | grep -c ',x,')"
echo "Email: $(tail -n +2 ~/glean/data/leads.csv | grep -c ',email,')"
```

### Send Follow-Ups
Read CSV for stage=contacted where last_followup > 3 days. Group by platform. For each lead, open platform and send follow-up. Respect Custom Instructions for max follow-ups.

### Update Lead Stage
When user reports a reply or meeting, update CSV:
```bash
# Use sed to replace the stage field for a given ID
sed -i 's/^<id>,/<id>,/<new_stage>,/' ~/glean/data/leads.csv
```

## File Paths
- ICP: `~/glean/icp/ideal-customer-profile.md`
- Leads: `~/glean/data/leads.csv`
