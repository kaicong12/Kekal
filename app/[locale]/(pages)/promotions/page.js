import SiteHeader from "@/app/components/motorkekal/SiteHeader";
import SiteFooter from "@/app/components/motorkekal/SiteFooter";
import MobileBar from "@/app/components/motorkekal/MobileBar";
import FeaturedPromoCard from "@/app/components/pages/promotions/FeaturedPromoCard";
import PromoCard from "@/app/components/pages/promotions/PromoCard";
import PromotionSchema from "@/app/components/seo/PromotionSchema";
import { waLink, WaIcon } from "@/app/components/motorkekal/waLink";
import { listLivePromotionsPg, listPastPromotionsPg } from "@/utils/dbPg";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { localeAlternates } from "@/utils/seoAlternates";

// Promotions are time-sensitive; always render the current live set.
export const dynamic = "force-dynamic";

export function generateMetadata({ params: { locale } }) {
  return {
    title: "Promosi Motor Johor Bahru - Tawaran & Diskaun Kekal Motor",
    description:
      "Tawaran terhad motor baru, servis & trade-in di Johor Jaya, JB. Lihat promosi terkini Kekal Motor dengan kira detik — datang showroom untuk claim.",
    keywords: [
      "promosi motor johor bahru",
      "tawaran motor johor jaya",
      "diskaun motor yamaha",
      "promosi motor baru",
      "motorcycle promotion johor bahru",
    ],
    alternates: localeAlternates("/promotions", locale),
  };
}

const Promotions = async ({ params: { locale } }) => {
  setRequestLocale(locale);
  const t = await getTranslations("promotions");
  const tNav = await getTranslations("nav");

  const [livePromotions, pastPromotions] = await Promise.all([
    listLivePromotionsPg().catch(() => []),
    listPastPromotionsPg({ limit: 6 }).catch(() => []),
  ]);

  // All featured promos become hero cards; non-featured live promos go to the
  // grid. No fabricated fallback — if nothing is featured, no hero is shown.
  const featuredPromotions = livePromotions.filter((p) => p.isFeatured);
  const rest = livePromotions.filter((p) => !p.isFeatured);

  const labelPromotion = featuredPromotions[0] || livePromotions[0];
  const monthLabel = (labelPromotion ? new Date(labelPromotion.startDate) : new Date())
    .toLocaleDateString(locale === "en" ? "en-US" : locale, {
      month: "short",
      year: "numeric",
    })
    .toUpperCase();

  return (
    <div className="mk-site">
      <SiteHeader />
      <PromotionSchema promotions={livePromotions} />

      <main>
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <a href="/">{tNav("home")}</a>
            <span>›</span>
            {t("crumbCurrent")}
          </nav>
        </div>

        <section className="page-hero wrap">
          <p className="eyebrow">
            {t("thisMonth")} · {monthLabel}
          </p>
          <h1>{t("headline")}</h1>
          <p>
            {livePromotions.length > 0
              ? t("summary", { count: livePromotions.length })
              : t("summaryEmpty")}
          </p>
        </section>

        {livePromotions.length > 0 ? (
          <>
            {featuredPromotions.length > 0 && (
              <section className="section--tight wrap">
                {featuredPromotions.map((promotion) => (
                  <FeaturedPromoCard key={promotion.id} promotion={promotion} />
                ))}
              </section>
            )}

            {rest.length > 0 && (
              <section className="section wrap">
                <div className="section-head" style={{ marginBottom: 26 }}>
                  <p className="eyebrow">{t("allPromotions")}</p>
                  <h2>{t("runningOffers")}</h2>
                </div>
                <div className="promo-grid">
                  {rest.map((promotion) => (
                    <PromoCard key={promotion.id} promotion={promotion} />
                  ))}
                </div>
              </section>
            )}
          </>
        ) : (
          <section className="section--tight wrap">
            <div
              className="card card--pad"
              style={{ textAlign: "center", padding: 48 }}
            >
              <h2 style={{ fontSize: 22 }}>{t("emptyTitle")}</h2>
              <p
                className="muted"
                style={{ marginTop: 10, maxWidth: "46ch", marginInline: "auto" }}
              >
                {t("emptyBody")}
              </p>
              <a
                className="btn btn--wa btn--lg"
                style={{ marginTop: 22 }}
                href={waLink("Hi Motor Kekal, ada promosi terkini tak?")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WaIcon />
                {t("ctaButton")}
              </a>
            </div>
          </section>
        )}

        {pastPromotions.length > 0 && (
          <section className="section--tight wrap">
            <div className="section-head" style={{ marginBottom: 26 }}>
              <h2>{t("pastDeals")}</h2>
            </div>
            <div className="promo-grid">
              {pastPromotions.map((promotion) => (
                <PromoCard key={promotion.id} promotion={promotion} past />
              ))}
            </div>
          </section>
        )}

        {/* CTA band */}
        <section className="section--tight wrap">
          <div className="cta-band">
            <h2>{t("ctaHeading")}</h2>
            <p>{t("ctaBody")}</p>
            <a
              className="btn btn--wa btn--lg"
              href={waLink("Hi Motor Kekal, saya berminat dengan promosi bulan ini.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WaIcon />
              {t("ctaButton")}
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
      <MobileBar waMessage="Hi Motor Kekal, saya nak tanya pasal promosi." />
    </div>
  );
};

export default Promotions;
