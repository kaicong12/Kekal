# Kekal App Design System

The visual language established by the redesigned **admin panel** (`app/components/admin/`).
Use this as the reference theme for **new admin / dashboard / internal-tool / app-style
pages**. The public storefront (home, listing, motorcycle detail) still uses the legacy
Bootstrap + SCSS marketing styling — don't mix the two systems on one page.

Source of truth: **`app/components/admin/admin.module.css`** (tokens live on `.shell`).
When in doubt, read that file — this doc summarizes it.

---

## 1. Design tokens

All tokens are CSS custom properties scoped to `.shell` in `admin.module.css`. Reuse the
same values (or promote them to a shared `:root` if a new page needs them outside the admin).

### Color

| Token | Value | Use |
|---|---|---|
| `--admin-orange` | `#f2622e` | Primary accent — buttons, active nav, focus, highlights |
| `--admin-orange-strong` | `#e2551f` | Primary hover/pressed |
| `--admin-orange-soft` | `#fdeadf` | Selected/active backgrounds, soft callouts |
| `--admin-ink` | `#17181c` | Sidebar / dark surfaces, active tab fill |
| `--admin-ink-soft` | `#202228` | Raised elements on dark (user card, hover) |
| `--admin-bg` | `#f6f4f1` | App background (warm off-white) |
| `--admin-card` | `#ffffff` | Card / panel surface |
| `--admin-border` | `#ece9e4` | Default hairline borders, row dividers |
| `--admin-border-strong` | `#ded9d1` | Input borders, stronger dividers |
| `--admin-text` | `#191a1c` | Primary text / headings |
| `--admin-text-muted` | `#6b7280` | Secondary text, labels, meta |
| `--admin-side-text` | `#c9cbd1` | Sidebar text |
| `--admin-side-muted` | `#7d818b` | Sidebar muted labels |
| `--admin-green` | `#12b76a` | "Live" / positive status |
| `--admin-amber` | `#d9880f` | "Scheduled" / needs-attention status |

Status pill families: **live** = green, **scheduled** = amber, **draft** = grey, **ended** = red
(each a soft tinted bg + colored dot). See `.pill*` classes.

### Typography

- **Font:** `var(--font-display, Inter, system-ui, sans-serif)` — the admin uses **Space Grotesk**
  (loaded as `--font-display` in `app/[locale]/layout.js`); **Inter** is the body fallback.
- **Type scale** (weight / size / tracking):
  - Page heading — 700 / 30px / -0.02em
  - Form title — 700 / 24px / -0.02em
  - Stat value — 700 / 26px
  - Panel / section title — 600 / 15px
  - Body & table cells — 400 / 14px
  - Labels & field labels — 600 / 13px
  - Meta / subtitle — 400 / 12–14px, `--admin-text-muted`
  - Table column headers — 600 / 11px, UPPERCASE, 0.08em tracking
  - Nav section labels — 10px, UPPERCASE, 0.14em tracking

### Radius / spacing / elevation

- **Radius:** cards & panels `14px`, buttons & inputs `10px`, media tiles & small cards `12px`,
  pills `999px`, chips/tags & small controls `8px`.
- **Spacing:** content padding `28px` desktop → `16–18px` mobile; card/panel padding `16–20px`;
  grid gaps `16px`; content `max-width: 1120px`.
- **Elevation:** flat by default — `1px solid var(--admin-border)`. Reserve soft shadows for
  overlays/menus (`0 12px 30px rgba(0,0,0,.12)`).

---

## 2. Layout & components

Built as plain CSS-module classes (`admin.module.css`) plus small React helpers in
`app/components/admin/adminUi.js`. AntD is themed to match via `ConfigProvider` (see §3).

- **App shell** (`AdminDashboard.js`): fixed `248px` dark sidebar + scrolling `main`.
  Sidebar = brand mark (orange rounded square) + nav items (active = orange fill; disabled =
  greyed placeholder) + bottom user card. On mobile the sidebar collapses to a **bottom nav**.
- **Sticky top bar** (`AdminTopBar` in `adminUi.js`): page title (left) + search + primary action
  button (right). Search is desktop-only (hidden < 860px).
- **Buttons:** `.primaryBtn` (orange, `nowrap`), `.ghostBtn` (white, bordered), `.iconBtn` (square).
- **Stat cards:** `.statGrid` (4-col → 2-col ≤ 768px) of `.statCard` — label + big value + optional
  colored hint. **Only show metrics backed by real data.**
- **Data list:** `.tableCard` with optional `.tabs` (pill tabs, active = ink fill) + a clean table
  (uppercase headers, row hover, leading thumbnail). **On mobile (≤ 860px) render stacked
  `MobileCard`s instead of a scrolling table** — thumbnail + status pill + title + meta, with a
  single flush top-right `⋯` menu (`RowMenu`). No horizontal scroll on phones.
- **Status pill:** `StatusPill` — soft tinted bg + dot + label.
- **Forms** (`*FormInterface.js`): sticky action bar (breadcrumb + Discard + Save), then a
  two-column `.formLayout` — main column of `.panel` sections + a `320px` sticky side rail
  (status/visibility, schedule, pricing, options). Collapses to one column ≤ 900px; breadcrumb
  hides ≤ 860px. Inputs stay as AntD, themed orange.

---

## 3. Conventions for new pages

1. **Wrap in the themed `ConfigProvider`** so AntD controls match the accent:
   ```jsx
   const antdTheme = {
     token: {
       colorPrimary: "#f2622e",
       colorInfo: "#f2622e",
       borderRadius: 10,
       controlHeight: 40,
       fontFamily: "var(--font-display, Inter, system-ui, sans-serif)",
     },
   };
   // <ConfigProvider theme={antdTheme}> … </ConfigProvider>
   ```
2. **Style with the token classes** in `admin.module.css` (import as a CSS module). Reuse the
   tokens above rather than hard-coding hex values; add new tokens beside the existing ones.
3. **Reuse the helpers** in `adminUi.js` (`AdminTopBar`, `StatusPill`, `RowMenu`, `MobileCard`,
   `Thumb`, `useIsMobile`) instead of re-implementing.
4. **Mobile-first** — most users are on mobile. Every list must have a card fallback (no
   horizontal-scroll tables); keep primary actions reachable; test at 390 / 768 / 1280px.
5. **Honesty over decoration** — don't render stat cards, columns, or badges for data that
   doesn't exist yet.
6. **Accent = orange `#f2622e`.** Green/amber/red are reserved for status only.

### Responsive breakpoints

- `≤ 900px` — form two-column → single column; side rail un-sticks.
- `≤ 860px` — sidebar hidden → bottom nav; tables → stacked cards; search & form breadcrumb hidden.
- `≤ 768px` — stat grid → 2 columns.
