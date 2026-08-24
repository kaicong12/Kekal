"use client";
import { resolveBlogMeta, metaLengthState, META_LIMITS } from "@/utils/blogSeo";
import styles from "./blogEditor.module.css";

const Meter = ({ label, value, limit }) => {
  const length = String(value || "").length;
  const state = metaLengthState(value, limit);
  const fill =
    state === "over" ? styles.meterFillOver : state === "near" ? styles.meterFillNear : "";

  return (
    <div className={styles.meter}>
      <span>{label}</span>
      <span className={styles.meterBar}>
        <span
          className={`${styles.meterFill} ${fill}`}
          style={{ width: `${Math.min(100, (length / limit) * 100)}%` }}
        />
      </span>
      <span>
        {length}/{limit}
      </span>
    </div>
  );
};

// Reads the same resolveBlogMeta() the article page uses, so the preview can't
// show something different from what ships in <head>.
export default function SerpPreview({ slug, post }) {
  const { title, description } = resolveBlogMeta(post);

  return (
    <div className={styles.serp}>
      <div className={styles.serpUrl}>
        motorkekal.com › blog › {slug || "your-post-slug"}
      </div>
      <div className={styles.serpTitle}>{title || "Your post title"}</div>
      <div className={styles.serpDesc}>
        {description || "Your meta description or excerpt appears here."}
      </div>
      <Meter label="Title" value={title} limit={META_LIMITS.title} />
      <Meter label="Description" value={description} limit={META_LIMITS.description} />
    </div>
  );
}
