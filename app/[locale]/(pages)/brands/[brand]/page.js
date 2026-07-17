import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import SiteHeader from "@/app/components/motorkekal/SiteHeader";
import SiteFooter from "@/app/components/motorkekal/SiteFooter";
import MobileBar from "@/app/components/motorkekal/MobileBar";
import BrandBikeGrid from "@/app/components/motorkekal/BrandBikeGrid";
import BreadcrumbSchema from "@/app/components/seo/BreadcrumbSchema";
import BrandCollectionSchema from "@/app/components/seo/BrandCollectionSchema";
import { localeAlternates } from "@/utils/seoAlternates";
import { queryMotorcyclePg } from "@/utils/dbPg";
import brandContent, { BRAND_SLUGS } from "@/utils/brandContent";
import { waLink, WaIcon } from "@/app/components/motorkekal/waLink";

// ISR instead of force-dynamic: force-dynamic crashes dev under the static
// [locale] layout (Next 13.4 "Dynamic server usage" error) and the build
// ignored it anyway. Stock changes show up within the hour.
export const revalidate = 3600;

export function generateMetadata({ params: { locale, brand } }) {
  const content = brandContent[brand];
  if (!content) return {};

  const loc = content[locale] || content.en;

  return {
    title: loc.title,
    description: loc.description,
    keywords: loc.keywords,
    alternates: localeAlternates(`/brands/${brand}`, locale),
    robots: { index: true, follow: true },
    openGraph: {
      title: loc.title,
      description: loc.description,
      type: "website",
    },
  };
}

export default async function BrandDetailPage({ params: { locale, brand } }) {
  setRequestLocale(locale);

  const content = brandContent[brand];
  if (!content) notFound();

  const { motorcycles } = await queryMotorcyclePg({
    filterOpt: [{ fieldToFilter: "brand", operator: "==", filterValue: content.displayName }],
    sortedBy: [{ fieldToSort: "price", sortOrder: "asc" }],
  });

  return (
    <BrandDetailContent
      locale={locale}
      brand={brand}
      content={content}
      motorcycles={motorcycles}
    />
  );
}

function BrandDetailContent({ locale, brand, content, motorcycles }) {
  const t = useTranslations("brands");
  const loc = content[locale] || content.en;

  return (
    <div className="mk-site">
      <SiteHeader />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.motorkekal.com" },
          { name: t("breadcrumbBrands"), url: "https://www.motorkekal.com/brands" },
          { name: content.displayName },
        ]}
      />
      <BrandCollectionSchema
        brand={content.displayName}
        motorcycles={motorcycles}
        brandSlug={brand}
      />

      <main>
        {/* Hero */}
        <section className="section wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">{t("breadcrumbHome")}</Link>
            <span>›</span>
            <Link href="/brands">{t("breadcrumbBrands")}</Link>
            <span>›</span>
            {content.displayName}
          </nav>

          <div className="section-head" style={{ marginTop: 24 }}>
            <p className="eyebrow">{t("eyebrow")}</p>
            <h1>{t("detailHeading", { brand: content.displayName })}</h1>
            <p className="hero__sub">{loc.intro}</p>
          </div>
        </section>

        {/* Bike grid */}
        <section className="section wrap">
          {motorcycles.length > 0 ? (
            <BrandBikeGrid motorcycles={motorcycles} />
          ) : (
            <div className="card" style={{ padding: 32, textAlign: "center" }}>
              <h2 style={{ marginBottom: 8 }}>{t("noStock", { brand: content.displayName })}</h2>
              <p style={{ opacity: 0.7, marginBottom: 20 }}>
                {t("noStockBody", { brand: content.displayName })}
              </p>
              <a
                className="btn btn--wa btn--lg"
                href={waLink(`Hi Motor Kekal, saya nak tanya pasal stok ${content.displayName}.`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WaIcon />
                {t("ctaWhatsApp", { brand: content.displayName })}
              </a>
            </div>
          )}
        </section>

        {/* CTA band */}
        <section className="section--tight wrap">
          <div className="cta-band">
            <h2>
              {t("ctaWhatsApp", { brand: content.displayName })}
            </h2>
            <div className="cta-band__actions">
              <a
                className="btn btn--wa btn--lg"
                href={waLink(`Hi Motor Kekal, saya berminat dengan motosikal ${content.displayName}. Boleh bagi info lanjut?`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WaIcon />
                WhatsApp
              </a>
              <Link className="btn btn--outline btn--lg" href="/listing">
                {t("viewAll")} →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <MobileBar />
    </div>
  );
}
