"use client";
import { useState, useEffect, useCallback, useMemo } from "react";
import { message, Modal } from "antd";
import { StarFilled } from "@ant-design/icons";
import { auth } from "@/utils/firebase";
import {
  AdminTopBar,
  MobileCard,
  RowMenu,
  StatusPill,
  Thumb,
  formatDate,
  getPromotionStatus,
  useIsMobile,
} from "../adminUi";
import styles from "../admin.module.css";

// Re-exported for backwards compatibility with older imports.
export { getPromotionStatus };

const TABS = [
  { key: "all", label: "All" },
  { key: "live", label: "Live" },
  { key: "scheduled", label: "Scheduled" },
  { key: "draft", label: "Draft" },
  { key: "ended", label: "Ended" },
];

export default function PromotionListInterface({ onCreateNew, onEdit }) {
  const [promotions, setPromotions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [tab, setTab] = useState("all");
  const isMobile = useIsMobile();

  const fetchPromotions = useCallback(async () => {
    setLoading(true);
    try {
      const token = await auth.currentUser?.getIdToken();
      const res = await fetch("/api/promotions?all=true", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error();
      const data = await res.json();
      setPromotions(data.promotions || []);
    } catch {
      message.error("Failed to load promotions");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPromotions();
  }, [fetchPromotions]);

  const handleDelete = (promotion) => {
    Modal.confirm({
      title: "Delete Promotion",
      content: `Are you sure you want to delete "${promotion.title}"? This action cannot be undone.`,
      okText: "Delete",
      okType: "danger",
      onOk: async () => {
        try {
          const token = await auth.currentUser?.getIdToken();
          const res = await fetch(`/api/promotions/${promotion.id}`, {
            method: "DELETE",
            headers: { Authorization: `Bearer ${token}` },
          });
          if (!res.ok) throw new Error();
          message.success("Promotion deleted successfully");
          fetchPromotions();
        } catch {
          message.error("Failed to delete promotion");
        }
      },
    });
  };

  // Attach a status object to every promotion once.
  const withStatus = useMemo(
    () => promotions.map((p) => ({ ...p, _status: getPromotionStatus(p) })),
    [promotions]
  );

  const counts = useMemo(() => {
    const c = { all: withStatus.length, live: 0, scheduled: 0, draft: 0, ended: 0 };
    withStatus.forEach((p) => {
      c[p._status.key] += 1;
    });
    return c;
  }, [withStatus]);

  const endingSoon = useMemo(() => {
    const now = Date.now();
    const threeDays = 3 * 24 * 60 * 60 * 1000;
    return withStatus.filter(
      (p) => p._status.key === "live" && new Date(p.endDate).getTime() - now <= threeDays
    ).length;
  }, [withStatus]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return withStatus.filter((p) => {
      if (tab !== "all" && p._status.key !== tab) return false;
      if (!q) return true;
      return (
        p.title?.toLowerCase().includes(q) ||
        p.subtitle?.toLowerCase().includes(q)
      );
    });
  }, [withStatus, tab, search]);

  const stats = [
    { label: "Live offers", value: counts.live, hint: counts.live ? "active now" : null, hintClass: styles.statHint },
    { label: "Scheduled", value: counts.scheduled },
    { label: "Draft", value: counts.draft },
    {
      label: "Ending in 3 days",
      value: endingSoon,
      hint: endingSoon ? "needs attention" : null,
      hintClass: `${styles.statHintMuted} ${styles.statHintAmber}`,
    },
  ];

  return (
    <>
      <AdminTopBar
        title="Promotions"
        searchPlaceholder="Search offers..."
        searchValue={search}
        onSearchChange={setSearch}
        actionLabel="New offer"
        onAction={onCreateNew}
      />

      <div className={styles.content}>
        <h1 className={styles.pageHeading}>Promotions</h1>
        <p className={styles.pageSubtitle}>
          Dated offers that pull walk-ins and keep your Google listing fresh.
        </p>

        <div className={styles.statGrid}>
          {stats.map((s) => (
            <div key={s.label} className={styles.statCard}>
              <div className={styles.statLabel}>{s.label}</div>
              <div className={styles.statValueRow}>
                <span className={styles.statValue}>{s.value}</span>
                {s.hint && <span className={s.hintClass}>{s.hint}</span>}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.tableCard}>
          <div className={styles.tabs}>
            {TABS.map((t) => (
              <button
                key={t.key}
                type="button"
                className={`${styles.tab} ${tab === t.key ? styles.tabActive : ""}`}
                onClick={() => setTab(t.key)}
              >
                {t.label} <span className={styles.tabCount}>{counts[t.key]}</span>
              </button>
            ))}
          </div>

          {isMobile ? (
            <div className={styles.mobileList}>
              {loading ? (
                <div className={styles.emptyState}>Loading…</div>
              ) : filtered.length === 0 ? (
                <div className={styles.emptyState}>No offers found.</div>
              ) : (
                filtered.map((p) => (
                  <MobileCard
                    key={p.id}
                    onClick={() => onEdit(p.id)}
                    onEdit={() => onEdit(p.id)}
                    onDelete={() => handleDelete(p)}
                    thumb={<Thumb src={p.imageUrl} alt={p.title} />}
                    pill={<StatusPill statusKey={p._status.key} label={p._status.label} />}
                    title={
                      <span className={styles.offerTitle}>
                        {p.isFeatured && (
                          <StarFilled style={{ color: "#f2622e", fontSize: 12 }} />
                        )}
                        {p.title}
                      </span>
                    }
                    meta={
                      p._status.key === "draft"
                        ? "Not scheduled"
                        : `${formatDate(p.startDate)} → ${formatDate(p.endDate)}`
                    }
                  />
                ))
              )}
            </div>
          ) : (
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Offer</th>
                    <th style={{ width: 130 }}>Status</th>
                    <th style={{ width: 200 }}>Schedule</th>
                    <th style={{ width: 60 }} />
                  </tr>
                </thead>
                <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={4} className={styles.emptyState}>
                      Loading…
                    </td>
                  </tr>
                ) : filtered.length === 0 ? (
                  <tr>
                    <td colSpan={4} className={styles.emptyState}>
                      No offers found.
                    </td>
                  </tr>
                ) : (
                  filtered.map((p) => (
                    <tr
                      key={p.id}
                      className={styles.rowClickable}
                      onClick={() => onEdit(p.id)}
                    >
                      <td>
                        <div className={styles.offerCell}>
                          <Thumb src={p.imageUrl} alt={p.title} />
                          <div>
                            <div className={styles.offerTitle}>
                              {p.isFeatured && (
                                <StarFilled style={{ color: "#f2622e", fontSize: 12 }} />
                              )}
                              {p.title}
                            </div>
                            {p.subtitle && (
                              <div className={styles.offerMeta}>{p.subtitle}</div>
                            )}
                          </div>
                        </div>
                      </td>
                      <td>
                        <StatusPill statusKey={p._status.key} label={p._status.label} />
                      </td>
                      <td className={styles.muted}>
                        {p._status.key === "draft"
                          ? "Not scheduled"
                          : `${formatDate(p.startDate)} → ${formatDate(p.endDate)}`}
                      </td>
                      <td style={{ textAlign: "right" }}>
                        <RowMenu
                          onEdit={() => onEdit(p.id)}
                          onDelete={() => handleDelete(p)}
                        />
                      </td>
                    </tr>
                  ))
                )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
