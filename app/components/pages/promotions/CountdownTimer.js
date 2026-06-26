"use client";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import styles from "./Promotions.module.css";

function diff(endDate) {
  const total = new Date(endDate).getTime() - Date.now();
  if (total <= 0) return { total: 0, days: 0, hours: 0, minutes: 0 };
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((total / (1000 * 60)) % 60);
  return { total, days, hours, minutes };
}

const pad = (n) => String(n).padStart(2, "0");

export default function CountdownTimer({ endDate }) {
  const t = useTranslations("promotions");
  // Start null so server and first client render match (avoids hydration mismatch).
  const [time, setTime] = useState(null);

  useEffect(() => {
    setTime(diff(endDate));
    const id = setInterval(() => setTime(diff(endDate)), 1000 * 30);
    return () => clearInterval(id);
  }, [endDate]);

  const display = time ?? { days: 0, hours: 0, minutes: 0 };

  const units = [
    { value: display.days, label: t("days") },
    { value: display.hours, label: t("hrs") },
    { value: display.minutes, label: t("min") },
  ];

  return (
    <div className={styles.countdown} suppressHydrationWarning>
      {units.map((unit) => (
        <div key={unit.label} className={styles.countdownUnit}>
          <span className={styles.countdownValue}>{pad(unit.value)}</span>
          <span className={styles.countdownLabel}>{unit.label}</span>
        </div>
      ))}
    </div>
  );
}
