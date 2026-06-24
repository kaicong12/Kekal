# Promotions ("Promosi") Feature — Implementation Plan

## Goal

A public **Promotions** page that displays dated, time-limited offers with a live
countdown, plus an **admin panel** to create/edit/delete promotion campaigns.
Dated offers + countdowns signal an active shop to Google and create urgency to
visit the Johor Jaya showroom.

## Decisions (confirmed)

| Topic | Decision |
| --- | --- |
| Promo ↔ catalog | **Standalone promos** with an **optional** link to one catalog `Motorcycle` (used for the featured hero / "RM 500 off any Yamaha"). |
| Categories | **None** — single flat list. The category tabs in the mockup (All / New bikes / Service / Trade-in) are dropped. |
| Claim CTA | **WhatsApp + walk-in.** Per-deal button opens WhatsApp prefilled with the promo title; a sticky bottom bar opens the showroom location ("Visit us to claim · Johor Jaya"). |
| Scheduling | **Start/end dates + manual `isActive` override.** Dates drive the countdown and auto show/hide; the toggle can force-hide early. |

### Assumptions (flag if any are wrong)
- Public route: **`/promotions`** (consistent with existing `/about-us`, `/contact`, `/service`), with the page title rendered as **"Promosi"**.
- WhatsApp number reused from existing CTAs: `60127126128` (`wa.me/60127126128`).
- "Featured" hero = the live promo flagged `isFeatured` (fallback: soonest-ending live promo).
- A promo is **live** when `isActive && now ≥ startDate && now ≤ endDate`. Expired/inactive promos are hidden from the public page but kept in admin.

---

## 1. Data layer

### Prisma model (`prisma/schema.prisma`)
```prisma
model Promotion {
  id              String   @id @default(cuid())
  title           String              // "RM 500 off any Yamaha"
  subtitle        String?             // "+ free 1st service & road tax"
  description     String?             // longer body text
  imageUrl        String?             // hero/card image (Firebase Storage)
  ctaText         String   @default("Claim this deal")
  whatsappMessage String?             // prefilled WA text; falls back to title
  isFeatured      Boolean  @default(false)   // hero slot
  isActive        Boolean  @default(true)    // manual override
  startDate       DateTime
  endDate         DateTime
  displayOrder    Int      @default(0)

  motorcycleId    String?
  motorcycle      Motorcycle? @relation(fields: [motorcycleId], references: [id], onDelete: SetNull)

  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt

  @@index([isActive, startDate, endDate])
  @@map("promotions")
}
```
- Add back-relation to `Motorcycle`: `promotions Promotion[]`.
- Run `npx prisma migrate dev --name add_promotions` then `npx prisma generate`.

### Query helpers (`utils/dbPg.js`)
Mirror the existing motorcycle helpers:
- `listLivePromotionsPg()` — `isActive` true and `startDate ≤ now ≤ endDate`, ordered by `isFeatured desc, displayOrder asc, endDate asc`, includes `motorcycle` (+ first image).
- `listAllPromotionsPg()` — admin: everything, newest first.
- `getPromotionPg(id)`, `createPromotionPg(data)`, `updatePromotionPg(id, data)`, `deletePromotionPg(id)`.

---

## 2. API routes (App Router, mirror `app/api/motorcycles`)

- `app/api/promotions/route.js`
  - `GET` — public; returns **live** promos by default, or all when `?all=true` **and** a valid admin token (`verifyAuthToken`).
  - `POST` — admin only (`verifyAuthToken`); validates required fields (`title`, `startDate`, `endDate`, `endDate > startDate`); creates promo.
- `app/api/promotions/[id]/route.js`
  - `GET` single, `PUT` update, `DELETE` — all admin-protected via `verifyAuthToken`.

Reuse the exact auth/error/validation shape already in `app/api/motorcycles/route.js`.

---

## 3. Image upload

Generalize the existing `utils/motorcycleImageUpload.js` into a reusable helper
(or add `utils/promotionImageUpload.js` modeled on it): upload to Firebase
Storage path `promotionImages/{promotionId-or-temp}/{timestamp}.{ext}`, return
download URL. Same delete-on-replace behavior.

---

## 4. Admin panel

Mirror the motorcycle admin trio under `app/components/admin/promotions/`:
- `PromotionManagement.js` — container; list ⇄ form switching.
- `PromotionListInterface.js` — AntD table: title, status badge (Live / Scheduled / Expired / Hidden), date range, featured star, edit/delete.
- `PromotionFormInterface.js` — AntD form:
  - title, subtitle, description
  - image upload (Firebase)
  - `startDate` / `endDate` (AntD `RangePicker`)
  - `isFeatured`, `isActive` switches
  - optional `motorcycle` selector (searchable Select populated from `/api/motorcycles`)
  - `ctaText`, `whatsappMessage`
  - `displayOrder`

Wire a new menu item into `app/components/admin/AdminDashboard.js`:
```js
{ key: "promotions", icon: <TagsOutlined />, label: "Promotions",
  component: <PromotionManagement /> }
```

---

## 5. Public Promotions page

### Route & data
- `app/(pages)/promotions/page.js` — **server component**: calls `listLivePromotionsPg()`, exports `metadata` (title "Promosi · Kekal Motor", description). Passes data to a client component.
- Renders an empty-state ("No active promotions right now — check back soon") when none are live, so the route is always crawlable.

### Components (`app/components/pages/promotions/`)
- `PromotionsClient.js` — layout: eyebrow ("THIS MONTH · JUN 2026", derived from featured promo's month), big headline, summary line ("N offers running now…"), featured hero card, list of remaining offers, sticky CTA.
- `FeaturedPromoCard.js` — hero image, "ENDS IN N DAYS" badge, title/subtitle, embedded **countdown**, WhatsApp "Claim this deal" button.
- `PromoCard.js` — compact card for non-featured live offers.
- `CountdownTimer.js` — **client**, `"use client"`; ticking days/hrs/min to `endDate` (the flip-style boxes in the mockup). Guard against hydration mismatch (compute on mount via `useEffect`).
- `PromotionsStickyCTA.js` — reuse the pattern from existing `StickyHomeCTA.js`; orange "Visit us to claim · Johor Jaya" → Google Maps link.

WhatsApp link helper: `https://wa.me/60127126128?text=<encoded promo.whatsappMessage || promo.title>`.

### Styling
Match existing hybrid approach (Bootstrap grid + SCSS/CSS Modules + styled-components already in `app/components/pages`). Build the dark hero card, orange badges, and green/orange CTAs to match the mockup, mobile-first.

---

## 6. Navigation

Add a **"Promosi"** link to:
- Desktop header nav (`app/components/common/DefaultHeader.js`)
- `app/components/common/MobileMenu.js`
- `app/components/common/footer/Navigation.js`

---

## 7. SEO (the core value of this feature)

- **Sitemap** (`app/sitemap.js`): add `/promotions` (`changeFrequency: daily`, `priority: 0.8`); optionally list each live promo URL if we add per-promo anchors.
- **Structured data**: new `app/components/seo/PromotionSchema.js` emitting JSON-LD. Use schema.org **`Offer`** per promo (name, description, `priceValidUntil`/`availabilityEnds` = `endDate`, `seller` = the LocalBusiness) wrapped in an `ItemList`, modeled on the existing `ItemListSchema.js` / `ProductSchema.js`. This is what surfaces "dated offers / active shop" signals.
- `<head>` metadata via the page's `metadata` export.

---

## 8. Build order / checklist

1. Prisma model + migration + generate.
2. `utils/dbPg.js` query helpers.
3. API routes (`/api/promotions`, `/api/promotions/[id]`).
4. Image upload helper.
5. Admin components + AdminDashboard menu entry.
6. Public page + components (hero, cards, countdown, sticky CTA).
7. Nav links.
8. SEO schema + sitemap + metadata.
9. Verify with Playwright (admin create → promo appears live; countdown ticks; WhatsApp/Maps links correct; expired promo hidden). Follow CLAUDE.md dev-server rules.

## Open questions before coding
1. Route slug `/promotions` vs `/promosi` — preference?
2. Confirm the showroom **Google Maps URL/address** for the sticky "Visit us" button.
3. Should expired promos show a subtle "Past deals" section (extra SEO content), or be fully hidden?
