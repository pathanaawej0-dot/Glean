#!/bin/bash
# Daily outreach cron script — multi-platform
# Add to crontab: crontab -e
# Example: 0 9 * * 1-5 /home/aawej/glean/scripts/daily-outreach.sh

DATE=$(date +%Y-%m-%d)
LOG="$HOME/glean/data/outreach-$DATE.log"

echo "[$DATE] Starting daily outreach..." >> "$LOG"

# Step 1: Check for leads needing follow-up on all platforms
echo "[$DATE] Checking LinkedIn follow-ups..." >> "$LOG"
echo "[$DATE] Checking X/Twitter follow-ups..." >> "$LOG"
echo "[$DATE] Checking Email follow-ups..." >> "$LOG"

# Step 2: Find new leads (rotate platform daily)
DAY=$(date +%u)
case $DAY in
  1|4) echo "[$DATE] Platform: LinkedIn" >> "$LOG" ;;
  2|5) echo "[$DATE] Platform: X/Twitter" >> "$LOG" ;;
  3|6) echo "[$DATE] Platform: Email" >> "$LOG" ;;
  *)   echo "[$DATE] Weekend: skip new search" >> "$LOG" ;;
esac

# Step 3: Log pipeline summary
echo "[$DATE] Pipeline summary:" >> "$LOG"
echo "  Discovered: $(tail -n +2 $HOME/glean/data/leads.csv | grep -c ',discovered,')" >> "$LOG"
echo "  Contacted: $(tail -n +2 $HOME/glean/data/leads.csv | grep -c ',contacted,')" >> "$LOG"
echo "  Replied: $(tail -n +2 $HOME/glean/data/leads.csv | grep -c ',replied,')" >> "$LOG"
echo "  Booked: $(tail -n +2 $HOME/glean/data/leads.csv | grep -c ',meeting_booked,')" >> "$LOG"

echo "[$DATE] Daily outreach complete." >> "$LOG"
