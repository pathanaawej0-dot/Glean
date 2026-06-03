Status: ready-for-agent

## Parent

`.scratch/glean-site/PRD.md`

## What to build

Polish the site for production and deploy to Vercel.

**Responsive polish:**
- Verify layout at 375px, 768px, 1024px, 1440px viewports
- Homepage: hero text scales down on mobile (72px → ~40px on small screens)
- Platform cards grid: 2×2 on desktop, 1×2 on tablet, 1×1 on mobile
- UseCase cards: 3 columns → 1 column on mobile
- Before/After comparison: side-by-side → stacked on mobile
- Sample CSV table: horizontally scrollable on mobile
- Nav: hamburger menu on mobile (or collapse to vertical)
- Sidebar: collapsible/collapsed on mobile in docs pages
- All interactive elements have proper tap targets (min 44px)

**Meta & SEO:**
- Title: "Glean — AI Agent Lead Skill Pack"
- Description: "Glean turns your AI coding agent into a lead management system. Find prospects on LinkedIn, X, Email, and Google Maps — all from your terminal."
- Open Graph image: use the glean logo
- Canonical URL for each page
- `robots.txt`

**Performance:**
- Run Lighthouse audit — target 90+ across Performance, Accessibility, Best Practices, SEO
- Fix any render-blocking resources
- Ensure proper image sizing for the logo
- Lazy-load below-fold content if needed

**Vercel deploy:**
- Connect glean-site to Vercel (user needs to do this via vercel.com or CLI)
- Add `vercel.json` for static export configuration if needed
- Add Vercel deploy badge to README.md
- Verify deploy succeeds and all routes work in production

## Acceptance criteria

- [ ] Site is responsive at 375px, 768px, 1024px, 1440px with no overlapping/overflow
- [ ] Nav works on mobile (hamburger or collapsed menu)
- [ ] Hero text scales down appropriately on mobile
- [ ] SEO meta tags present on all pages (title, description, OG)
- [ ] Lighthouse scores 90+ on all 4 categories
- [ ] `vercel.json` present in glean-site root
- [ ] Site deploys to Vercel without errors
- [ ] All routes work in production
- [ ] Deploy badge added to root README.md

## Blocked by

- `.scratch/glean-site/issues/02-homepage-hero-install-social.md`
- `.scratch/glean-site/issues/03-platforms-quickstart.md`
- `.scratch/glean-site/issues/04-docs-sidebar-all-pages-faq.md`
