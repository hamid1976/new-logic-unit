# Developer Website Integration To Do

## Current Route Note

The live sitemap checked on 2026-06-24 uses `/industries/...` routes, not the older `/industry/...` routes. New internal links should use `/industries`.

## Phase 1: Add New Navigation Structure

- Add `Case Studies` to the main navigation or footer navigation.
- Update `Ecosystem` page to include all source-approved products:
  - HULM POS
  - Titan CMMS
  - AnalyzeQuran
  - Hospitello
  - Bike Tour Pro
  - MFCC
  - Keep existing AnimalCare360 page if it remains approved from current site source.
- Add product cards with one-line descriptions and CTAs.
- Add case study cards grouped by industry or solution type.

## Phase 2: Create Product Pages

Create these routes and use the matching files from `02-Product-Pages`:

| Route | Content File |
| --- | --- |
| `/ecosystem/hulm-pos` | `hulm-pos.md` |
| `/ecosystem/titan-cmms` | `titan-cmms.md` |
| `/ecosystem/analyzequran` | `analyzequran.md` |
| `/ecosystem/hospitello` | `hospitello.md` |
| `/ecosystem/bike-tour-pro` | `bike-tour-pro.md` |
| `/ecosystem/mfcc-command-control-console` | `mfcc-command-control-console.md` |

For each product page:

- Set SEO title from the file.
- Set meta description from the file.
- Add self-referencing canonical.
- Add exactly one H1.
- Add product hero, problem section, features, benefits or impact, technology highlights, internal links, and CTA.
- Add `SoftwareApplication` schema where applicable.
- Use `Product` schema for MFCC.

## Phase 3: Create Case Study Pages

Create `/case-studies` using `case-studies-index.md`, then create:

| Route | Content File |
| --- | --- |
| `/case-studies/seagold-logistics-management-platform` | `seagold-logistics-management-platform.md` |
| `/case-studies/novo-nordisk-sample-ordering-application` | `novo-nordisk-sample-ordering-application.md` |
| `/case-studies/giftwifts-leopards-courier` | `giftwifts-leopards-courier.md` |
| `/case-studies/agp-drug-verifier-platform` | `agp-drug-verifier-platform.md` |
| `/case-studies/ksew-enterprise-erp-transformation` | `ksew-enterprise-erp-transformation.md` |
| `/case-studies/goodments-ethical-investing-platform` | `goodments-ethical-investing-platform.md` |
| `/case-studies/smart-salik-digital-toll-management` | `smart-salik-digital-toll-management.md` |
| `/case-studies/mpay-government-payment-platform` | `mpay-government-payment-platform.md` |
| `/case-studies/dunkin-donuts-retail-operations-platform` | `dunkin-donuts-retail-operations-platform.md` |
| `/case-studies/qatar-airways-augmented-reality-campaign` | `qatar-airways-augmented-reality-campaign.md` |

For each case study:

- Use the SEO title and meta description from the file.
- Add self-referencing canonical.
- Add exactly one H1.
- Add summary, challenge, solution, features, impact/results, internal links, and CTA.
- Add `Article` schema.
- Do not add unsupported numbers, testimonials, awards, or logos unless approved assets are provided.

## Phase 4: Update Existing Pages

### Homepage

- Add a short case-study proof section linking to `/case-studies`.
- Keep homepage focused on broad keywords:
  - product engineering company
  - SaaS operating company
  - industry-specific SaaS platforms
  - software platforms for real industries
- Do not overload homepage with all product details.

### Ecosystem Page

- Expand from current product cards to all approved product pages.
- Add intro copy using:
  - product ecosystem
  - SaaS product ecosystem
  - industry-specific SaaS platforms
  - software platforms for real industries

### Industries Pages

- Add related product and case-study links:
  - Retail: HULM POS, Dunkin' Donuts Pakistan, GiftWifts
  - Healthcare: Hospitello, Novo Nordisk, AGP
  - Logistics: Seagold, Smart Salik, mPay
  - Manufacturing: Titan CMMS, KS&EW
  - Facilities: Titan CMMS, MFCC
  - Livestock: AnimalCare360

### Technology Page

- Add proof modules linking to case studies that use AI, IoT, cloud infrastructure, mobile applications, ERP integration, payment integration, and government system integrations where source-supported.

### Contact Page

- Add inquiry categories:
  - Product ecosystem inquiry
  - Case study or portfolio inquiry
  - Strategic SaaS partnership
  - System integrator relationship
  - Enterprise collaboration

## Phase 5: SEO Requirements

- Add all new URLs to sitemap.
- Ensure all new pages return HTTP 200.
- Ensure all new pages are `index, follow`.
- Ensure all canonical URLs are self-referencing.
- Add Open Graph title, description, and URL for each page.
- Add breadcrumb UI and `BreadcrumbList` schema across all product and case-study pages.
- Keep title length under 60 characters where possible.
- Keep meta descriptions under 160 characters.
- Avoid duplicated title suffixes such as `| Logic Unit | Logic Unit`.

## Phase 6: QA Checklist

- Run crawl after deployment.
- Confirm no 404s in nav, footer, product cards, and case study cards.
- Confirm `/industries/...` links are used consistently.
- Confirm each page has one H1.
- Confirm schema validates.
- Confirm mobile layout for product cards and case study cards.
- Confirm CTA buttons route to `/contact`.

