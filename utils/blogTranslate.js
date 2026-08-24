// Only a flat list of { i, t } strings is sent, so a bad response can leave
// segments untranslated but can never corrupt the document structure.
// `fetchImpl` and `apiKey` are injectable for tests.
import { applyTextSegments, extractTextSegments } from "./tiptapText.js";
import {
  MAX_META_DESCRIPTION_LENGTH,
  MAX_META_TITLE_LENGTH,
} from "./blogContent.js";

export const DEFAULT_TRANSLATE_MODEL = "gemini-3.5-flash-lite";

const LOCALE_NAMES = {
  en: "English",
  ms: "Bahasa Malaysia, as written for a Malaysian audience",
  zh: "Simplified Chinese",
};

// Split so one response can't be truncated mid-list.
const MAX_SEGMENTS_PER_CALL = 150;
const MAX_TRANSLATABLE_CHARS = 120000;

export class TranslateError extends Error {
  constructor(message, { status = 502, retryable = false } = {}) {
    super(message);
    this.name = "TranslateError";
    this.status = status;
    this.retryable = retryable;
  }
}

const SEGMENT_SCHEMA = {
  type: "object",
  properties: {
    i: { type: "integer" },
    t: { type: "string" },
  },
  required: ["i", "t"],
};

const systemInstruction = (targetLocale) => `
You are a professional translator for a Malaysian motorcycle dealership's blog.

Translate every value of "t" into ${LOCALE_NAMES[targetLocale] || targetLocale}.

Rules, all mandatory:
- Return exactly one entry for every input entry, with the SAME "i" value. Never
  merge, split, reorder, add or drop entries.
- Translate ONLY the "t" values. Never translate or alter a URL.
- Leave motorcycle brand and model names exactly as written (Yamaha, Honda,
  Y15ZR, R15, NVX, RS-X). Leave prices, "RM", "cc", and specification figures as
  written.
- A segment may be a sentence fragment because formatting splits it. Translate
  the fragment as-is; do not add words to make it a full sentence.
- Preserve leading and trailing spaces exactly as they appear in the input.
- Keep the natural register of a motorcycle enthusiast writing for buyers.
- "metaTitle" must be at most ${MAX_META_TITLE_LENGTH} characters and
  "metaDescription" at most ${MAX_META_DESCRIPTION_LENGTH} characters. Rewrite to
  fit rather than exceeding the limit.
`.trim();

async function callGemini({ prompt, schema, model, apiKey, fetchImpl, signal }) {
  let response;
  try {
    response = await fetchImpl(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": apiKey,
        },
        signal,
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            responseMimeType: "application/json",
            responseSchema: schema,
            temperature: 0,
          },
        }),
      }
    );
  } catch (error) {
    throw new TranslateError(`Could not reach the translation service: ${error.message}`, {
      status: 502,
      retryable: true,
    });
  }

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    const retryable = response.status === 429 || response.status >= 500;
    throw new TranslateError(
      `Translation service returned ${response.status}${detail ? `: ${detail.slice(0, 300)}` : ""}`,
      { status: retryable ? 502 : 400, retryable }
    );
  }

  const payload = await response.json().catch(() => null);
  const candidate = payload?.candidates?.[0];

  if (candidate?.finishReason && !["STOP", "MAX_TOKENS"].includes(candidate.finishReason)) {
    throw new TranslateError(
      `Translation stopped early (${candidate.finishReason}). Try rephrasing the article.`,
      { status: 502 }
    );
  }

  // Parts can include non-text entries (thought signatures).
  const text = (candidate?.content?.parts || [])
    .map((part) => part?.text)
    .filter((value) => typeof value === "string")
    .join("");

  if (!text) {
    throw new TranslateError("Translation service returned an empty response", {
      status: 502,
      retryable: true,
    });
  }

  try {
    return JSON.parse(text);
  } catch {
    throw new TranslateError("Translation service returned malformed JSON", {
      status: 502,
      retryable: true,
    });
  }
}

const chunk = (items, size) => {
  const out = [];
  for (let i = 0; i < items.length; i += size) out.push(items.slice(i, i + size));
  return out;
};

// Untranslated segments keep their source text and are reported in `warnings`,
// so the author gets a reviewable draft rather than a failure.
export async function translateBlogContent({
  targetLocale,
  title,
  excerpt,
  metaTitle,
  metaDescription,
  body,
  apiKey = process.env.GEMINI_API_KEY,
  model = process.env.GEMINI_TRANSLATE_MODEL || DEFAULT_TRANSLATE_MODEL,
  fetchImpl = globalThis.fetch,
  signal,
}) {
  if (!apiKey) {
    throw new TranslateError(
      "Translation is not configured: GEMINI_API_KEY is missing",
      { status: 503 }
    );
  }

  const segments = extractTextSegments(body);
  const totalChars = segments.reduce((sum, s) => sum + s.text.length, 0);
  if (totalChars > MAX_TRANSLATABLE_CHARS) {
    throw new TranslateError(
      `This article is too long to translate in one go (${totalChars} characters). Split it into shorter posts.`,
      { status: 413 }
    );
  }

  const warnings = [];
  const translated = new Map();
  let scalars = {};

  const batches = chunk(segments, MAX_SEGMENTS_PER_CALL);

  for (const [index, batch] of batches.entries()) {
    // Scalars ride with the first batch so the model sees the article opening.
    const wantsScalars = index === 0;

    const schema = {
      type: "object",
      properties: {
        ...(wantsScalars
          ? {
              title: { type: "string" },
              excerpt: { type: "string" },
              metaTitle: { type: "string" },
              metaDescription: { type: "string" },
            }
          : {}),
        segments: { type: "array", items: SEGMENT_SCHEMA },
      },
      required: [...(wantsScalars ? ["title", "excerpt"] : []), "segments"],
    };

    const prompt = [
      systemInstruction(targetLocale),
      "",
      "Input:",
      JSON.stringify({
        ...(wantsScalars
          ? {
              title: title ?? "",
              excerpt: excerpt ?? "",
              metaTitle: metaTitle || title || "",
              metaDescription: metaDescription || excerpt || "",
            }
          : {}),
        segments: batch.map((s) => ({ i: s.i, t: s.text })),
      }),
    ].join("\n");

    const result = await callGemini({ prompt, schema, model, apiKey, fetchImpl, signal });

    for (const entry of result?.segments || []) {
      if (Number.isInteger(entry?.i) && typeof entry?.t === "string") {
        translated.set(entry.i, entry.t);
      }
    }

    if (wantsScalars) {
      scalars = {
        title: result?.title,
        excerpt: result?.excerpt,
        metaTitle: result?.metaTitle,
        metaDescription: result?.metaDescription,
      };
    }

    // Retry only what this batch omitted, not the whole article.
    const missing = batch.filter((s) => !translated.has(s.i));
    if (missing.length) {
      const retry = await callGemini({
        prompt: [
          systemInstruction(targetLocale),
          "",
          `Your previous response omitted ${missing.length} entries. Return ONLY these, with the same "i" values:`,
          JSON.stringify({ segments: missing.map((s) => ({ i: s.i, t: s.text })) }),
        ].join("\n"),
        schema: {
          type: "object",
          properties: { segments: { type: "array", items: SEGMENT_SCHEMA } },
          required: ["segments"],
        },
        model,
        apiKey,
        fetchImpl,
        signal,
      }).catch(() => null);

      for (const entry of retry?.segments || []) {
        if (Number.isInteger(entry?.i) && typeof entry?.t === "string") {
          translated.set(entry.i, entry.t);
        }
      }
    }
  }

  const applied = applyTextSegments(
    body,
    [...translated.entries()].map(([i, text]) => ({ i, text }))
  );

  if (applied.missing.length) {
    warnings.push(
      `${applied.missing.length} of ${applied.expected} text segments kept their original wording — review before publishing.`
    );
  }

  const clampedMetaTitle = (scalars.metaTitle || "").trim();
  const clampedMetaDescription = (scalars.metaDescription || "").trim();

  if (clampedMetaTitle.length > MAX_META_TITLE_LENGTH) {
    warnings.push("The translated meta title was shortened to fit Google's limit.");
  }
  if (clampedMetaDescription.length > MAX_META_DESCRIPTION_LENGTH) {
    warnings.push("The translated meta description was shortened to fit Google's limit.");
  }

  return {
    title: (scalars.title || "").trim() || title,
    excerpt: (scalars.excerpt || "").trim() || excerpt,
    metaTitle: clampedMetaTitle.slice(0, MAX_META_TITLE_LENGTH) || null,
    metaDescription:
      clampedMetaDescription.slice(0, MAX_META_DESCRIPTION_LENGTH) || null,
    body: applied.doc,
    warnings,
  };
}
