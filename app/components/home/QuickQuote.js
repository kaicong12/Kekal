"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./QuickQuote.module.css";

const BUDGET_OPTIONS = [
  { label: "< RM 8k", maxPrice: 8000 },
  { label: "RM 8–15k", maxPrice: 15000, minPrice: 8000 },
  { label: "RM 15–30k", maxPrice: 30000, minPrice: 15000 },
  { label: "RM 30k+", minPrice: 30000 },
];

const LICENSE_OPTIONS = [
  { label: "All" },
  { label: "B Full", minCC: 500 },
  { label: "B2", maxCC: 500 },
];

function buildFilterParams(budget, license) {
  const params = new URLSearchParams();
  if (budget) {
    if (budget.maxPrice) params.set("maxPrice", budget.maxPrice);
    if (budget.minPrice) params.set("minPrice", budget.minPrice);
  }
  if (license) {
    if (license.minCC) params.set("minCC", license.minCC);
    if (license.maxCC) params.set("maxCC", license.maxCC);
  }
  return params;
}

export default function QuickQuote() {
  const router = useRouter();
  const [selectedBudget, setSelectedBudget] = useState(null);
  const [selectedLicense, setSelectedLicense] = useState(0);
  const [matchCount, setMatchCount] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedBudget === null) {
      setMatchCount(null);
      return;
    }

    const fetchCount = async () => {
      setLoading(true);
      const params = buildFilterParams(
        BUDGET_OPTIONS[selectedBudget],
        LICENSE_OPTIONS[selectedLicense]
      );

      try {
        const res = await fetch(`/api/motorcycles/count?${params.toString()}`);
        const data = await res.json();
        setMatchCount(data.count ?? 0);
      } catch {
        setMatchCount(0);
      } finally {
        setLoading(false);
      }
    };

    fetchCount();
  }, [selectedBudget, selectedLicense]);

  const handleSeeMatches = () => {
    const params = buildFilterParams(
      selectedBudget !== null ? BUDGET_OPTIONS[selectedBudget] : null,
      LICENSE_OPTIONS[selectedLicense]
    );
    router.push(`/listing?${params.toString()}`);
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.headerLabel}>QUICK QUOTE · 30 SEC</span>
      </div>

      <div className={styles.section}>
        <p className={styles.stepLabel}>BUDGET</p>
        <div className={styles.chipRow}>
          {BUDGET_OPTIONS.map((opt, i) => (
            <button
              key={opt.label}
              onClick={() => setSelectedBudget(i === selectedBudget ? null : i)}
              className={`${styles.chip} ${selectedBudget === i ? styles.chipActive : ""}`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <p className={styles.stepLabel}>LICENSE</p>
        <div className={styles.chipRow}>
          {LICENSE_OPTIONS.map((opt, i) => (
            <button
              key={opt.label}
              onClick={() => setSelectedLicense(i)}
              className={`${styles.chip} ${selectedLicense === i ? styles.chipActive : ""}`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={handleSeeMatches}
        disabled={selectedBudget === null}
        className={styles.ctaButton}
      >
        {loading
          ? "Counting..."
          : matchCount !== null
          ? `See ${matchCount} matches →`
          : "See matches →"}
      </button>
    </div>
  );
}
