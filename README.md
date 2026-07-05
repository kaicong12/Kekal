# Kekal

Motorcycle ecommerce platform for Perniagaan Motor Kekal, a motorcycle dealer in Johor Bahru, Malaysia.

## Tech Stack

- **Framework:** Next.js 13 (App Router)
- **Database:** PostgreSQL via Prisma
- **Auth & Storage:** Firebase (Google Auth, Cloud Storage, Firestore)
- **Styling:** Bootstrap 5, Ant Design, SCSS, Styled Components
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 16+
- Yarn
- PostgreSQL database
- Firebase project

### Setup

```bash
git clone https://github.com/kaicong12/Kekal.git
cd Kekal
yarn install
cp .env.example .env   # Fill in DATABASE_URL and Firebase config
npx prisma generate
npx prisma migrate dev
yarn dev                # http://localhost:3000
```

## Scripts

```bash
yarn dev               # Dev server
yarn build             # Production build
yarn start             # Start production server
yarn lint              # ESLint
npx prisma generate    # Generate Prisma client
npx prisma migrate dev # Run migrations
npx prisma studio      # Database GUI
```

## Motorcycle catalog: scrape & ingest

The catalog is populated by a two-step pipeline. The scraper writes a snapshot
to Firebase Storage and records a `ProductSyncFile` row; the ingester reads
unprocessed files and upserts them into Postgres.

Prerequisites:

- `DATABASE_URL` set in `.env`
- Firebase service account JSON at `utils/keys/sandbox_privateKey.json`
  (or `utils/keys/prod_privateKey.json` when `NODE_ENV=production`)

Run both commands from the project root:

```bash
# 1. Scrape motomalaysia.com and upload a JSON snapshot to Firebase Storage.
#    Flags:
#      --test       only scrape the first listing page
#      --test-one   only scrape a single motorcycle (smoke test)
node utils/scripts/scrape-motorcycles.mjs
node utils/scripts/scrape-motorcycles.mjs --test-one

# 2. Ingest every unprocessed sync file into Postgres (idempotent upsert
#    keyed on brand+name+year). Marks files as processed when done.
node utils/scripts/ingest-motorcycles.mjs
```

`engineCapacity` is resolved from `specification.Performance.Displacement` and
only falls back to the listing CC when displacement is unavailable — the
listing field has been observed to contain truncated values. The same
validation runs in both the scraper and the ingester.

## Project Structure

```
app/
  home/                # Landing page
  (listing)/           # Motorcycle listing (filters, pagination)
  motorcycle/[slug]/   # Motorcycle detail page
  (pages)/admin/       # Admin dashboard (auth-protected)
  api/                 # REST API (motorcycles, promotions)
  components/          # Shared UI components
  generated/           # Generated Prisma client
prisma/                # Schema and migrations
utils/                 # DB helpers, hooks, slug utils, Firebase upload
tests/                 # Playwright E2E tests (desktop + mobile)
public/                # Static assets and SCSS
```
