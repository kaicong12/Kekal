# Kekal UI — design-sync notes

Repo-specific gotchas for future syncs of `@kekal/ui` → claude.ai/design project
`842fca95-0e41-4d62-a7fc-e32a5ca2d2e9` ("Kekal UI").

- **Shape is `package`** — the source lives at `packages/kekal-ui` (a standalone,
  dependency-light extraction of the admin presentational components). It is NOT wired
  into the Next app; the app still uses `app/components/admin/*` directly. Keep the two in
  sync by hand if the shared components change.
- **Build first.** `dist/` is gitignored. Re-sync must run `cfg.buildCmd`
  (`npm run build --prefix packages/kekal-ui`) before the converter, else `[NO_DIST]`.
- **`--node-modules packages/kekal-ui/node_modules`** — `react`/`react-dom` are installed
  there as devDeps so the bundler can resolve them (they're peerDeps in package.json).
  Run `npm install` in that dir on a fresh clone.
- **Fonts load remotely.** `styles.css` has a Google Fonts `@import` for Space Grotesk +
  Inter (matches the main app's `next/font`). Validate reports `[FONT_REMOTE]` — expected,
  non-blocking. Offline/blocked registry → previews fall back to system fonts.
- **Render check browser**: repo `playwright-core@1.59.0` pins chromium build `1217`, which
  is cached at `~/Library/Caches/ms-playwright/chromium-1217` (macOS path, not `~/.cache`).
  Node resolves playwright from the repo-root `node_modules`. No download needed.
- **`RowMenu.defaultOpen`** was added purely so the preview can render the open menu; it
  defaults false and doesn't change existing call sites.

## Known render warns
- `[FONT_REMOTE]` on Space Grotesk / Inter — expected (remote font host), not a defect.
- (No `[RENDER_*]` warns — render check was 5/5 clean.)

## Changelog
- **2026-07-02: added `Breadcrumb`** (`packages/kekal-ui/src/Breadcrumb.tsx`, `kk-crumbs` styles, exported from `index.ts`). Preview `.design-sync/previews/Breadcrumb.tsx` is hand-authored (2 cells, both graded good). The DS component renders plain `<a>` anchors (framework-agnostic). The **app** has a parallel storefront breadcrumb at `app/components/motorkekal/Breadcrumb.js` that uses next-intl `Link` + the `.mk-site .crumbs` storefront styling — same drift-by-hand rule as the other components.

## Re-sync risks (watch-list)
- **Preview content is inlined**, not derived from repo examples (there are no docs/examples
  in the package). The `.design-sync/previews/*.tsx` use hand-written realistic data; they
  won't drift with app data but should be revisited if a component's API changes.
- **Package/app drift**: `packages/kekal-ui/src/*` were copied from `app/components/admin/`
  (adminUi.js + admin.module.css tokens). If the admin components evolve, the package won't
  update automatically — re-extract before re-syncing.
- **CSS is a hand-maintained copy** of the admin tokens/classes (renamed `kk-*`). Token
  values must stay aligned with `app/components/admin/admin.module.css`.
