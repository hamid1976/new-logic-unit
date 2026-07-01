# Case Study Placement Guide

Created: 2026-06-30

Source basis:

- Live sitemap check on `https://logic-unit.com/sitemap.xml`
- Live `/case-studies` page check
- Existing case study content files in `16-Products-CaseStudies-Content/03-Case-Study-Pages`
- Existing keyword strategy in `11-New-Keyword-Strategy`

## Current Live Finding

- `/case-studies` returns `200 OK`.
- Sample detail URLs returned `404`:
  - `/case-studies/seagold-logistics-management-platform`
  - `/case-studies/dunkin-donuts-retail-operations-platform`
- Current sitemap does not include `/case-studies` or case study detail pages.
- Current `/case-studies` page does not expose links to individual case study pages in the fetched HTML.

## Immediate Developer Priority

Before adding more visual polish, fix case study discoverability:

1. Create individual case study routes.
2. Make every case study card on `/case-studies` clickable.
3. Add `/case-studies` and all case study detail URLs to sitemap.
4. Add self-referencing canonicals on every case study page.
5. Add internal links from relevant industry/product/technology pages.

## Files In This Guide

| File | Purpose |
| --- | --- |
| `case-study-route-map.md` | Exact URLs, titles, metadata, and content source files |
| `page-placement-plan.md` | Where each case study should appear across the website |
| `replacement-guide-by-page.md` | What to add, change, or replace on each existing page |
| `developer-qa-checklist.md` | Final QA checklist before deployment |

