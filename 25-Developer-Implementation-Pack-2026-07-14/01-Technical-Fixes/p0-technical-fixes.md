# P0 Technical Fixes

## 1. Fix Novo Nordisk Case Study

Current incorrect URL:

`/case-studies/nova-nordisk-sample-ordering-application`

Correct URL:

`/case-studies/novo-nordisk-sample-ordering-application`

Required changes:

- Rename route from `nova-nordisk...` to `novo-nordisk...`.
- Update sitemap.
- Update all internal links.
- Update page title.
- Update H1.
- Update visible copy.
- Add 301 redirect from old typo URL to correct URL.

Correct SEO title:

`Novo Nordisk Sample Ordering App | Logic Unit`

Correct H1:

`Novo Nordisk Sample Ordering Application`

Correct canonical:

`https://logic-unit.com/case-studies/novo-nordisk-sample-ordering-application`

Correct meta description:

`Logic Unit developed a secure sample ordering application for Novo Nordisk with healthcare professional workflows and compliance support.`

QA:

- Correct URL returns `200`.
- Old typo URL returns `301`.
- Sitemap contains only the correct URL.
- Search site for `Nova Nordisk`; there should be zero matches.

## 2. Fix Dynamic Open Graph URL

Issue:

`og:url` currently points to `https://logic-unit.com` on most non-home pages.

Required:

Set `og:url` to the current page canonical URL.

Examples:

```html
<meta property="og:url" content="https://logic-unit.com/industries/livestock" />
```

```html
<meta property="og:url" content="https://logic-unit.com/case-studies/seagold-logistics-management-platform" />
```

QA:

- Check 5 page types:
  - homepage
  - product page
  - case study page
  - industry page
  - partnership page
- `og:url` must equal canonical on all.

## 3. Add `/thank-you`

Purpose:

Create a clean conversion destination after form submission.

URL:

`/thank-you`

Requirements:

- index status: optional; recommended `noindex, follow`
- canonical: `https://logic-unit.com/thank-you`
- GA4 event should fire on page view or form success
- include links to `/case-studies`, `/ecosystem`, `/partnerships`, and `/insights`

Use copy from:

`02-New-Pages/thank-you-page.md`

## 4. Add Tracking Fields To Forms

Hidden fields:

- landing_page_url
- referrer_url
- utm_source
- utm_medium
- utm_campaign
- utm_content
- cta_source
- inquiry_page_type

Inquiry dropdown:

- Product ecosystem inquiry
- HULM POS inquiry
- Titan CMMS inquiry
- AnimalCare360 / livestock platform inquiry
- Hospitello inquiry
- Strategic SaaS partnership
- System integrator relationship
- Enterprise collaboration
- Case study or portfolio discussion

