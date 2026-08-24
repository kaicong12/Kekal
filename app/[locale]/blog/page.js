import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import SiteHeader from "@/app/components/motorkekal/SiteHeader";
import SiteFooter from "@/app/components/motorkekal/SiteFooter";
import MobileBar from "@/app/components/motorkekal/MobileBar";
import Breadcrumb from "@/app/components/motorkekal/Breadcrumb";
import BreadcrumbSchema from "@/app/components/seo/BreadcrumbSchema";
import { listPublishedBlogPostsPg } from "@/utils/blogPg";
import { localeAlternates } from "@/utils/seoAlternates";
import { readingMinutes } from "@/utils/blogSeo";

// revalidateBlogSurfaces() pushes saves out immediately; this is the safety net.
export const revalidate = 3600;

const SITE = "https://www.motorkekal.com";

const META = {
  en: {
    title: "Motorcycle News & Reviews - Motor Kekal Johor Bahru",
    description:
      "Motorcycle reviews, buying guides and news from Perniagaan Motor Kekal, Johor Bahru. Honest takes on the bikes we sell and service.",
  },
  ms: {
    title: "Berita & Ulasan Motosikal - Motor Kekal Johor Bahru",
    description:
      "Ulasan motosikal, panduan pembeli dan berita terkini daripada Perniagaan Motor Kekal, Johor Bahru. Pandangan jujur tentang motor yang kami jual dan servis.",
  },
  zh: {
    title: "摩托车资讯与评测 - 新山 Motor Kekal",
    description:
      "来自新山 Perniagaan Motor Kekal 的摩托车评测、购车指南与最新资讯。真实分享我们销售与保养的车款。",
  },
};

export function generateMetadata({ params: { locale } }) {
  const meta = META[locale] || META.en;
  return {
    title: meta.title,
    description: meta.description,
    alternates: localeAlternates("/blog", locale),
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${SITE}${locale === "en" ? "" : `/${locale}`}/blog`,
      type: "website",
    },
  };
}

const formatDate = (value, locale) =>
  new Date(value).toLocaleDateString(locale === "en" ? "en-GB" : locale, {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

export default async function BlogIndexPage({ params: { locale } }) {
  setRequestLocale(locale);
  const t = await getTranslations("blog");
  const tDetail = await getTranslations("detail");

  let posts = [];
  try {
    posts = await listPublishedBlogPostsPg({ locale });
  } catch (error) {
    console.error("Failed to load blog posts:", error);
  }

  return (
    <div className="mk-site">
      <BreadcrumbSchema
        items={[
          { name: tDetail("breadcrumbHome"), url: SITE },
          { name: t("heading") },
        ]}
      />
      <SiteHeader />

      <main>
        <div className="wrap">
          <Breadcrumb
            items={[
              { label: tDetail("breadcrumbHome"), href: "/" },
              { label: t("heading") },
            ]}
          />
        </div>

        <section className="section wrap">
          <div className="section-head">
            <h1>{t("heading")}</h1>
            <p>{t("intro")}</p>
          </div>

          {posts.length === 0 ? (
            <p className="muted">{t("empty")}</p>
          ) : (
            <div className="bike-grid">
              {posts.map((post) => (
                <article key={post.id} className="card card--hover post-card">
                  <Link href={`/blog/${post.slug}`} className="post-card__link">
                    {post.coverImageUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        className="post-card__media"
                        src={post.coverImageUrl}
                        alt={post.title}
                        loading="lazy"
                      />
                    ) : (
                      <div className="post-card__media post-card__media--empty" />
                    )}
                    <div className="post-card__body">
                      <span className="post-chip">
                        {t(`categories.${post.category}`)}
                      </span>
                      <h2 className="post-card__title">{post.title}</h2>
                      <p className="post-card__excerpt">{post.excerpt}</p>
                      <p className="post-card__meta muted">
                        {formatDate(post.publishedAt, locale)} ·{" "}
                        {t("readingTime", { minutes: readingMinutes(post.plainText) })}
                      </p>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>

      <SiteFooter />
      <MobileBar waMessage="Hi Motor Kekal, saya ada soalan tentang motosikal. Boleh bantu?" />
    </div>
  );
}
