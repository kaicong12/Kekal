"use client";
import { useState, useEffect, useCallback, useMemo } from "react";
import { message, Modal } from "antd";
import { auth } from "@/utils/firebase";
import { AdminTopBar, MobileCard, RowMenu, Thumb, useIsMobile } from "../adminUi";
import styles from "../admin.module.css";

export default function MotorcycleListInterface({ onCreateNew, onEdit }) {
  const [motorcycles, setMotorcycles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const isMobile = useIsMobile();

  const fetchMotorcycles = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(
        "/api/motorcycles?sortField=createdAt&sortOrder=desc"
      );
      const data = await res.json();
      setMotorcycles(data.motorcycles || []);
    } catch {
      message.error("Failed to load motorcycles");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMotorcycles();
  }, [fetchMotorcycles]);

  const handleDelete = (motorcycle) => {
    Modal.confirm({
      title: "Delete Motorcycle",
      content: `Are you sure you want to delete "${motorcycle.brand} ${motorcycle.name}"? This action cannot be undone.`,
      okText: "Delete",
      okType: "danger",
      onOk: async () => {
        try {
          const token = await auth.currentUser?.getIdToken();
          const res = await fetch(`/api/motorcycles/${motorcycle.id}`, {
            method: "DELETE",
            headers: { Authorization: `Bearer ${token}` },
          });
          if (!res.ok) throw new Error();
          message.success("Motorcycle deleted successfully");
          fetchMotorcycles();
        } catch {
          message.error("Failed to delete motorcycle");
        }
      },
    });
  };

  // Only metrics we can honestly derive from the current data model.
  const stats = useMemo(() => {
    const now = new Date();
    const addedThisMonth = motorcycles.filter((m) => {
      const d = new Date(m.createdAt);
      return (
        d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear()
      );
    }).length;
    const brands = new Set(motorcycles.map((m) => m.brand)).size;
    const avg =
      motorcycles.length > 0
        ? Math.round(
            motorcycles.reduce((sum, m) => sum + Number(m.price || 0), 0) /
              motorcycles.length
          )
        : 0;
    return [
      { label: "Total inventory", value: motorcycles.length, hint: "live on site" },
      { label: "Added this month", value: addedThisMonth },
      { label: "Brands", value: brands },
      { label: "Avg price", value: `RM ${avg.toLocaleString()}` },
    ];
  }, [motorcycles]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return motorcycles;
    return motorcycles.filter(
      (m) =>
        m.name?.toLowerCase().includes(q) ||
        m.brand?.toLowerCase().includes(q) ||
        m.model?.toLowerCase().includes(q)
    );
  }, [motorcycles, search]);

  return (
    <>
      <AdminTopBar
        title="Listings"
        searchPlaceholder="Search bikes..."
        searchValue={search}
        onSearchChange={setSearch}
        actionLabel="Add bike"
        onAction={onCreateNew}
      />

      <div className={styles.content}>
        <h1 className={styles.pageHeading}>Listings</h1>
        <p className={styles.pageSubtitle}>
          Your motorcycle inventory — what shows on the website.
        </p>

        <div className={styles.statGrid}>
          {stats.map((s) => (
            <div key={s.label} className={styles.statCard}>
              <div className={styles.statLabel}>{s.label}</div>
              <div className={styles.statValueRow}>
                <span className={styles.statValue}>{s.value}</span>
                {s.hint && <span className={styles.statHintMuted}>{s.hint}</span>}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.tableCard}>
          {isMobile ? (
            <div className={styles.mobileList}>
              {loading ? (
                <div className={styles.emptyState}>Loading…</div>
              ) : filtered.length === 0 ? (
                <div className={styles.emptyState}>No motorcycles found.</div>
              ) : (
                filtered.map((m) => (
                  <MobileCard
                    key={m.id}
                    onClick={() => onEdit(m.id)}
                    onEdit={() => onEdit(m.id)}
                    onDelete={() => handleDelete(m)}
                    thumb={<Thumb src={m.imageUrl} alt={m.name} />}
                    pill={
                      <span className={styles.numStrong}>
                        RM {Number(m.price).toLocaleString()}
                      </span>
                    }
                    title={`${m.brand} ${m.name}`}
                    meta={`${m.engineCapacity ? `${m.engineCapacity}cc · ` : ""}${m.year} · ${m.model}`}
                  />
                ))
              )}
            </div>
          ) : (
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Motorcycle</th>
                    <th style={{ width: 120 }}>Year</th>
                    <th style={{ width: 160 }}>Price</th>
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
                      No motorcycles found.
                    </td>
                  </tr>
                ) : (
                  filtered.map((m) => (
                    <tr
                      key={m.id}
                      className={styles.rowClickable}
                      onClick={() => onEdit(m.id)}
                    >
                      <td>
                        <div className={styles.offerCell}>
                          <Thumb src={m.imageUrl} alt={m.name} />
                          <div>
                            <div className={styles.offerTitle}>
                              {m.brand} {m.name}
                            </div>
                            <div className={styles.offerMeta}>
                              {m.engineCapacity ? `${m.engineCapacity}cc · ` : ""}
                              {m.model}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className={styles.muted}>{m.year}</td>
                      <td className={styles.numStrong}>
                        RM {Number(m.price).toLocaleString()}
                      </td>
                      <td style={{ textAlign: "right" }}>
                        <RowMenu
                          onEdit={() => onEdit(m.id)}
                          onDelete={() => handleDelete(m)}
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
