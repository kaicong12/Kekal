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
cp .env.example .env   # Fill in Firebase config, DATABASE_URL, Gmail OAuth credentials
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

## Project Structure

```
app/
  home/                # Landing page
  (listing)/           # Motorcycle listing (filters, pagination)
  motorcycle/[slug]/   # Motorcycle detail page
  (pages)/admin/       # Admin dashboard (auth-protected)
  api/                 # REST API (motorcycles, email)
  components/          # Shared UI components
  generated/           # Generated Prisma client
prisma/                # Schema and migrations
utils/                 # DB helpers, hooks, email service, slug utils
public/                # Static assets and SCSS
```
