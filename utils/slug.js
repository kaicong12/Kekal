export function toMotorcycleSlug(motorcycle) {
  const base = `${motorcycle.brand}-${motorcycle.name}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  return `${base}-${motorcycle.id}`;
}

export function extractIdFromSlug(slug) {
  // CUIDs are 25 characters, always at the end after the last hyphen group
  const match = slug.match(/([a-z0-9]{25})$/);
  return match ? match[1] : null;
}
