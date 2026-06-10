# Technical SEO Audit

Source basis: Phase 1 crawl inventory, live `robots.txt`, live `sitemap.xml`, and fetched HTML for crawled pages. Unsupported items are marked `DATA NOT AVAILABLE IN SOURCE`.

## Executive Summary

- Crawled HTML pages analyzed: 4
- Robots.txt status: 200
- Sitemap.xml status: 200
- Critical issues identified: 3
- High issues identified: 1

## Indexability

| URL | HTTP Status | Robots Meta | Canonical | Indexability Finding |
| --- | --- | --- | --- | --- |
| https://www.logic-unit.com/ | 200 | index, follow | https://new-logic-unit.vercel.app | Indexable by status; no page-level noindex found in source. Canonical host must be corrected. |
| https://www.logic-unit.com/about/ | 200 | index, follow | https://new-logic-unit.vercel.app | Indexable by status; no page-level noindex found in source. Canonical host must be corrected. |
| https://www.logic-unit.com/contact/ | 200 | index, follow | https://new-logic-unit.vercel.app | Indexable by status; no page-level noindex found in source. Canonical host must be corrected. |
| https://www.logic-unit.com/partnerships/ | 200 | index, follow | https://new-logic-unit.vercel.app | Indexable by status; no page-level noindex found in source. Canonical host must be corrected. |

## Crawl Depth

| URL | Depth | Inbound Internal Links From Crawled Pages | Outgoing Internal Links |
| --- | ---: | ---: | ---: |
| https://www.logic-unit.com/ | 0 | 4 | 4 |
| https://www.logic-unit.com/about/ | 1 | 4 | 4 |
| https://www.logic-unit.com/contact/ | 1 | 4 | 4 |
| https://www.logic-unit.com/partnerships/ | 1 | 4 | 4 |

## Robots.txt Issues

- Status: 200
- Allows all crawlers: Yes
- Sitemap directive: https://new-logic-unit.vercel.app/sitemap.xml
- Issue: Sitemap directive points to `https://new-logic-unit.vercel.app/sitemap.xml`, not `https://www.logic-unit.com/sitemap.xml`.

## Sitemap.xml Structure

- Status: 200
- Sitemap type detected: urlset
- URL entries found: 5
- Entries on production host: 0
- Entries on Vercel host: 5
- Sitemap loc values:
  - https://new-logic-unit.vercel.app
  - https://new-logic-unit.vercel.app/about
  - https://new-logic-unit.vercel.app/industry
  - https://new-logic-unit.vercel.app/partnerships
  - https://new-logic-unit.vercel.app/contact

## Canonical Tags

| URL | Canonical In Source | Expected Production Canonical | Finding |
| --- | --- | --- | --- |
| https://www.logic-unit.com/ | https://new-logic-unit.vercel.app | https://www.logic-unit.com | Canonical points to alternate host |
| https://www.logic-unit.com/about/ | https://new-logic-unit.vercel.app | https://www.logic-unit.com/about | Canonical points to alternate host |
| https://www.logic-unit.com/contact/ | https://new-logic-unit.vercel.app | https://www.logic-unit.com/contact | Canonical points to alternate host |
| https://www.logic-unit.com/partnerships/ | https://new-logic-unit.vercel.app | https://www.logic-unit.com/partnerships | Canonical points to alternate host |

## Duplicate Content Signals

| URL | Duplicate Title URLs | Duplicate Meta Description URLs |
| --- | --- | --- |
| https://www.logic-unit.com/ | None detected in crawled set | None detected in crawled set |
| https://www.logic-unit.com/about/ | None detected in crawled set | None detected in crawled set |
| https://www.logic-unit.com/contact/ | None detected in crawled set | None detected in crawled set |
| https://www.logic-unit.com/partnerships/ | None detected in crawled set | None detected in crawled set |

## Page Speed Signals Available In Source

| URL | HTML Bytes | Fetch Time ms | Images | Images Missing Width/Height | Preload Links | Script Tags | Server/Hosting Signal |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| https://www.logic-unit.com/ | 47587 | 266 | 3 | 0 | 12 | 15 | Vercel |
| https://www.logic-unit.com/about/ | 31961 | 235 | 2 | 0 | 12 | 15 | Vercel |
| https://www.logic-unit.com/contact/ | 26970 | 142 | 2 | 0 | 12 | 16 | Vercel |
| https://www.logic-unit.com/partnerships/ | 28795 | 119 | 2 | 0 | 12 | 15 | Vercel |

## Mobile Responsiveness Indicators

- https://www.logic-unit.com/: viewport meta = `width=device-width, initial-scale=1`
- https://www.logic-unit.com/about/: viewport meta = `width=device-width, initial-scale=1`
- https://www.logic-unit.com/contact/: viewport meta = `width=device-width, initial-scale=1`
- https://www.logic-unit.com/partnerships/: viewport meta = `width=device-width, initial-scale=1`

## Structured Data Presence

- https://www.logic-unit.com/: 1 JSON-LD block(s); contains Vercel host URL values
- https://www.logic-unit.com/about/: 1 JSON-LD block(s); contains Vercel host URL values
- https://www.logic-unit.com/contact/: 1 JSON-LD block(s); contains Vercel host URL values
- https://www.logic-unit.com/partnerships/: 1 JSON-LD block(s); contains Vercel host URL values

## Broken Links

| URL Checked | Status | Final URL | Finding |
| --- | --- | --- | --- |
| https://www.logic-unit.com/ | 200 | https://www.logic-unit.com/ | No break detected |
| https://www.logic-unit.com/about/ | 200 | https://www.logic-unit.com/about | No break detected |
| https://www.logic-unit.com/partnerships/ | 200 | https://www.logic-unit.com/partnerships | No break detected |
| https://www.logic-unit.com/contact/ | 200 | https://www.logic-unit.com/contact | No break detected |
| https://www.logic-unit.com/industry/ | 200 | https://www.logic-unit.com/industry | No break detected |
