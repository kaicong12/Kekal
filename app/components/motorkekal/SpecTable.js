import { useTranslations } from "next-intl";

const HIDDEN_KEYS = ["color available", "colour available", "color", "colour"];

// Values that are effectively "no data" and shouldn't render as a spec row.
const EMPTY_VALUES = new Set(["-", "–", "—", "n/a", "na", "tbd", "-"]);
const isEmptyValue = (v) =>
  v == null || String(v).trim() === "" || EMPTY_VALUES.has(String(v).trim().toLowerCase());

// Flatten a specification JSON blob that may be either flat ({ key: value })
// or sectioned ({ General: {...}, Performance: {...} }) into [key, value] rows.
function flattenSpec(spec) {
  if (!spec || typeof spec !== "object") return [];
  const rows = [];
  for (const [key, value] of Object.entries(spec)) {
    if (value && typeof value === "object" && !Array.isArray(value)) {
      for (const [k, v] of Object.entries(value)) {
        if (!isEmptyValue(v)) rows.push([k, String(v)]);
      }
    } else if (!isEmptyValue(value)) {
      rows.push([key, String(value)]);
    }
  }
  return rows.filter(([k]) => !HIDDEN_KEYS.includes(k.toLowerCase()));
}

// Comprehensive spec table matching the design's .spec-table. Combines the
// motorcycle's real core fields with any extra specification entries.
const SpecTable = ({ motorcycle }) => {
  const t = useTranslations("mk.detail");

  const coreRows = [
    motorcycle.engine && [t("specEngine"), motorcycle.engine],
    motorcycle.engineCapacity && [t("specCc"), `${motorcycle.engineCapacity} cc`],
    motorcycle.gear && [t("specTransmission"), motorcycle.gear],
    motorcycle.model && [t("specModel"), motorcycle.model],
    motorcycle.year && [t("specYear"), motorcycle.year],
  ].filter(Boolean);

  const extraRows = flattenSpec(motorcycle.specification);

  // De-dupe: don't repeat a spec key already shown in the core rows.
  const seen = new Set(coreRows.map(([k]) => k.toLowerCase()));
  const rows = [
    ...coreRows,
    ...extraRows.filter(([k]) => !seen.has(k.toLowerCase())),
  ];

  if (rows.length === 0) return null;

  return (
    <div className="spec-scroll">
      <table className="spec-table">
        <tbody>
          <tr>
            <th colSpan={2} style={{ paddingTop: 0 }}>
              {t("specifications")}
            </th>
          </tr>
          {rows.map(([key, value], i) => (
            <tr key={`${key}-${i}`}>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SpecTable;
