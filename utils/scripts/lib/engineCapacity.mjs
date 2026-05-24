// Source of truth for engineCapacity: prefer specification.Performance.Displacement
// over the listing CC field, because the listing CC has been observed to contain
// truncated or incorrect values (e.g. "1" instead of "117").
//
// Returns the resolved integer CC, or `fallback` if neither source is parsable.
export function resolveEngineCapacity(specification, fallback = 0) {
  const raw = specification?.Performance?.Displacement;
  if (typeof raw === "string" && raw.trim() && raw.trim() !== "–") {
    const num = parseFloat(raw);
    if (!isNaN(num) && num > 0) return Math.round(num);
  }
  const fb = Number(fallback);
  return Number.isFinite(fb) && fb > 0 ? Math.round(fb) : 0;
}
