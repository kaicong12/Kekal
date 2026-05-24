"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";
import styles from "./FilterPills.module.css";

function formatRM(amount) {
  const n = Number(amount);
  if (!Number.isFinite(n)) return amount;
  return n >= 1000 ? `RM ${(n / 1000).toFixed(0)}k` : `RM ${n}`;
}

function budgetLabel(minPrice, maxPrice) {
  if (minPrice && maxPrice) return `${formatRM(minPrice)} – ${formatRM(maxPrice)}`;
  if (maxPrice) return `Under ${formatRM(maxPrice)}`;
  if (minPrice) return `${formatRM(minPrice)}+`;
  return null;
}

function licenseLabel(minCC, maxCC) {
  // Recognize the QuickQuote conventions: B Full ≥500cc, B2 <500cc
  if (minCC === "500" && !maxCC) return "B Full (≥500cc)";
  if (maxCC === "500" && !minCC) return "B2 (<500cc)";
  if (minCC && maxCC) return `${minCC}–${maxCC}cc`;
  if (minCC) return `${minCC}cc+`;
  if (maxCC) return `Under ${maxCC}cc`;
  return null;
}

export default function FilterPills() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const minPrice = searchParams.get("minPrice");
  const maxPrice = searchParams.get("maxPrice");
  const minCC = searchParams.get("minCC");
  const maxCC = searchParams.get("maxCC");

  const pills = useMemo(() => {
    const list = [];
    const budget = budgetLabel(minPrice, maxPrice);
    if (budget) {
      list.push({
        key: "budget",
        label: `Budget: ${budget}`,
        clearKeys: ["minPrice", "maxPrice"],
      });
    }
    const license = licenseLabel(minCC, maxCC);
    if (license) {
      list.push({
        key: "license",
        label: `License: ${license}`,
        clearKeys: ["minCC", "maxCC"],
      });
    }
    return list;
  }, [minPrice, maxPrice, minCC, maxCC]);

  if (pills.length === 0) return null;

  const buildHrefWithoutKeys = (keys) => {
    const next = new URLSearchParams(searchParams.toString());
    keys.forEach((k) => next.delete(k));
    const qs = next.toString();
    return qs ? `?${qs}` : "";
  };

  const removePill = (keys) => {
    router.replace(`/listing${buildHrefWithoutKeys(keys)}`, { scroll: false });
  };

  const clearAll = () => {
    const allKeys = pills.flatMap((p) => p.clearKeys);
    removePill(allKeys);
  };

  return (
    <div className={styles.row} aria-label="Active filters">
      <span className={styles.label}>From Quick Quote:</span>
      {pills.map((pill) => (
        <span key={pill.key} className={styles.pill}>
          <span className={styles.pillText}>{pill.label}</span>
          <button
            type="button"
            onClick={() => removePill(pill.clearKeys)}
            className={styles.close}
            aria-label={`Remove ${pill.label}`}
          >
            ×
          </button>
        </span>
      ))}
      {pills.length > 1 && (
        <button type="button" onClick={clearAll} className={styles.clearAll}>
          Clear all
        </button>
      )}
    </div>
  );
}
