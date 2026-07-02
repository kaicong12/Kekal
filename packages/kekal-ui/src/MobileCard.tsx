import * as React from "react";
import { RowMenu } from "./RowMenu";

export interface MobileCardProps {
  /** Leading media, e.g. a `<Thumb />`. */
  thumb?: React.ReactNode;
  /** Primary title line. */
  title: React.ReactNode;
  /** Secondary meta line under the title. */
  meta?: React.ReactNode;
  /** Top-left accent, e.g. a `<StatusPill />` or a price. */
  pill?: React.ReactNode;
  /** Card tap handler (usually opens the edit screen). */
  onClick?: () => void;
  /** Edit action for the overflow menu. */
  onEdit: () => void;
  /** Delete action for the overflow menu. */
  onDelete: () => void;
}

/**
 * Stacked list card for mobile — the phone-friendly replacement for a table
 * row. Thumbnail on the left, a pill/price + title + meta in the body, and a
 * single flush overflow menu in the top-right.
 */
export function MobileCard({
  thumb,
  title,
  meta,
  pill,
  onClick,
  onEdit,
  onDelete,
}: MobileCardProps) {
  return (
    <div className="kk-mcard" onClick={onClick}>
      {thumb}
      <div className="kk-mcard__body">
        {pill && <div className="kk-mcard__pillrow">{pill}</div>}
        <div className="kk-mcard__title">{title}</div>
        {meta && <div className="kk-mcard__meta">{meta}</div>}
      </div>
      <div className="kk-mcard__action">
        <RowMenu onEdit={onEdit} onDelete={onDelete} />
      </div>
    </div>
  );
}
