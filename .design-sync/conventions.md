# Kekal UI — how to build with this design system

`@kekal/ui` is the component kit for **Kekal admin / dashboard / app-style** screens.
It is dependency-light (React only) and self-styling — importing the package loads its
CSS, so there is **no provider or theme wrapper to mount**. Tokens are defined on `:root`,
so every component renders on-brand out of the box.

## Setup

Nothing to wrap. In a real app, import the package once (side-effect CSS is included):

```jsx
import { AdminTopBar, StatusPill, MobileCard, Thumb, RowMenu, Breadcrumb, useIsMobile } from "@kekal/ui";
```

There is no `ThemeProvider`, no context, no required root element.

## Styling idiom: CSS custom-property tokens

Components are pre-styled. For your **own layout glue** around them, style with the
`--kk-*` tokens (never hard-code the hex values) so pages stay consistent:

| Token | Meaning |
|---|---|
| `--kk-orange` / `--kk-orange-strong` / `--kk-orange-soft` | Primary accent, hover, soft bg |
| `--kk-ink` / `--kk-ink-soft` | Dark sidebar / raised dark surfaces |
| `--kk-bg` | App background (warm off-white) |
| `--kk-card` | Card / panel surface (white) |
| `--kk-border` / `--kk-border-strong` | Hairline / input borders |
| `--kk-text` / `--kk-text-muted` | Primary / secondary text |
| `--kk-green` / `--kk-amber` / `--kk-red` | Status colors (live / scheduled+attention / ended) |
| `--kk-font` | Brand font stack (Space Grotesk → Inter → system) |

Example layout glue:

```jsx
<div style={{ background: "var(--kk-bg)", fontFamily: "var(--kk-font)", padding: 28 }}>
  <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
    {/* stat cards, tables, etc. */}
  </div>
</div>
```

Accent is **orange** (`--kk-orange`); green/amber/red are reserved for status only.

## Components (all exported from `@kekal/ui`)

- **`AdminTopBar`** — sticky page top bar: `title`, optional `searchValue`/`onSearchChange`/`searchPlaceholder`, and an optional primary action (`actionLabel` + `onAction`). Search hides on mobile.
- **`StatusPill`** — `status` is one of `live | scheduled | draft | ended`; optional `label` overrides the default text.
- **`MobileCard`** — the phone-friendly list row: `thumb`, `pill`, `title`, `meta`, `onClick`, `onEdit`, `onDelete`. Pair with a table on desktop.
- **`Thumb`** — 52×40 list thumbnail with a "no image" fallback (`src`, `alt`).
- **`RowMenu`** — overflow `⋯` menu with Edit/Delete (`onEdit`, `onDelete`, `defaultOpen`).
- **`Breadcrumb`** — ancestor-link trail: `items` is an array of `{ label, href? }` (the last item, or any without `href`, renders as the current page in bold), plus optional `separator` (default `›`). Renders plain `<a>` anchors — wrap with your router's link for client navigation.
- **`useIsMobile(breakpoint = 860)`** — hook returning true on small viewports; use it to swap tables for stacked `MobileCard`s.

## Mobile-first rule

Most Kekal users are on mobile. **Lists must have a stacked-card fallback** — render a table
on desktop and `MobileCard`s under ~860px (drive the switch with `useIsMobile()`); never leave
a horizontal-scrolling table on phones. Keep the primary action reachable.

## Where the truth lives

Read the component `.prompt.md` for per-component prop details, and the shipped `styles.css`
(the token + class source) before adding custom styling.

## Build snippet

```jsx
function OffersList({ offers }) {
  const isMobile = useIsMobile();
  return (
    <div style={{ background: "var(--kk-bg)", fontFamily: "var(--kk-font)" }}>
      <AdminTopBar title="Promotions" actionLabel="New offer" onAction={createOffer} />
      <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 10 }}>
        {offers.map((o) => (
          <MobileCard
            key={o.id}
            thumb={<Thumb src={o.imageUrl} alt={o.title} />}
            pill={<StatusPill status={o.status} />}
            title={o.title}
            meta={o.schedule}
            onClick={() => open(o.id)}
            onEdit={() => open(o.id)}
            onDelete={() => remove(o.id)}
          />
        ))}
      </div>
    </div>
  );
}
```
