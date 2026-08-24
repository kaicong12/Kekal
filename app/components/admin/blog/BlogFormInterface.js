"use client";
import { useState, useEffect, useMemo, useRef } from "react";
import { Form, Input, Select, message, Spin, Tooltip } from "antd";
import {
  ArrowLeftOutlined,
  PlusOutlined,
  DeleteOutlined,
  TranslationOutlined,
} from "@ant-design/icons";
import { auth } from "@/utils/firebase";
import { StatusPill } from "../adminUi";
import BlogEditor from "./BlogEditor";
import BlogBody from "@/app/components/blog/BlogBody";
import SerpPreview from "./SerpPreview";
import { deriveLocaleState, LOCALE_LABELS, STATE_LABELS } from "./localeState";
import { BLOG_CATEGORIES, BLOG_LOCALES } from "@/utils/blogContent";
import { EMPTY_DOC } from "@/utils/tiptapSchema";
import { slugify } from "@/utils/blogPayload";
import { flattenTiptapText } from "@/utils/tiptapText";
import { uploadBlogImage } from "@/utils/blogImageUpload";
import styles from "../admin.module.css";
import blogStyles from "./blogEditor.module.css";

const { TextArea } = Input;

const STATUSES = [
  { key: "PUBLISHED", pill: "published", label: "Published", desc: "Live on the site" },
  { key: "DRAFT", pill: "draft", label: "Draft", desc: "Hidden from the public" },
];

const emptyDocs = () =>
  Object.fromEntries(BLOG_LOCALES.map((locale) => [locale, null]));

export default function BlogFormInterface({ postId, onBack }) {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [translating, setTranslating] = useState(null);
  const [uploading, setUploading] = useState(false);

  const [docs, setDocs] = useState(emptyDocs);
  // Bumped whenever a doc is replaced from outside the editor (load, translate,
  // undo) so the editor reloads it. Keystrokes never bump it, so typing is safe.
  const [docVersion, setDocVersion] = useState(0);
  const [coverImageUrl, setCoverImageUrl] = useState(null);
  const [status, setStatus] = useState("DRAFT");
  const [sourceLocale, setSourceLocale] = useState("en");
  const [activeLocale, setActiveLocale] = useState("en");
  const [showPreview, setShowPreview] = useState(false);
  const [slugTouched, setSlugTouched] = useState(Boolean(postId));
  const [saved, setSaved] = useState({});
  const [dirty, setDirty] = useState({});
  const preTranslate = useRef(null);

  const isEdit = !!postId;

  const watchedSlug = Form.useWatch("slug", form);
  const watchedTranslations = Form.useWatch("translations", form);
  const activeValues = watchedTranslations?.[activeLocale] || {};

  useEffect(() => {
    if (!isEdit) return;

    const load = async () => {
      setLoading(true);
      try {
        const token = await auth.currentUser?.getIdToken();
        const res = await fetch(`/api/blog-posts/${postId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error();
        const data = await res.json();

        const translations = {};
        const nextDocs = emptyDocs();
        for (const locale of BLOG_LOCALES) {
          const t = data.translations?.[locale];
          if (!t) continue;
          translations[locale] = {
            title: t.title,
            excerpt: t.excerpt,
            metaTitle: t.metaTitle || "",
            metaDescription: t.metaDescription || "",
          };
          nextDocs[locale] = t.body;
        }

        form.setFieldsValue({
          slug: data.slug,
          category: data.category,
          tags: (data.tags || []).join(", "),
          translations,
        });
        setDocs(nextDocs);
        setDocVersion((v) => v + 1);
        setSaved(data.translations || {});
        setCoverImageUrl(data.coverImageUrl || null);
        setStatus(data.status);
        setSourceLocale(data.sourceLocale);
        setActiveLocale(data.sourceLocale);
      } catch {
        message.error("Failed to load post");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [postId, isEdit, form]);

  const localeStates = useMemo(
    () =>
      Object.fromEntries(
        BLOG_LOCALES.map((locale) => [
          locale,
          deriveLocaleState({
            locale,
            saved: saved[locale],
            sourceSaved: saved[sourceLocale]
              ? { ...saved[sourceLocale], locale: sourceLocale }
              : null,
            values: watchedTranslations?.[locale],
            doc: docs[locale],
            dirty: dirty[locale],
          }),
        ])
      ),
    [saved, sourceLocale, watchedTranslations, docs, dirty]
  );

  const markDirty = (locale) =>
    setDirty((prev) => (prev[locale] ? prev : { ...prev, [locale]: true }));

  const handleSourceTitleChange = (event) => {
    markDirty(activeLocale);
    if (slugTouched || activeLocale !== sourceLocale) return;
    // slugify() returns "" for non-latin scripts, so a zh-sourced post keeps an
    // empty slug and the author fills it in by hand.
    const next = slugify(event.target.value);
    if (next) form.setFieldValue("slug", next);
  };

  const handleCoverUpload = async (event) => {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;
    setUploading(true);
    try {
      setCoverImageUrl(await uploadBlogImage(file, postId || "new"));
      message.success("Image uploaded");
    } catch {
      message.error("Failed to upload image");
    } finally {
      setUploading(false);
    }
  };

  const handleTranslate = async (targetLocale) => {
    if (!isEdit) {
      message.warning("Save the post first, then translate");
      return;
    }
    if (localeStates[sourceLocale] === "dirty") {
      message.warning(`Save your ${LOCALE_LABELS[sourceLocale]} changes first`);
      return;
    }

    setTranslating(targetLocale);
    try {
      const token = await auth.currentUser?.getIdToken();
      const res = await fetch(`/api/blog-posts/${postId}/translate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ sourceLocale, targetLocales: [targetLocale] }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Translation failed");

      const result = data.translations?.[targetLocale];
      if (!result) throw new Error("Translation returned no content");

      // Kept so "Undo translate" can restore the previous draft before saving.
      preTranslate.current = {
        locale: targetLocale,
        values: form.getFieldValue(["translations", targetLocale]),
        doc: docs[targetLocale],
      };

      form.setFieldValue(["translations", targetLocale], {
        title: result.title,
        excerpt: result.excerpt,
        metaTitle: result.metaTitle || "",
        metaDescription: result.metaDescription || "",
      });
      setDocs((prev) => ({ ...prev, [targetLocale]: result.body }));
      setDocVersion((v) => v + 1);
      markDirty(targetLocale);
      setActiveLocale(targetLocale);

      if (data.warnings?.length) {
        data.warnings.forEach((warning) => message.warning(warning.message));
      }
      message.success("Draft translation filled in — review it, then save");
    } catch (error) {
      message.error(error.message);
    } finally {
      setTranslating(null);
    }
  };

  const undoTranslate = () => {
    const snapshot = preTranslate.current;
    if (!snapshot) return;
    form.setFieldValue(["translations", snapshot.locale], snapshot.values);
    setDocs((prev) => ({ ...prev, [snapshot.locale]: snapshot.doc }));
    setDocVersion((v) => v + 1);
    preTranslate.current = null;
    message.info("Reverted to the previous version");
  };

  const handleSubmit = async (values) => {
    const translations = {};
    for (const locale of BLOG_LOCALES) {
      const entry = values.translations?.[locale] || {};
      const doc = docs[locale];
      const hasContent =
        String(entry.title || "").trim() || flattenTiptapText(doc);
      if (!hasContent) continue;
      translations[locale] = {
        title: entry.title || "",
        excerpt: entry.excerpt || "",
        metaTitle: entry.metaTitle || "",
        metaDescription: entry.metaDescription || "",
        body: doc || EMPTY_DOC,
      };
    }

    if (!translations[sourceLocale]) {
      message.error(`Add content in ${LOCALE_LABELS[sourceLocale]} before saving`);
      setActiveLocale(sourceLocale);
      return;
    }

    setSubmitting(true);
    try {
      const token = await auth.currentUser?.getIdToken();
      const res = await fetch(
        isEdit ? `/api/blog-posts/${postId}` : "/api/blog-posts",
        {
          method: isEdit ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            slug: values.slug,
            category: values.category,
            tags: values.tags || null,
            coverImageUrl: coverImageUrl || null,
            status,
            sourceLocale,
            translations,
          }),
        }
      );

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Failed to save post");
      }

      message.success(isEdit ? "Post updated successfully" : "Post created successfully");
      onBack();
    } catch (error) {
      message.error(error.message);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: 80 }}>
        <Spin size="large" />
      </div>
    );
  }

  const sourceTitle = watchedTranslations?.[sourceLocale]?.title;
  const activeIsSource = activeLocale === sourceLocale;

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleSubmit}
      className={styles.adminForm}
      initialValues={{ category: "reviews", translations: {} }}
    >
      <div className={styles.formTopbar}>
        <div className={styles.breadcrumb}>
          <button type="button" className={styles.breadcrumbLink} onClick={onBack}>
            Blog
          </button>
          <span>›</span>
          <span className={styles.breadcrumbCurrent}>
            {isEdit ? "Edit post" : "New post"}
          </span>
        </div>
        <span className={styles.topbarSpacer} />
        <button type="button" className={styles.ghostBtn} onClick={onBack}>
          Discard
        </button>
        <button
          type="submit"
          className={styles.primaryBtn}
          disabled={submitting || uploading || Boolean(translating)}
        >
          {submitting ? "Saving…" : "Save changes"}
        </button>
      </div>

      <div className={styles.content}>
        <div className={styles.formHeader}>
          <button type="button" className={styles.backBtn} onClick={onBack}>
            <ArrowLeftOutlined />
          </button>
          <div>
            <h1 className={styles.formTitle}>
              {sourceTitle || "New post"}
              <StatusPill
                statusKey={STATUSES.find((s) => s.key === status)?.pill}
                label={STATUSES.find((s) => s.key === status)?.label}
              />
            </h1>
          </div>
        </div>

        <div className={styles.formLayout}>
          <div className={styles.formMain}>
            <div className={styles.panel}>
              <div className={styles.panelTitle}>
                Content
                <span className={styles.panelHint}>
                  Writing in {LOCALE_LABELS[activeLocale]}
                  {activeIsSource ? " (source)" : ""}
                </span>
              </div>

              <div className={blogStyles.localeTabs} style={{ marginBottom: 16 }}>
                {BLOG_LOCALES.map((locale) => (
                  <button
                    key={locale}
                    type="button"
                    className={`${blogStyles.localeTab} ${
                      activeLocale === locale ? blogStyles.localeTabActive : ""
                    }`}
                    onClick={() => setActiveLocale(locale)}
                  >
                    <span
                      className={`${blogStyles.dot} ${
                        localeStates[locale] === "complete"
                          ? blogStyles.dotComplete
                          : localeStates[locale] === "stale"
                          ? blogStyles.dotStale
                          : localeStates[locale] === "dirty"
                          ? blogStyles.dotDirty
                          : ""
                      }`}
                    />
                    {LOCALE_LABELS[locale]}
                  </button>
                ))}
                <span style={{ flex: 1 }} />
                <button
                  type="button"
                  className={styles.ghostBtn}
                  onClick={() => setShowPreview((v) => !v)}
                >
                  {showPreview ? "Edit" : "Preview"}
                </button>
              </div>

              {BLOG_LOCALES.map((locale) => (
                <div
                  key={locale}
                  style={{ display: locale === activeLocale ? "block" : "none" }}
                >
                  <Form.Item
                    name={["translations", locale, "title"]}
                    label="Title"
                    rules={
                      locale === sourceLocale
                        ? [{ required: true, message: "Title is required" }]
                        : []
                    }
                  >
                    <Input
                      placeholder="e.g. 2025 Yamaha R15 — is it worth the upgrade?"
                      onChange={
                        locale === sourceLocale
                          ? handleSourceTitleChange
                          : () => markDirty(locale)
                      }
                    />
                  </Form.Item>

                  <Form.Item
                    name={["translations", locale, "excerpt"]}
                    label="Excerpt"
                    tooltip="One or two sentences. Shown on the blog index and used as the fallback meta description."
                    rules={
                      locale === sourceLocale
                        ? [{ required: true, message: "Excerpt is required" }]
                        : []
                    }
                  >
                    <TextArea
                      rows={2}
                      placeholder="Short summary of the post…"
                      onChange={() => markDirty(locale)}
                    />
                  </Form.Item>
                </div>
              ))}

              <div className={styles.field}>
                <div className={styles.fieldLabel}>Body</div>
                {showPreview ? (
                  <div className="mk-site">
                    <div className="prose" style={{ marginTop: 0 }}>
                      <BlogBody doc={docs[activeLocale]} />
                    </div>
                  </div>
                ) : (
                  <BlogEditor
                    doc={docs[activeLocale]}
                    docKey={`${activeLocale}#${docVersion}`}
                    postId={postId}
                    onChange={(next) => {
                      setDocs((prev) => ({ ...prev, [activeLocale]: next }));
                      markDirty(activeLocale);
                    }}
                  />
                )}
              </div>
            </div>

            <div className={styles.panel}>
              <div className={styles.panelTitle}>
                Search appearance
                <span className={styles.panelHint}>
                  Leave blank to use the title and excerpt
                </span>
              </div>
              {BLOG_LOCALES.map((locale) => (
                <div
                  key={locale}
                  style={{ display: locale === activeLocale ? "block" : "none" }}
                >
                  <Form.Item
                    name={["translations", locale, "metaTitle"]}
                    label="Meta title"
                  >
                    <Input
                      placeholder="Defaults to the post title"
                      onChange={() => markDirty(locale)}
                    />
                  </Form.Item>
                  <Form.Item
                    name={["translations", locale, "metaDescription"]}
                    label="Meta description"
                  >
                    <TextArea
                      rows={2}
                      placeholder="Defaults to the excerpt"
                      onChange={() => markDirty(locale)}
                    />
                  </Form.Item>
                </div>
              ))}
              <SerpPreview
                slug={watchedSlug}
                post={{
                  ...activeValues,
                  body: docs[activeLocale],
                }}
              />
            </div>

            <div className={styles.panel}>
              <div className={styles.panelTitle}>
                Cover image
                <span className={styles.panelHint}>Used on the index and when shared</span>
              </div>
              <div className={styles.mediaRow}>
                {coverImageUrl && (
                  <div className={styles.mediaTile} style={{ width: 220 }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={coverImageUrl} alt="Cover" />
                    <div className={styles.mediaOverlay}>
                      <button
                        type="button"
                        className={styles.mediaBtn}
                        onClick={() => setCoverImageUrl(null)}
                      >
                        <DeleteOutlined />
                      </button>
                    </div>
                  </div>
                )}
                <label
                  className={`${styles.mediaTile} ${styles.mediaAdd}`}
                  style={{ width: 220 }}
                >
                  <PlusOutlined />
                  {uploading
                    ? "Uploading…"
                    : coverImageUrl
                    ? "Replace image"
                    : "Cover image"}
                  <input type="file" accept="image/*" hidden onChange={handleCoverUpload} />
                </label>
              </div>
            </div>
          </div>

          <div className={styles.formSide}>
            <div className={styles.panel}>
              <div className={styles.panelTitle}>Status</div>
              <div className={styles.radioList}>
                {STATUSES.map((s) => (
                  <div
                    key={s.key}
                    className={`${styles.radioItem} ${
                      status === s.key ? styles.radioItemActive : ""
                    }`}
                    onClick={() => setStatus(s.key)}
                  >
                    <span className={styles.radioDot} />
                    <div>
                      <div className={styles.radioLabel}>{s.label}</div>
                      <div className={styles.radioDesc}>{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.panel}>
              <div className={styles.panelTitle}>Translations</div>
              {BLOG_LOCALES.filter((locale) => locale !== sourceLocale).map((locale) => (
                <div key={locale} className={blogStyles.localeRow}>
                  <span className={blogStyles.localeName}>{LOCALE_LABELS[locale]}</span>
                  <span className={blogStyles.localeState}>
                    {STATE_LABELS[localeStates[locale]]}
                  </span>
                  <Tooltip
                    title={
                      !isEdit
                        ? "Save the post first"
                        : localeStates[sourceLocale] === "dirty"
                        ? "Save your source changes first"
                        : undefined
                    }
                  >
                    <button
                      type="button"
                      className={styles.ghostBtn}
                      disabled={
                        !isEdit ||
                        Boolean(translating) ||
                        localeStates[sourceLocale] === "dirty"
                      }
                      onClick={() => handleTranslate(locale)}
                    >
                      <TranslationOutlined />{" "}
                      {translating === locale
                        ? "Translating…"
                        : localeStates[locale] === "missing"
                        ? "Translate"
                        : "Retranslate"}
                    </button>
                  </Tooltip>
                </div>
              ))}
              {preTranslate.current && (
                <button
                  type="button"
                  className={styles.ghostBtn}
                  style={{ marginTop: 10 }}
                  onClick={undoTranslate}
                >
                  Undo translate
                </button>
              )}
              <div className={styles.panelHint} style={{ marginTop: 10 }}>
                A locale with no content stays hidden on the site.
              </div>
            </div>

            <div className={styles.panel}>
              <div className={styles.panelTitle}>Organisation</div>
              <Form.Item
                name="slug"
                label="URL slug"
                tooltip="Shared across all languages. Changing it after publishing breaks existing links."
                rules={[{ required: true, message: "A slug is required" }]}
              >
                <Input
                  addonBefore="/blog/"
                  placeholder="yamaha-r15-review"
                  onChange={() => setSlugTouched(true)}
                />
              </Form.Item>
              {isEdit && status === "PUBLISHED" && (
                <div className={styles.calloutAmber}>
                  This post is live. Changing the slug will 404 the old URL and lose
                  its search ranking.
                </div>
              )}

              <Form.Item name="category" label="Category" rules={[{ required: true }]}>
                <Select
                  options={BLOG_CATEGORIES.map((value) => ({ value, label: value }))}
                />
              </Form.Item>

              <Form.Item
                name="tags"
                label="Tags"
                tooltip="Comma separated, e.g. yamaha, 150cc"
              >
                <Input placeholder="yamaha, 150cc" />
              </Form.Item>

              <div className={styles.field}>
                <div className={styles.fieldLabel}>
                  Source language <span className={styles.fieldOptional}>(what you write in)</span>
                </div>
                <Select
                  value={sourceLocale}
                  onChange={(value) => {
                    setSourceLocale(value);
                    setActiveLocale(value);
                  }}
                  options={BLOG_LOCALES.map((value) => ({
                    value,
                    label: LOCALE_LABELS[value],
                  }))}
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
}
