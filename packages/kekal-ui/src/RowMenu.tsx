import * as React from "react";
import { useEffect, useRef, useState } from "react";

export interface RowMenuProps {
  /** Called when the Edit item is chosen. */
  onEdit: () => void;
  /** Called when the Delete item is chosen. */
  onDelete: () => void;
  /** Render with the menu already open (useful for previews/tests). */
  defaultOpen?: boolean;
}

/**
 * Overflow ("⋯") action menu for a table row or card, with Edit and Delete
 * items. Closes on outside click and stops click propagation so it can sit
 * inside a clickable row without triggering the row's own handler.
 */
export function RowMenu({ onEdit, onDelete, defaultOpen = false }: RowMenuProps) {
  const [open, setOpen] = useState(defaultOpen);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return undefined;
    const onDocClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open]);

  return (
    <div className="kk-rowmenu" ref={ref} onClick={(e) => e.stopPropagation()}>
      <button
        type="button"
        className="kk-rowmenu__btn"
        aria-label="Row actions"
        onClick={() => setOpen((v) => !v)}
      >
        &#8943;
      </button>
      {open && (
        <div className="kk-rowmenu__menu">
          <button
            type="button"
            className="kk-rowmenu__item"
            onClick={() => {
              setOpen(false);
              onEdit();
            }}
          >
            Edit
          </button>
          <button
            type="button"
            className="kk-rowmenu__item kk-rowmenu__item--danger"
            onClick={() => {
              setOpen(false);
              onDelete();
            }}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
