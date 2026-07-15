import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import SiteHeader from "@/app/components/motorkekal/SiteHeader";
import SiteFooter from "@/app/components/motorkekal/SiteFooter";
import MobileBar from "@/app/components/motorkekal/MobileBar";
import BreadcrumbSchema from "@/app/components/seo/BreadcrumbSchema";
import { localeAlternates } from "@/utils/seoAlternates";
import brandContent, { BRAND_SLUGS } from "@/utils/brandContent";
import { queryMotorcyclePg } from "@/utils/dbPg";

export const dynamic = "force-dynamic";

export function generateMetadata({ params: { locale } }) {
  const meta = {
    en: {
      title: "Motorcycle Brands | Perniagaan Motor Kekal Johor Bahru",
      description:
        "Authorized dealer for Yamaha, Honda, Kawasaki & KTM motorcycles in Johor Bahru. Browse all brands and find your next bike at Motor Kekal.",
    },
    ms: {
      title: "Jenama Motosikal | Perniagaan Motor Kekal Johor Bahru",
      description:
        "Dealer rasmi motosikal Yamaha, Honda, Kawasaki & KTM di Johor Bahru. Lihat semua jenama dan cari motosikal anda di Motor Kekal.",
    },
    zh: {
      title: "摩托车品牌 | Perniagaan Motor Kekal 新山",
      description:
        "新山 Yamaha、Honda、Kawasaki 及 KTM 摩托车授权经销商。浏览所有品牌，在 Motor Kekal 找到您的下一辆摩托车。",
    },
  };

  const loc = meta[locale] || meta.en;

  return {
    title: loc.title,
    description: loc.description,
    alternates: localeAlternates("/brands", locale),
    robots: { index: true, follow: true },
  };
}

async function getBrandCounts() {
  const counts = {};
  for (const slug of BRAND_SLUGS) {
    const brand = brandContent[slug];
    const { total } = await queryMotorcyclePg({
      filterOpt: [{ fieldToFilter: "brand", operator: "==", filterValue: brand.displayName }],
    });
    counts[slug] = total;
  }
  return counts;
}

export default async function BrandsIndexPage({ params: { locale } }) {
  setRequestLocale(locale);
  const counts = await getBrandCounts();

  return <BrandsIndexContent locale={locale} counts={counts} />;
}

function BrandsIndexContent({ locale, counts }) {
  const t = useTranslations("brands");

  return (
    <div className="mk-site">
      <SiteHeader />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.motorkekal.com" },
          { name: t("breadcrumbBrands") },
        ]}
      />

      <main>
        <section className="section wrap">
          <div className="section-head">
            <p className="eyebrow">{t("eyebrow")}</p>
            <h1>{t("indexHeading")}</h1>
            <p className="hero__sub">{t("indexSub")}</p>
          </div>

          <div className="svc-grid">
            {BRAND_SLUGS.map((slug) => {
              const brand = brandContent[slug];
              const count = counts[slug] || 0;
              return (
                <Link
                  key={slug}
                  href={`/brands/${slug}`}
                  className="card card--hover svc-card"
                  style={{ textDecoration: "none" }}
                >
                  <div className="svc-card__ico">
                    {brand.logo ? (
                      <Image
                        src={brand.logo}
                        alt={brand.displayName}
                        width={48}
                        height={48}
                        style={{ objectFit: "contain" }}
                      />
                    ) : (
                      <span style={{ fontSize: 20, fontWeight: 700 }}>
                        {brand.displayName}
                      </span>
                    )}
                  </div>
                  <div>
                    <h2 style={{ fontSize: 18, margin: 0 }}>{brand.displayName}</h2>
                    <p style={{ margin: "4px 0 0", opacity: 0.7, fontSize: 14 }}>
                      {t("motorcyclesAvailable", { count })}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </main>

      <SiteFooter />
      <MobileBar />
    </div>
  );
}
