import { useTranslations } from "next-intl";

// Compact 4-up spec strip below the gallery. Only renders items that are
// actually present on the motorcycle record — never fabricated values.
const EngineIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 8v4l3 2" strokeLinecap="round" />
  </svg>
);
const GearIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M7 8l-4 4 4 4M17 8l4 4-4 4M14 4l-4 16" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const BoltIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M13 2L3 14h7l-1 8 10-12h-7z" strokeLinejoin="round" />
  </svg>
);
const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <rect x="3" y="4" width="18" height="17" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" />
  </svg>
);

const QuickSpec = ({ motorcycle }) => {
  const t = useTranslations("mk.detail");

  const items = [];
  if (motorcycle.engineCapacity) {
    items.push({
      icon: <EngineIcon />,
      value: `${motorcycle.engineCapacity} cc`,
      label: t("specCc"),
    });
  }
  if (motorcycle.gear) {
    items.push({ icon: <GearIcon />, value: motorcycle.gear, label: t("specTransmission") });
  }
  if (motorcycle.engine) {
    items.push({ icon: <BoltIcon />, value: motorcycle.engine, label: t("specEngine") });
  }
  if (motorcycle.year) {
    items.push({ icon: <CalendarIcon />, value: motorcycle.year, label: t("specYear") });
  }

  if (items.length === 0) return null;

  return (
    <div className="quickspec">
      {items.map((it) => (
        <div key={it.label} className="card quickspec__item">
          {it.icon}
          <b>{it.value}</b>
          <span>{it.label}</span>
        </div>
      ))}
    </div>
  );
};

export default QuickSpec;
