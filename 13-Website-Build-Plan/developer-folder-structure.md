# Developer Folder Structure

This is a recommended structure for a frontend developer building the Logic Unit website.

## Recommended Routes

```text
/
/about/
/industry/
/industry/retail/
/industry/healthcare/
/industry/livestock/
/industry/manufacturing/
/industry/logistics/
/industry/facilities/
/partnerships/
/partnerships/strategic-partnerships/
/partnerships/system-integrators/
/partnerships/enterprise-collaboration/
/contact/
```

## Recommended App Structure

```text
src/
  app/
    layout.tsx
    page.tsx
    about/
      page.tsx
    industry/
      page.tsx
      retail/
        page.tsx
      healthcare/
        page.tsx
      livestock/
        page.tsx
      manufacturing/
        page.tsx
      logistics/
        page.tsx
      facilities/
        page.tsx
    partnerships/
      page.tsx
      strategic-partnerships/
        page.tsx
      system-integrators/
        page.tsx
      enterprise-collaboration/
        page.tsx
    contact/
      page.tsx
  components/
    layout/
      Header.tsx
      Footer.tsx
      MobileNav.tsx
    sections/
      Hero.tsx
      SectionHeader.tsx
      CTASection.tsx
      CardGrid.tsx
      StatPanel.tsx
      Breadcrumbs.tsx
    seo/
      JsonLd.tsx
      PageMetadata.ts
    forms/
      ContactForm.tsx
  content/
    pages/
      home.ts
      about.ts
      industry.ts
      partnerships.ts
      contact.ts
    industry/
      retail.ts
      healthcare.ts
      livestock.ts
      manufacturing.ts
      logistics.ts
      facilities.ts
    partnerships/
      strategic-partnerships.ts
      system-integrators.ts
      enterprise-collaboration.ts
  lib/
    seo.ts
    routes.ts
    schema.ts
  public/
    images/
      logo/
      og/
      pages/
      ecosystem/
```

## Content Data Shape

Each page should define:

```ts
export const page = {
  slug: "/industry/",
  title: "Industry-Specific SaaS Platforms | Logic Unit",
  description: "Logic Unit builds and operates SaaS platforms for retail, healthcare, livestock, manufacturing, logistics, and facilities.",
  canonical: "https://www.logic-unit.com/industry/",
  robots: "index, follow",
  h1: "Industries served through Logic Unit platforms.",
  primaryKeywords: [],
  secondaryKeywords: [],
  sections: [],
  ctas: [],
  internalLinks: []
};
```

## Component Rules

- One H1 per page.
- Main content sections should use H2.
- Card titles can use H3 where they belong under an H2.
- Footer column labels should not be H2s unless scoped semantically away from main content.
- Every page must have one primary CTA.
- Every page must link back into the site architecture.
- Each page must have a self-referencing canonical.
- Each page must be `index, follow` unless intentionally blocked.

## Design Rules

- Keep the site executive and product-company focused.
- Use product/platform visuals, diagrams, or operational imagery.
- Avoid generic software agency visuals.
- Avoid stock-like laptop/team images unless they directly support the page.
- Prefer diagrams for platform ecosystem, operating model, industry coverage, and partnership routes.
