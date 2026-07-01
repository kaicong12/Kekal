# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Kekal is a full-stack Next.js 13 motorcycle ecommerce platform for a Malaysian motorcycle dealer. It uses the App Router (`app/` directory), PostgreSQL via Prisma, Firebase for auth/storage, and deploys on Vercel.

## Commands

```bash
yarn dev          # Start dev server on localhost:3000
yarn build        # Production build
yarn start        # Start production server
yarn lint         # ESLint via Next.js
```

Prisma commands:
```bash
npx prisma generate    # Generate Prisma client (outputs to app/generated/prisma)
npx prisma migrate dev # Run migrations in development
npx prisma studio      # Open database GUI
```

## Architecture

### Routing (App Router)

- `app/home/` — Landing page
- `app/(listing)/` — Motorcycle listing with filters/pagination
- `app/motorcycle/[slug]/` — Detail page (slug format: `{brand}-{name}-{id}`)
- `app/(pages)/admin/` — Admin dashboard (Firebase Google Auth protected)
- `app/api/motorcycles/` — REST endpoints for search, filter, pagination
- `app/api/email/` — Email endpoints (contact, receipt, newsletter, review, service)

### Data Layer

- **Database:** PostgreSQL accessed via Prisma singleton (`utils/dbPg.js`)
- **Key models:** Motorcycle (with unique constraint on brand+name+year), MotorcycleImage, GeneratedReceipt, ReceiptCustomer, ReceiptItem
- **Firebase:** Google Auth for admin access, Cloud Storage for scraped JSON and images, Firestore for auth email whitelist (`config/emailConfig`)

### Key Utilities

- `utils/dbPg.js` — Prisma client singleton + query helpers (listMotorcyclesPg, queryMotorcyclePg, etc.)
- `utils/slug.js` — SEO slug generation/parsing; extracts 25-char CUID from slug end
- `utils/hooks/useMotorcyclesPg.js` — React hook managing listing state (search, filters, sort, pagination)
- `utils/email/emailService.js` — Nodemailer singleton with Gmail OAuth2

### Auth Flow

Firebase Google Sign-In → check email against Firestore whitelist (`config/emailConfig`) → auto sign-out if unauthorized. Wrapped in `AuthProvider` context.

### Styling

Hybrid: Bootstrap 5 (grid/utilities), Ant Design (admin components), SCSS (`public/scss/`), CSS Modules for scoped styles, Styled Components for wrappers.

### Admin / app design system

New **admin / dashboard / internal-tool / app-style** pages must follow the theme in
**`DESIGN_SYSTEM.md`** (tokens, typography, components — sourced from `app/components/admin/admin.module.css`
and helpers in `app/components/admin/adminUi.js`). Accent is orange `#f2622e`; wrap AntD in the themed
`ConfigProvider`; lists get mobile card fallbacks (no horizontal-scroll tables); only show metrics backed
by real data. The public storefront keeps its legacy Bootstrap/SCSS marketing styling — don't mix them.

## Path Alias

`@/*` maps to project root (e.g., `@/utils/dbPg`, `@/app/components/...`).

## Environment Variables

See `.env.example` for required variables: Firebase config, DATABASE_URL, Gmail OAuth credentials.

## Playwright / Dev Server Verification

When verifying UI changes with Playwright:

1. **Check if a dev server is already running** before starting one. Use `lsof -ti:3000` to check port 3000. If it's already up, use that session — do not start a new one.
2. **Only start `yarn dev` if no server is running.** If you do start one, you must kill it when done:
   ```bash
   lsof -ti:3000 | xargs kill -9 2>/dev/null; lsof -ti:3001 | xargs kill -9 2>/dev/null
   ```
3. **Never leave behind a dev server you started.** If the server was already running before your task, leave it running. Only clean up what you spawned.
4. **Clean up screenshot files** generated during verification (remove any `.png`/`.jpeg` files created in the project root).
