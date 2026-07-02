import { Fragment } from "react";
import { Link } from "@/i18n/navigation";

/**
 * Storefront breadcrumb matching the redesigned `.mk-site` pages.
 * Render inside a `.mk-site` context so the scoped `.crumbs` styling applies.
 *
 * @param {{ items: { label: string, href?: string }[] }} props
 *   Each item renders as a link when `href` is set; the last item (or any
 *   item without `href`) renders as the current, non-link crumb.
 */
export default function Breadcrumb({ items }) {
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      {items.map((item, i) => (
        <Fragment key={i}>
          {i > 0 && <span>›</span>}
          {item.href ? <Link href={item.href}>{item.label}</Link> : item.label}
        </Fragment>
      ))}
    </nav>
  );
}
