# SEO Audit & Implementation Plan - Vincenzo Capuano HK

## 1. Audit Results

### Meta Tags & Head Content
- **Title**: `Vincenzo Capuano Hong Kong` (Current)
  - *Recommendation*: Update to `Vincenzo Capuano | Award-Winning Contemporary Neapolitan Pizza in Hong Kong` (More descriptive).
- **Description**: `The World Champion of Contemporary Pizza Arrives in Hong Kong` (Current)
  - *Recommendation*: Expand to include location and USP: `Experience the world's best contemporary Neapolitan pizza by Champion Vincenzo Capuano at Lee Tung Avenue, Wan Chai. Authentic 081 Napoli tradition refined for Hong Kong.`
- **Missing Elements**:
  - Open Graph (OG) tags for social sharing (Facebook, LinkedIn).
  - Twitter Card tags.
  - Canonical URL.
  - Structured Data (JSON-LD) for Local Business/Restaurant.

### Heading Hierarchy
- **Critical Issue**: The home page (Hero section) is missing an `<h1>` tag. Search engines rely heavily on `<h1>` to understand the primary topic.
- **Accolades/Sections**: Correctly use `<h2>` and `<h3>`.

### Dynamic SEO
- **Issue**: Page titles do not change when navigating to `/menu` or `/contact`. They should be dynamic.
- **Language**: `<html>` lang attribute is correctly updated.

---

## 2. Implementation Steps

### Step 1: Update index.html
- [ ] Add Open Graph and Twitter meta tags.
- [ ] Add Canonical URL.
- [ ] Add JSON-LD Structured Data for the restaurant.

### Step 2: Update Hero.tsx
- [ ] Add a visually hidden `<h1>` tag: `Vincenzo Capuano - World Champion Contemporary Pizza Hong Kong`.

### Step 3: Update App.tsx
- [ ] Add dynamic document title and meta description updates based on route and language.

### Step 4: Verify Assets
- [ ] Ensure all key images in `Hero`, `Story`, and `Signature` have descriptive `alt` tags.
