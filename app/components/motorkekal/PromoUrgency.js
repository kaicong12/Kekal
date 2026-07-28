"use client";
import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";

// Countdown to the promotion's real end (last instant of its final day, MYT).
// Renders nothing when no promotion applies — with no inventory tracking there
// is no honest urgency claim to make when nothing is on offer.
const pad = (n) => String(n).padStart(2, "0");

function remaining(deadline) {
  const total = new Date(deadline).getTime() - Date.now();
  if (total <= 0) return null;
  return {
    total,
    days: Math.floor(total / 86400000),
    hours: Math.floor((total / 3600000) % 24),
    minutes: Math.floor((total / 60000) % 60),
    seconds: Math.floor((total / 1000) % 60),
  };
}

const PromoUrgency = ({ promotion, endsAt, terms }) => {
  const t = useTranslations("mk.promo");
  const locale = useLocale();

  // null on the server and first client paint so the markup matches.
  const [left, setLeft] = useState(null);
  const [expired, setExpired] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  useEffect(() => {
    const update = () => {
      const next = remaining(endsAt);
      setLeft(next);
      setExpired(next === null);
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [endsAt]);

  if (!promotion) return null;
  // The page is statically cached, so a visitor can land on HTML built while the
  // promo was still live. Retire the block rather than sitting at 00:00:00.
  if (expired) return null;

  const display = left ?? { days: 0, hours: 0, minutes: 0, seconds: 0 };
  const isLastDay = left !== null && left.total < 86400000;

  const units = [
    { value: display.days, label: t("days") },
    { value: display.hours, label: t("hours") },
    { value: display.minutes, label: t("minutes") },
    { value: display.seconds, label: t("seconds") },
  ];

  const endLabel = new Date(endsAt).toLocaleDateString(
    locale === "en" ? "en-GB" : locale === "zh" ? "zh-CN" : "ms-MY",
    { day: "numeric", month: "short", year: "numeric" }
  );

  return (
    <div className="urg">
      <div className={`urg-count${isLastDay ? " urg-count--hot" : ""}`}>
        <div className="urg-count__head">
          <span className="urg-dot" />
          {isLastDay ? t("lastDay", { name: promotion.title }) : promotion.title}
        </div>

        <div className="urg-count__grid" suppressHydrationWarning>
          {units.map((unit) => (
            <div key={unit.label}>
              <b>{pad(unit.value)}</b>
              <span>{unit.label}</span>
            </div>
          ))}
        </div>

        <div className="urg-count__foot">{t("validUntil", { date: endLabel })}</div>
      </div>

      {promotion.subtitle ? <p className="urg-note">{promotion.subtitle}</p> : null}

      {terms ? (
        <div className="urg-terms">
          <button
            type="button"
            className="urg-terms__toggle"
            aria-expanded={showTerms}
            onClick={() => setShowTerms((open) => !open)}
          >
            {t("terms")}
            <span aria-hidden="true">{showTerms ? "▴" : "▾"}</span>
          </button>
          {showTerms ? <p className="urg-terms__body">{terms}</p> : null}
        </div>
      ) : null}
    </div>
  );
};

export default PromoUrgency;
