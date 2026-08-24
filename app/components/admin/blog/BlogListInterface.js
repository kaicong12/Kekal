"use client";
import { useState, useEffect, useCallback, useMemo } from "react";
import { message, Modal } from "antd";
import { auth } from "@/utils/firebase";
import {
  AdminTopBar,
  MobileCard,
  StatusPill,
  Thumb,
  formatDate,
  useIsMobile,
  RowMenu,
} from "../adminUi";
import { BLOG_LOCALES } from "@/utils/blogContent";
import styles from "../admin.module.css";
import blogStyles from "./blogEditor.module.css";

const TABS = [
  { key: "all", label: "All" },
  { key: "published", label: "Published" },
  { key: "draft", label: "Drafts" },
  { key: "untranslated", label: "Needs translation" },
];

const statusOf = (post) =>
  post.status === "PUBLISHED"
    ? { key: "published", label: "Published" }
    : { key: "draft", label: "Draft" };

// A locale is stale when its translation predates the source locale's.
function localeChips(post) {
  const source = post.translations?.[post.sourceLocale];
  return BLOG_LOCALES.map((locale) => {
    const translation = post.translations?.[locale];
    if (!translation) return { locale, state: "missing" };
    if (
      locale !== post.sourceLocale &&
      source &&
      new Date(translation.updatedAt) < new Date(source.updatedAt)
    ) {
      return { locale, state: "stale" };
    }
    return { locale, state: "complete" };
  });
}

const LocaleChips = ({ post }) => (
  <span className={blogStyles.chips}>
    {localeChips(post).map(({ locale, state }) => (
      <span
        key={locale}
        title={`${locale.toUpperCase()}: ${state}`}
        className={`${blogStyles.chip} ${
          state === "complete"
            ? blogStyles.chipOn
            : state === "stale"
            ? blogStyles.chipStale
            : ""
        }`}
      >
        {locale.toUpperCase()}
      </span>
    ))}
  </span>
);

export default function BlogListInterface({ onCreateNew, onEdit }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [tab, setTab] = useState("all");
  const isMobile = useIsMobile();

  const fetchPosts = useCallback(async () => {
    setLoading(true);
    try {
      const token = await auth.currentUser?.getIdToken();
      const res = await fetch("/api/blog-posts?all=true", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error();
      const data = await res.json();
      setPosts(data.posts || []);
    } catch {
      message.error("Failed to load blog posts");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const handleDelete = (post) => {
    const title = post.translations?.[post.sourceLocale]?.title || post.slug;
    Modal.confirm({
      title: "Delete post",
      content: `Delete "${title}"? This removes every translation and cannot be undone.`,
      okText: "Delete",
      okType: "danger",
      onOk: async () => {
        try {
          const token = await auth.currentUser?.getIdToken();
          const res = await fetch(`/api/blog-posts/${post.id}`, {
            method: "DELETE",
            headers: { Authorization: `Bearer ${token}` },
          });
          if (!res.ok) throw new Error();
          message.success("Post deleted successfully");
          fetchPosts();
        } catch {
          message.error("Failed to delete post");
        }
      },
    });
  };

  const withMeta = useMemo(
    () =>
      posts.map((post) => {
        const chips = localeChips(post);
        return {
          ...post,
          _status: statusOf(post),
          _title: post.translations?.[post.sourceLocale]?.title || post.slug,
          _missing: chips.filter((c) => c.state === "missing").length,
          _stale: chips.filter((c) => c.state === "stale").length,
        };
      }),
    [posts]
  );

  const counts = useMemo(() => {
    const c = { all: withMeta.length, published: 0, draft: 0, untranslated: 0 };
    withMeta.forEach((post) => {
      c[post._status.key] += 1;
      if (post._missing > 0) c.untranslated += 1;
    });
    return c;
  }, [withMeta]);

  const staleCount = useMemo(
    () => withMeta.filter((post) => post._stale > 0).length,
    [withMeta]
  );

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return withMeta.filter((post) => {
      if (tab === "untranslated" ? post._missing === 0 : tab !== "all" && post._status.key !== tab) {
        return false;
      }
      if (!q) return true;
      return (
        post._title.toLowerCase().includes(q) || post.slug.toLowerCase().includes(q)
      );
    });
  }, [withMeta, tab, search]);

  const stats = [
    { label: "Published", value: counts.published },
    { label: "Drafts", value: counts.draft },
    {
      label: "Missing translations",
      value: counts.untranslated,
      hint: counts.untranslated ? "needs attention" : null,
    },
    {
      label: "Stale translations",
      value: staleCount,
      hint: staleCount ? "source changed" : null,
    },
  ];

  return (
    <>
      <AdminTopBar
        title="Blog"
        searchPlaceholder="Search posts..."
        searchValue={search}
        onSearchChange={setSearch}
        actionLabel="New post"
        onAction={onCreateNew}
      />

      <div className={styles.content}>
        <h1 className={styles.pageHeading}>Blog</h1>
        <p className={styles.pageSubtitle}>
          Reviews, guides and news — the pages that bring search traffic in.
        </p>

        <div className={styles.statGrid}>
          {stats.map((s) => (
            <div key={s.label} className={styles.statCard}>
              <div className={styles.statLabel}>{s.label}</div>
              <div className={styles.statValueRow}>
                <span className={styles.statValue}>{s.value}</span>
                {s.hint && (
                  <span className={`${styles.statHintMuted} ${styles.statHintAmber}`}>
                    {s.hint}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.tableCard}>
          <div className={styles.tabs}>
            {TABS.map((t) => (
              <button
                key={t.key}
                type="button"
                className={`${styles.tab} ${tab === t.key ? styles.tabActive : ""}`}
                onClick={() => setTab(t.key)}
              >
                {t.label} <span className={styles.tabCount}>{counts[t.key]}</span>
              </button>
            ))}
          </div>

          {isMobile ? (
            <div className={styles.mobileList}>
              {loading ? (
                <div className={styles.emptyState}>Loading…</div>
              ) : filtered.length === 0 ? (
                <div className={styles.emptyState}>No posts found.</div>
              ) : (
                filtered.map((post) => (
                  <MobileCard
                    key={post.id}
                    onClick={() => onEdit(post.id)}
                    onEdit={() => onEdit(post.id)}
                    onDelete={() => handleDelete(post)}
                    thumb={<Thumb src={post.coverImageUrl} alt={post._title} />}
                    pill={
                      <StatusPill
                        statusKey={post._status.key}
                        label={post._status.label}
                      />
                    }
                    title={<span className={styles.offerTitle}>{post._title}</span>}
                    meta={[
                      post.category,
                      localeChips(post)
                        .filter((c) => c.state !== "missing")
                        .map((c) => c.locale.toUpperCase())
                        .join("/") || "no translations",
                      formatDate(post.updatedAt),
                    ]
                      .filter(Boolean)
                      .join(" · ")}
                  />
                ))
              )}
            </div>
          ) : (
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Post</th>
                    <th style={{ width: 120 }}>Status</th>
                    <th style={{ width: 140 }}>Category</th>
                    <th style={{ width: 130 }}>Locales</th>
                    <th style={{ width: 110 }}>Updated</th>
                    <th style={{ width: 60 }} />
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan={6} className={styles.emptyState}>
                        Loading…
                      </td>
                    </tr>
                  ) : filtered.length === 0 ? (
                    <tr>
                      <td colSpan={6} className={styles.emptyState}>
                        No posts found.
                      </td>
                    </tr>
                  ) : (
                    filtered.map((post) => (
                      <tr
                        key={post.id}
                        className={styles.rowClickable}
                        onClick={() => onEdit(post.id)}
                      >
                        <td>
                          <div className={styles.offerCell}>
                            <Thumb src={post.coverImageUrl} alt={post._title} />
                            <div>
                              <div className={styles.offerTitle}>{post._title}</div>
                              <div className={styles.offerMeta}>/blog/{post.slug}</div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <StatusPill
                            statusKey={post._status.key}
                            label={post._status.label}
                          />
                        </td>
                        <td>
                          <span className={styles.categoryTag}>{post.category}</span>
                        </td>
                        <td>
                          <LocaleChips post={post} />
                        </td>
                        <td className={styles.muted}>{formatDate(post.updatedAt)}</td>
                        <td>
                          <RowMenu
                            onEdit={() => onEdit(post.id)}
                            onDelete={() => handleDelete(post)}
                          />
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
