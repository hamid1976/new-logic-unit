# Developer AI Prompts For Logic Unit Website Execution

Use these prompts in Cursor, GitHub Copilot Chat, Claude Code, ChatGPT, Replit, or any AI coding assistant. Replace framework-specific names where needed.

## Global Instruction Prompt

```text
You are working on the Logic Unit website. Follow the existing project architecture, components, styling system, routing conventions, metadata patterns, and deployment setup. Do not invent unsupported business claims. Use only the provided copy, metadata, routes, and source-backed product/case study details. Keep pages SEO-ready, mobile responsive, accessible, and internally linked.
```

## Prompt 1: Fix Novo Nordisk Route

```text
Audit the website routes and content for the incorrect string "Nova Nordisk". Replace it with "Novo Nordisk" everywhere. Rename the case study route from /case-studies/nova-nordisk-sample-ordering-application to /case-studies/novo-nordisk-sample-ordering-application. Update all internal links, sitemap entries, canonical URL, Open Graph URL, title, H1, and visible copy. Add a 301 redirect from the old /nova-nordisk... URL to the corrected /novo-nordisk... URL. After implementation, verify the corrected URL returns 200 and the old typo URL redirects.
```

## Prompt 2: Fix Dynamic Open Graph URLs

```text
Find the shared SEO metadata generator or page metadata configuration. Ensure every route sets og:url dynamically to the page canonical URL, not the homepage. Keep homepage og:url as https://logic-unit.com. For all other pages, og:url must match the canonical URL exactly. Test at least: /about, /ecosystem, /industries/livestock, /case-studies/seagold-logistics-management-platform, /partnerships/system-integrators, and /technology.
```

## Prompt 3: Build Thank You Page

```text
Create a /thank-you page using the provided copy. Set robots to noindex, follow. Add links to /ecosystem, /case-studies, /partnerships, and /insights. Trigger or support the GA4 conversion event contact_form_submit when the contact form redirects here. Ensure the page is mobile responsive and visually consistent with the Logic Unit website.
```

## Prompt 4: Improve Contact Form Tracking

```text
Update the contact form to include inquiry type and interested product or industry. Add hidden fields for landing_page_url, referrer_url, utm_source, utm_medium, utm_campaign, utm_content, and cta_source. Ensure submitted data is passed to the configured CRM/form backend. Add inquiry type options: Product ecosystem inquiry, HULM POS inquiry, Titan CMMS inquiry, AnimalCare360 / livestock platform inquiry, Hospitello inquiry, Bike Tour Pro inquiry, AnalyzeQuran inquiry, MFCC inquiry, Strategic SaaS partnership, System integrator relationship, Enterprise collaboration, Case study or portfolio discussion.
```

## Prompt 5: Build Insights Hub

```text
Create /insights as a new index page for Logic Unit thought leadership. Use the provided Insights Hub copy and metadata. Add category filters or category labels for Product Engineering, SaaS Operating Company, Operational Infrastructure SaaS, Industry Platforms, Product Ecosystem, Case Studies, Partnerships, and Technology. Show article cards with category, title, excerpt, publish date, reading time, and CTA. Add final CTA linking to /contact. Add /insights to navigation or footer if approved.
```

## Prompt 6: Build Insight Article Template

```text
Create a reusable insight article template for /insights/[slug]. Required fields: SEO title, meta description, canonical, og:title, og:description, og:url, og:image, category, publish date, updated date, reading time, H1, intro, table of contents if useful, article body, related links, related product/case study cards, CTA block, Article schema, BreadcrumbList schema. Keep design consistent with Logic Unit and optimize for readability on mobile.
```

## Prompt 7: Add First 8 Insight Articles

```text
Add the first 8 Logic Unit insight articles from the content pack. Create routes, metadata, article body, internal links, CTA blocks, and visual placeholders for each. Add all article URLs to the sitemap. Ensure every article links to at least one product page, one industry or case study page, and /contact. Use source-backed copy only.
```

## Prompt 8: Add Visual/Infographic Components

```text
Create reusable visual sections for the Logic Unit site: Product Ecosystem Map, Technology Architecture Diagram, Case Study Proof Grid, AnimalCare360 Workflow Graphic, and Partnership Funnel Diagram. Use the provided visual briefs. If real product screenshots are unavailable, use clean abstract dashboard-style visuals without inventing unsupported features. All visuals need descriptive alt text and responsive layouts.
```

## Prompt 9: Add Gated Resource CTAs

```text
Add CTA sections for three gated resources: Operational Infrastructure SaaS Playbook, Case Study Pack, and Industry SaaS Platform Readiness Checklist. Place them on /insights, article pages, /case-studies, /technology, /partnerships, and relevant industry pages. Do not block existing navigation. Each CTA should be trackable with GA4 event parameters.
```

## Prompt 10: Final QA Prompt

```text
Run a final SEO and route QA. Verify all sitemap URLs return 200, old Nova Nordisk redirects to Novo Nordisk, canonical and og:url match on every page, /insights and all insight articles are in sitemap, /thank-you is noindex follow, no internal links return 404, contact form hidden fields submit correctly, and all new visuals have alt text. Provide a concise QA report with pass/fail results and remaining issues.
```

