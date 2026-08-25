import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import SiteHeader from "@/app/components/motorkekal/SiteHeader";
import SiteFooter from "@/app/components/motorkekal/SiteFooter";
import MobileBar from "@/app/components/motorkekal/MobileBar";
import Breadcrumb from "@/app/components/motorkekal/Breadcrumb";
import BreadcrumbSchema from "@/app/components/seo/BreadcrumbSchema";
import BlogIndexBody from "@/app/components/blog/BlogIndexBody";
import StockRail from "@/app/components/blog/StockRail";
import { listPublishedBlogPostsPg } from "@/utils/blogPg";
import { localeAlternates } from "@/utils/seoAlternates";
import { BLOG_CATEGORIES } from "@/utils/blogContent";

export const revalidate = 3600;

const SITE = "https://www.motorkekal.com";

// Four fixed keys, so unlike the post pages these are cheap to prerender.
export function generateStaticParams() {
  return BLOG_CATEGORIES.map((category) => ({ category }));
}

export async function generateMetadata({ params: { locale, category } }) {
  if (!BLOG_CATEGORIES.includes(category)) {
    return { title: "Not Found", robots: { index: false, follow: true } };
  }

  const t = await getTranslations({ locale, namespace: "blog" });
  const path = `/blog/category/${category}`;
  const title = t(`categoryMeta.${category}.metaTitle`);
  const description = t(`categoryMeta.${category}.metaDescription`);

  return {
    title,
    description,
    alternates: localeAlternates(path, locale),
    openGraph: {
      title,
      description,
      url: `${SITE}${locale === "en" ? "" : `/${locale}`}${path}`,
      type: "website",
    },
  };
}

export default async function BlogCategoryPage({ params: { locale, category } }) {
  setRequestLocale(locale);
  if (!BLOG_CATEGORIES.includes(category)) notFound();

  const t = await getTranslations("blog");
  const tDetail = await getTranslations("detail");
  const heading = t(`categoryMeta.${category}.heading`);

  let posts = [];
  try {
    posts = await listPublishedBlogPostsPg({ locale, category });
  } catch (error) {
    console.error("Failed to load blog category posts:", error);
  }

  return (
    <div className="mk-site">
      <BreadcrumbSchema
        items={[
          { name: tDetail("breadcrumbHome"), url: SITE },
          { name: t("heading"), url: `${SITE}/blog` },
          { name: heading },
        ]}
      />
      <SiteHeader />

      <main>
        <div className="wrap">
          <Breadcrumb
            items={[
              { label: tDetail("breadcrumbHome"), href: "/" },
              { label: t("heading"), href: "/blog" },
              { label: t(`categories.${category}`) },
            ]}
          />
        </div>

        <BlogIndexBody
          heading={heading}
          intro={t(`categoryMeta.${category}.intro`)}
          posts={posts}
          activeCategory={category}
        />

        <StockRail />
      </main>

      <SiteFooter />
      <MobileBar waMessage="Hi Motor Kekal, saya ada soalan tentang motosikal. Boleh bantu?" />
    </div>
  );
}
