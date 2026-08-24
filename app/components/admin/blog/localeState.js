import { flattenTiptapText } from "@/utils/tiptapText";

export const LOCALE_LABELS = { en: "English", ms: "Bahasa Malaysia", zh: "中文" };

const hasContent = (values, doc) =>
  Boolean(String(values?.title || "").trim()) || Boolean(flattenTiptapText(doc));

// missing  — nothing saved and nothing typed
// dirty    — unsaved local edits
// stale    — saved, but the source locale has been edited since
// complete — saved and up to date
export function deriveLocaleState({ locale, saved, sourceSaved, values, doc, dirty }) {
  if (dirty) return "dirty";
  if (!saved) return hasContent(values, doc) ? "dirty" : "missing";
  if (
    sourceSaved &&
    locale !== sourceSaved.locale &&
    new Date(saved.updatedAt) < new Date(sourceSaved.updatedAt)
  ) {
    return "stale";
  }
  return "complete";
}

export const STATE_LABELS = {
  missing: "Not translated",
  dirty: "Unsaved changes",
  stale: "Source changed since",
  complete: "Up to date",
};
