import * as React from "react";
import { SearchIcon, PlusIcon } from "./icons";

export interface AdminTopBarProps {
  /** Section title shown on the left. */
  title: React.ReactNode;
  /** Placeholder for the search field. */
  searchPlaceholder?: string;
  /** Controlled search value. */
  searchValue?: string;
  /** Fired on each search keystroke with the new value. */
  onSearchChange?: (value: string) => void;
  /** Label for the primary action button. Omit to hide the button. */
  actionLabel?: string;
  /** Primary action handler. */
  onAction?: () => void;
}

/**
 * Sticky page top bar for admin list screens: section title on the left, a
 * search field and an orange primary action button on the right. The search
 * field is hidden on mobile via CSS.
 */
export function AdminTopBar({
  title,
  searchPlaceholder,
  searchValue,
  onSearchChange,
  actionLabel,
  onAction,
}: AdminTopBarProps) {
  return (
    <div className="kk-topbar">
      <span className="kk-topbar__title">{title}</span>
      <span className="kk-topbar__spacer" />
      <div className="kk-search">
        <SearchIcon />
        <input
          value={searchValue}
          placeholder={searchPlaceholder}
          onChange={(e) => onSearchChange?.(e.target.value)}
        />
      </div>
      {actionLabel && (
        <button type="button" className="kk-btn-primary" onClick={onAction}>
          <PlusIcon /> {actionLabel}
        </button>
      )}
    </div>
  );
}
