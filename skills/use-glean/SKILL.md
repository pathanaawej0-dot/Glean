---
name: use-glean
description: "Glean first-run setup. Guides user through ICP questions, creates browser, and confirms readiness. Use on first interaction or when user says: setup glean, configure glean, first run."
---

# Glean Setup

First-run configuration for Glean — multi-platform lead management (LinkedIn, X/Twitter, Email).

## Requirements

Before first run, install BrowserAct:
```bash
uv tool install browser-act-cli --python 3.12
browser-act get-skills core --skill-version 2.0.2
```

## Step 1: Greet & Explain

> "Glean is your AI lead management system. I'll find prospects on LinkedIn, X/Twitter, and Email, track them in a CSV, and handle outreach across all platforms. First, I need to know who you want to target."

## Step 2: Ask ICP Questions (one at a time)

1. **Target Role**: "What role/title should I target? (e.g., CTO, VP Engineering, Head of Product)"
2. **Industry**: "What industry? (e.g., SaaS, Fintech, HealthTech)"
3. **Company Size**: "Company size? (e.g., 1-10, 10-50, 50-200, 200-1000, 1000+)"
4. **Company Stage**: "Company stage? (e.g., Bootstrapped, Seed, Series A, B, C+, Enterprise)"
5. **Location**: "Target location? (e.g., US, EU, Remote, India)"
6. **Keywords**: "Keywords to search for? (e.g., AI agent, browser automation, web scraping)"
7. **Outreach Angle**: "What's your outreach angle? What value do you offer?"
8. **Exclusions**: "Anything to exclude? (e.g., agencies, freelancers, students)"
9. **Custom Instructions**: "Any specific instructions for how I should handle outreach? Tone, style, do's/don'ts, follow-up rules?"

## Step 3: Save ICP

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

## Step 4: Setup BrowserAct & Create Browser

Check if browser exists:
```bash
browser-act browser list
```

Ask user to log into LinkedIn, X/Twitter, and Gmail/Outlook in Chrome first, then:
```bash
browser-act browser create --name glean --type chrome-direct --desc "Glean outreach browser"
```

## Step 5: Confirm Setup

> "Glean is ready on all platforms! I can search LinkedIn, X/Twitter, and send emails for your ICP. Want me to find the first batch of leads?"

## Next Steps

Load the `glean` skill for daily workflows and platform-specific orchestration.
