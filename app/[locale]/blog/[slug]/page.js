import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import SiteHeader from "@/app/components/motorkekal/SiteHeader";
import SiteFooter from "@/app/components/motorkekal/SiteFooter";
import MobileBar from "@/app/components/motorkekal/MobileBar";
import Breadcrumb from "@/app/components/motorkekal/Breadcrumb";
import BreadcrumbSchema from "@/app/components/seo/BreadcrumbSchema";
import BlogPostingSchema from "@/app/components/seo/BlogPostingSchema";
import BlogBody from "@/app/components/blog/BlogBody";
import { getPublishedBlogPostBySlugPg } from "@/utils/blogPg";
import { localeAlternatesFor } from "@/utils/seoAlternates";
import { resolveBlogMeta, readingMinutes } from "@/utils/blogSeo";

// No generateStaticParams, matching the motorcycle detail page: rendering on
// demand avoids prerendering posts × 3 locales on every build.
export const revalidate = 3600;

const SITE = "https://www.motorkekal.com";

export async function generateMetadata({ params: { locale, slug } }) {
  try {
    const post = await getPublishedBlogPostBySlugPg(slug, locale);
    if (!post) {
      return { title: "Post Not Found", robots: { index: false, follow: true } };
    }

    const { title, description } = resolveBlogMeta(post);
    const path = `/blog/${slug}`;

    return {
      title,
      description,
      alternates: localeAlternatesFor(path, locale, post.availableLocales),
      robots: { index: true, follow: true },
      openGraph: {
        title,
        description,
        type: "article",
        url: `${SITE}${locale === "en" ? "" : `/${locale}`}${path}`,
        publishedTime: post.publishedAt
          ? new Date(post.publishedAt).toISOString()
          : undefined,
        modifiedTime: new Date(
          post.translationUpdatedAt || post.updatedAt
        ).toISOString(),
        ...(post.coverImageUrl ? { images: [post.coverImageUrl] } : {}),
      },
    };
  } catch (error) {
    console.error("Failed to build blog metadata:", error);
    return { title: "Motor Kekal Blog" };
  }
}

const formatDate = (value, locale) =>
  new Date(value).toLocaleDateString(locale === "en" ? "en-GB" : locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export default async function BlogPostPage({ params: { locale, slug } }) {
  setRequestLocale(locale);
  const t = await getTranslations("blog");
  const tDetail = await getTranslations("detail");

  const post = await getPublishedBlogPostBySlugPg(slug, locale);
  // Covers all three of: no such slug, still a draft, and this locale has no
  // translation.
  if (!post) notFound();

  const { description } = resolveBlogMeta(post);
  const url = `${SITE}${locale === "en" ? "" : `/${locale}`}/blog/${slug}`;
  const categoryLabel = t(`categories.${post.category}`);
  const modified = post.translationUpdatedAt || post.updatedAt;
  const showUpdated =
    post.publishedAt &&
    new Date(modified).toDateString() !== new Date(post.publishedAt).toDateString();

  return (
    <div className="mk-site">
      <BlogPostingSchema
        post={post}
        url={url}
        description={description}
        categoryLabel={categoryLabel}
      />
      <BreadcrumbSchema
        items={[
          { name: tDetail("breadcrumbHome"), url: SITE },
          { name: t("heading"), url: `${SITE}/blog` },
          { name: post.title },
        ]}
      />
      <SiteHeader />

      <main>
        <div className="wrap">
          <Breadcrumb
            items={[
              { label: tDetail("breadcrumbHome"), href: "/" },
              { label: t("heading"), href: "/blog" },
              { label: post.title },
            ]}
          />
        </div>

        <article className="section wrap">
          <header className="post-head">
            <span className="post-chip">{categoryLabel}</span>
            <h1>{post.title}</h1>
            <p className="post-meta muted">
              {t("byline")} · {formatDate(post.publishedAt, locale)} ·{" "}
              {t("readingTime", { minutes: readingMinutes(post.plainText) })}
              {showUpdated && (
                <> · {t("updatedOn", { date: formatDate(modified, locale) })}</>
              )}
            </p>
          </header>

          {post.coverImageUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              className="post-hero"
              src={post.coverImageUrl}
              alt={post.title}
              fetchPriority="high"
            />
          )}

          <div className="prose">
            <BlogBody doc={post.body} />
          </div>

          {post.tags.length > 0 && (
            <div className="post-tags">
              {post.tags.map((tag) => (
                <span key={tag} className="post-chip">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </article>
      </main>

      <SiteFooter />
      <MobileBar waMessage="Hi Motor Kekal, saya baca blog anda. Boleh bantu saya?" />
    </div>
  );
}
