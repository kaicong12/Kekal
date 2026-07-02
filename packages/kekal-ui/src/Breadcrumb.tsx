import * as React from "react";

export interface BreadcrumbItem {
  /** Visible crumb text. */
  label: React.ReactNode;
  /** Link target for ancestor crumbs. Omit on the current (last) crumb. */
  href?: string;
}

export interface BreadcrumbProps {
  /**
   * Ordered crumbs from root to current page. The last item (or any item
   * without an `href`) renders as the current page — plain text, not a link.
   */
  items: BreadcrumbItem[];
  /** Separator rendered between crumbs. Defaults to "›". */
  separator?: React.ReactNode;
}

/**
 * Breadcrumb trail for admin / app pages — a muted row of ancestor links with
 * a separator, ending in the current page as plain text. Renders plain `<a>`
 * anchors so it stays framework-agnostic (wrap with your router's link if
 * client navigation is needed).
 */
export function Breadcrumb({ items, separator = "›" }: BreadcrumbProps) {
  return (
    <nav className="kk-crumbs" aria-label="Breadcrumb">
      {items.map((item, i) => {
        const isCurrent = !item.href || i === items.length - 1;
        return (
          <React.Fragment key={i}>
            {i > 0 && (
              <span className="kk-crumbs__sep" aria-hidden="true">
                {separator}
              </span>
            )}
            {isCurrent ? (
              <span className="kk-crumbs__current" aria-current="page">
                {item.label}
              </span>
            ) : (
              <a className="kk-crumbs__link" href={item.href}>
                {item.label}
              </a>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
