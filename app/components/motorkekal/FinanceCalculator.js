"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { waLink } from "./waLink";

const TERMS = [2, 3, 4, 5];
const ANNUAL_RATE = 3.5; // flat rate used across the storefront

// Estimate the monthly instalment with a reducing-balance formula, matching
// the legacy LoanCalculator so figures stay consistent site-wide.
function monthly(price, downPct, years) {
  const principal = (price * (100 - downPct)) / 100;
  const r = ANNUAL_RATE / 12 / 100;
  const n = years * 12;
  if (r === 0) return principal / n;
  return (principal * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);
}

// Finance calculator rendered in the design's .finance-box. Reused across
// the redesigned storefront detail page.
const FinanceCalculator = ({ motorcycle }) => {
  const t = useTranslations("loanCalculator");
  const td = useTranslations("mk.detail");
  const price = Math.round(Number(motorcycle.price)) || 0;

  // Down payment in RM is the source of truth (raw digits only; the input
  // renders it with thousand separators). The % slider reads/writes it too.
  const [downRaw, setDownRaw] = useState(
    price ? String(Math.round(price * 0.1)) : ""
  );
  const [years, setYears] = useState(5);

  const downAmount = Number(downRaw) || 0;
  const downPct = price > 0 ? (downAmount / price) * 100 : 0;
  const pctLabel = Math.round(downPct);

  const payment = useMemo(
    () => Math.round(monthly(price, downPct, years)),
    [price, downPct, years]
  );
  const financed = Math.max(price - downAmount, 0);

  const fmt = (n) => `RM ${Math.round(n).toLocaleString("en-MY")}`;

  const setDownFromInput = (raw) => {
    let n = Number(raw.replace(/\D/g, "").slice(0, 7)) || 0;
    if (price > 0 && n > price) n = price; // can't put down more than the bike
    setDownRaw(n ? String(n) : "");
  };

  const waMessage = `Hi Motor Kekal, saya nak kira ansuran ${motorcycle.brand} ${motorcycle.name} (${fmt(price)}). Deposit ${pctLabel}% (${fmt(downAmount)}), ${years} tahun. Boleh bagi kadar sebenar?`;

  return (
    <div className="finance-box">
      <div className="finance-box__form">
        <div className="field">
          <label htmlFor="finance-down">
            {t("downPayment", { percent: pctLabel })}
          </label>
          <div className="amount-input">
            <span>RM</span>
            <input
              id="finance-down"
              type="text"
              inputMode="numeric"
              autoComplete="off"
              placeholder={price ? Math.round(price * 0.1).toLocaleString("en-MY") : "0"}
              value={downRaw ? Number(downRaw).toLocaleString("en-MY") : ""}
              onChange={(e) => setDownFromInput(e.target.value)}
            />
          </div>
          <input
            type="range"
            min="5"
            max="50"
            step="1"
            aria-label={t("downPayment", { percent: pctLabel })}
            style={{ marginTop: 10 }}
            value={Math.min(Math.max(pctLabel, 5), 50)}
            onChange={(e) =>
              setDownRaw(
                String(Math.round((price * Number(e.target.value)) / 100))
              )
            }
          />
        </div>

        <div className="field" style={{ marginBottom: 0 }}>
          <label>{t("loanTerm")}</label>
          <div className="term-buttons">
            {TERMS.map((y) => (
              <button
                key={y}
                type="button"
                aria-pressed={years === y}
                onClick={() => setYears(y)}
              >
                {y * 12}m
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="finance-box__out">
        <span>{t("estimatedMonthly")}</span>
        <b>{fmt(payment)}</b>
        <span style={{ marginTop: 10 }}>
          {t("months", { count: years * 12 })} · {fmt(financed)}
        </span>
        <a
          className="btn btn--wa btn--lg"
          style={{ marginTop: 20 }}
          href={waLink(waMessage)}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("apply")}
        </a>
        <p className="muted" style={{ fontSize: 12, marginTop: 12, color: "rgba(255,255,255,0.6)" }}>
          {t("disclaimer")}
        </p>
      </div>
    </div>
  );
};

export default FinanceCalculator;
