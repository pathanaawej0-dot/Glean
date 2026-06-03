Status: ready-for-agent

## Parent

`.scratch/glean-site/PRD.md`

## What to build

Two content pages: `/platforms` and `/quickstart`.

**`/platforms`** — Detailed workflow descriptions for all 4 platforms. Each platform gets a section with:
- Platform name + icon
- What it does (2-3 sentences)
- Step-by-step workflow (numbered list of agent actions)
- Sample output (what gets saved to CSV for that platform)
- A note about requirements (browser login, etc.)

Order: LinkedIn → X/Twitter → Email → Google Maps. Google Maps section should mention the 8 customization questions the agent asks.

**`/quickstart`** — Full install and setup walkthrough:
- Prerequisites (Node.js, BrowserAct CLI, Chrome)
- Install command (`npx skills add pathanaawej0-dot/Glean`)
- Verify installation (check listed skills)
- First run: "setup glean" command walkthrough
- The 9 ICP questions listed with descriptions
- Sample ICP file output (rendered as markdown-like block)
- Directory structure after setup (`./glean-data/` tree)
- Next steps: "find leads on LinkedIn"

Both pages should match the site's dark theme design. Use `⟩ ` prefix on H2s. Keep tone minimalist and developer-focused.

## Acceptance criteria

- [ ] `/platforms` renders all 4 platform sections in order
- [ ] Each platform section has: description, workflow steps, sample output
- [ ] Google Maps section mentions the 8 customization questions
- [ ] `/quickstart` renders prerequisites, install, verify, setup walkthrough
- [ ] 9 ICP questions are listed
- [ ] Directory tree after setup is shown
- [ ] Both pages have working nav/footer from layout
- [ ] No broken links on either page
- [ ] H2s on both pages use `⟩ ` prefix

## Blocked by

- `.scratch/glean-site/issues/01-scaffold-design-system-layout.md`
