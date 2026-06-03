---
name: gmaps-outreach
description: "Google Maps lead generation. Use when the user says: find leads on Google Maps, find businesses on Maps, scrape Google Maps, gmaps leads, local business leads."
---

# Google Maps Outreach

BrowserAct-powered Google Maps lead generation. Searches businesses by keyword + location, extracts contact data, and optionally enriches with emails from websites.

**Before any outreach, read "Custom Instructions for Agent" in `./glean-data/icp/ideal-customer-profile.md`.**

## Requirements
- BrowserAct CLI installed
- Chrome-direct browser `glean` logged into Google (optional, public search works without login)

## Customize Before Searching

When user asks for leads on Google Maps, ALWAYS ask these questions first. Adapt the search based on answers. Do NOT start without answers.

### Ask These Questions

1. **Business type**: "What type of business are you looking for? (e.g., plumber, coffee shop, dentist, SaaS company)"
2. **Location**: "What location? (e.g., Austin TX, New York, London)"
3. **How many**: "How many leads do you want? (e.g., 10, 20, 50)"
4. **Data to extract**: "What data do you want? I can get: Name, Phone, Website, Email, Address, Rating. Pick any combination."
5. **Only with website**: "Only save leads that have a website? (yes / no / don't care)"
6. **Only with email**: "Only save leads that have an email? (yes / no) — if yes, I'll visit their websites to find emails"
7. **Minimum rating**: "Minimum rating? (any / 3+ / 4+ / 5)"
8. **Extract emails from websites**: "Want me to visit each business website to find emails? This takes longer but gives you contact emails. (yes / no)"

If user says "find leads matching my ICP", read `./glean-data/icp/ideal-customer-profile.md` and use the keywords + location from there.

### Adapt Based on Answers

| If user said | Agent behaviour |
|--------------|----------------|
| `only_website = yes` | Skip leads without a website URL |
| `only_email = yes` | Only keep leads where email was found |
| `min_rating = 4+` | Only save leads with rating >= 4 |
| `extract_emails = yes` | Visit each business website to find email addresses |
| `data = names only` | Just scrape name + category from cards, skip websites |

## Workflow

### 1. Search Google Maps

```bash
browser-act --session glean navigate "https://www.google.com/maps/search/<keyword>/@<lat>,<lng>,<zoom>z"
```

Better: navigate to Google Maps home, then use the search bar:
```bash
browser-act --session glean navigate "https://www.google.com/maps"
# Wait for load
# Input keyword + location in search bar
# Click search
# Scroll results panel
```

Extract from the results panel: business name, rating, review count, address, category. For each card, also click to open detail panel for phone and website.

### 2. Extract Business Data

From each result card / detail panel, extract available fields:
- Business name
- Category (e.g., "Plumber", "Coffee shop")
- Address
- Phone number
- Website URL
- Star rating
- Review count
- Google Maps URL

Only extract what the user asked for. Skip if mandatory filters not met (e.g., no website when `only_website=yes`).

### 3. Email Enrichment (if user opted in)

For each lead that has a website, navigate to the website and find emails:

```bash
browser-act --session glean navigate "<website_url>"
# Look for mailto: links
# Check /contact page
# Check /about page
# Check /contact-us page
# Extract any email addresses found
```

If user said `only_email=yes`, drop leads where no email was found.

### 4. Save to CSV

```bash
echo "<id>,<name>,<title>,<company>,<industry>,<linkedin_url>,<x_handle>,<email>,<stage>,<score>,<source>,<platform>,<tags>,<notes>,<first_contact>,<last_followup>,<next_followup>" >> ./glean-data/data/leads.csv
```

Populate:
- `name` = business name
- `title` = category
- `company` = business name
- `industry` = category
- `phone` → store in `notes`
- `website` → store in `notes` or keep for reference
- `email` = found email (if enrichment enabled)
- `stage` = discovered
- `platform` = gmaps
- `source` = <keyword> in <location>
- `rating` → store in `score`

If `phone` and `website` aren't in the CSV headers, add them or store in `notes`.

### 5. Confirm

"Found X leads on Google Maps. Y have websites. Z have emails. Saved to your pipeline."

## Next Steps

Reference `email-outreach` skill to send emails to gmaps leads. Or connect on other platforms if you found their LinkedIn/X.

## File Paths
- Leads: `./glean-data/data/leads.csv`
- ICP: `./glean-data/icp/ideal-customer-profile.md`
