#!/bin/bash
# Daily outreach cron script
# Add to crontab: crontab -e
# Example: 0 9 * * 1-5 /home/aawej/glean/scripts/daily-outreach.sh

DATE=$(date +%Y-%m-%d)
LOG="$HOME/glean/data/outreach-$DATE.log"

echo "[$DATE] Starting daily outreach..." >> "$LOG"

# Step 1: Check for leads needing follow-up (contacted > 3 days ago)
# Step 2: Find new leads based on ICP
# Step 3: Send connection requests
# Step 4: Log results

echo "[$DATE] Daily outreach complete." >> "$LOG"
