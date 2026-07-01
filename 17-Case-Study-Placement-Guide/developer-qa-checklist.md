# Developer QA Checklist

## Route QA

- `/case-studies` returns `200`.
- Every individual case study route returns `200`.
- No case study route returns `404`.
- Every case study card on `/case-studies` links to a detail page.
- Browser refresh works on every detail URL.

## Sitemap QA

Add these URLs to sitemap:

- `https://logic-unit.com/case-studies`
- `https://logic-unit.com/case-studies/seagold-logistics-management-platform`
- `https://logic-unit.com/case-studies/novo-nordisk-sample-ordering-application`
- `https://logic-unit.com/case-studies/giftwifts-leopards-courier`
- `https://logic-unit.com/case-studies/agp-drug-verifier-platform`
- `https://logic-unit.com/case-studies/ksew-enterprise-erp-transformation`
- `https://logic-unit.com/case-studies/goodments-ethical-investing-platform`
- `https://logic-unit.com/case-studies/smart-salik-digital-toll-management`
- `https://logic-unit.com/case-studies/mpay-government-payment-platform`
- `https://logic-unit.com/case-studies/dunkin-donuts-retail-operations-platform`
- `https://logic-unit.com/case-studies/qatar-airways-augmented-reality-campaign`

## SEO QA

Each case study page must have:

- One H1 only
- SEO title under 60 characters where possible
- Meta description under 160 characters
- Self-referencing canonical
- `index, follow`
- Open Graph title
- Open Graph description
- Open Graph URL matching canonical
- Breadcrumb UI
- `BreadcrumbList` schema
- `Article` schema

## Internal Link QA

Confirm links exist from:

- Homepage to `/case-studies`
- `/case-studies` to every detail page
- Industry pages to relevant case studies
- Technology page to relevant case studies
- Partnerships page to enterprise/government case studies
- Case study pages back to `/case-studies`
- Case study pages to `/contact`

## Content QA

- No unsupported client metrics added.
- No unsupported testimonials added.
- No unsupported awards added.
- No client logos unless approved assets are available.
- No invented industries or services.
- Existing keyword strategy remains intact.
- Case studies support, but do not replace, product ecosystem positioning.

## Final Crawl Tests

After deployment, run a crawl and confirm:

- Sitemap includes 30 URLs if all 11 case study URLs are added to the existing 19.
- All sitemap URLs return `200`.
- Canonical issue count is `0`.
- Missing H1 issue count is `0`.
- Case study detail pages are internally linked.
- No `/industry/...` links are accidentally used; site should use `/industries/...`.

