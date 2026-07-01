"use client";
import { useEffect, useRef, useState } from "react";
import { SearchOutlined, PlusOutlined } from "@ant-design/icons";
import styles from "./admin.module.css";

/* ---- Responsive helper ---- */
export function useIsMobile(breakpoint = 860) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [breakpoint]);
  return isMobile;
}

/* ---- Stacked card used by the list screens on mobile ---- */
export function MobileCard({ thumb, title, meta, pill, onClick, onEdit, onDelete }) {
  return (
    <div className={styles.mCard} onClick={onClick}>
      {thumb}
      <div className={styles.mCardBody}>
        {pill && <div className={styles.mCardPillRow}>{pill}</div>}
        <div className={styles.mCardTitle}>{title}</div>
        {meta && <div className={styles.mCardMeta}>{meta}</div>}
      </div>
      <div className={styles.mCardAction}>
        <RowMenu onEdit={onEdit} onDelete={onDelete} />
      </div>
    </div>
  );
}

/* ---- Sticky top bar shared by the list screens ---- */
export function AdminTopBar({
  title,
  searchPlaceholder,
  searchValue,
  onSearchChange,
  actionLabel,
  onAction,
}) {
  return (
    <div className={styles.topbar}>
      <span className={styles.topbarTitle}>{title}</span>
      <span className={styles.topbarSpacer} />
      <div className={styles.searchBox}>
        <SearchOutlined />
        <input
          value={searchValue}
          placeholder={searchPlaceholder}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      {actionLabel && (
        <button type="button" className={styles.primaryBtn} onClick={onAction}>
          <PlusOutlined /> {actionLabel}
        </button>
      )}
    </div>
  );
}

/* ---- Promotion status helper (shared) ---- */
export function getPromotionStatus(promotion) {
  const now = new Date();
  const start = new Date(promotion.startDate);
  const end = new Date(promotion.endDate);

  if (!promotion.isActive) return { key: "draft", label: "Draft" };
  if (now < start) return { key: "scheduled", label: "Scheduled" };
  if (now > end) return { key: "ended", label: "Ended" };
  return { key: "live", label: "Live" };
}

export const formatDate = (value) =>
  new Date(value).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
  });

const pillClassByKey = {
  live: styles.pillLive,
  scheduled: styles.pillScheduled,
  draft: styles.pillDraft,
  ended: styles.pillEnded,
  published: styles.pillLive,
  sold: styles.pillDraft,
};

export function StatusPill({ statusKey, label }) {
  return (
    <span className={`${styles.pill} ${pillClassByKey[statusKey] || styles.pillDraft}`}>
      <span className={styles.pillDot} />
      {label}
    </span>
  );
}

export function Thumb({ src, alt }) {
  const [errored, setErrored] = useState(false);
  if (!src || errored) {
    return (
      <div className={`${styles.thumb} ${styles.thumbPlaceholder}`}>
        no
        <br />
        image
      </div>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={styles.thumb}
      src={src}
      alt={alt || ""}
      onError={() => setErrored(true)}
    />
  );
}

export function RowMenu({ onEdit, onDelete }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const onDocClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open]);

  return (
    <div
      className={styles.rowMenuWrap}
      ref={ref}
      onClick={(e) => e.stopPropagation()}
    >
      <button
        type="button"
        className={styles.rowMenuBtn}
        aria-label="Row actions"
        onClick={() => setOpen((v) => !v)}
      >
        &#8943;
      </button>
      {open && (
        <div className={styles.rowMenu}>
          <button
            type="button"
            className={styles.rowMenuItem}
            onClick={() => {
              setOpen(false);
              onEdit();
            }}
          >
            Edit
          </button>
          <button
            type="button"
            className={`${styles.rowMenuItem} ${styles.rowMenuDanger}`}
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
