import Footer from "@/app/components/common/Footer";
import DefaultHeader from "@/app/components/common/DefaultHeader";
import HeaderTop from "@/app/components/common/HeaderTop";
import MobileMenu from "@/app/components/common/MobileMenu";
import FeaturedPromoCard from "@/app/components/pages/promotions/FeaturedPromoCard";
import PromoCard from "@/app/components/pages/promotions/PromoCard";
import PromotionsStickyCTA from "@/app/components/pages/promotions/PromotionsStickyCTA";
import PromotionSchema from "@/app/components/seo/PromotionSchema";
import styles from "@/app/components/pages/promotions/Promotions.module.css";
import { listLivePromotionsPg, listPastPromotionsPg } from "@/utils/dbPg";
import { setRequestLocale, getTranslations } from "next-intl/server";

// Promotions are time-sensitive; always render the current live set.
export const dynamic = "force-dynamic";

export const metadata = {
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
  alternates: {
    canonical: "/promotions",
  },
};

const Promotions = async ({ params: { locale } }) => {
  setRequestLocale(locale);
  const t = await getTranslations("promotions");

  const [livePromotions, pastPromotions] = await Promise.all([
    listLivePromotionsPg().catch(() => []),
    listPastPromotionsPg({ limit: 6 }).catch(() => []),
  ]);

  const featured =
    livePromotions.find((p) => p.isFeatured) || livePromotions[0] || null;
  const rest = livePromotions.filter((p) => p.id !== featured?.id);

  const monthLabel = (featured ? new Date(featured.startDate) : new Date())
    .toLocaleDateString(locale === "en" ? "en-US" : locale, {
      month: "short",
      year: "numeric",
    })
    .toUpperCase();

  return (
    <div className="wrapper">
      <HeaderTop />
      <DefaultHeader />
      <MobileMenu />

      <PromotionSchema promotions={livePromotions} />

      <main className={styles.page}>
        <p className={styles.eyebrow}>
          {t("thisMonth")} · {monthLabel}
        </p>
        <h1 className={styles.headline}>{t("headline")}</h1>
        <p className={styles.summary}>
          {livePromotions.length > 0
            ? t("summary", { count: livePromotions.length })
            : t("summaryEmpty")}
        </p>

        {featured ? (
          <>
            <FeaturedPromoCard promotion={featured} />

            {rest.length > 0 && (
              <>
                <h2 className={styles.sectionTitle}>{t("moreOffers")}</h2>
                <div className={styles.promoList}>
                  {rest.map((promotion) => (
                    <PromoCard key={promotion.id} promotion={promotion} />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <div className={styles.emptyState}>
            <h2 className={styles.emptyTitle}>{t("emptyTitle")}</h2>
            <p className={styles.emptyBody}>{t("emptyBody")}</p>
          </div>
        )}

        {pastPromotions.length > 0 && (
          <>
            <h2 className={styles.sectionTitle}>{t("pastDeals")}</h2>
            <div className={styles.promoList}>
              {pastPromotions.map((promotion) => (
                <PromoCard key={promotion.id} promotion={promotion} past />
              ))}
            </div>
          </>
        )}
      </main>

      <Footer />
      <PromotionsStickyCTA />
    </div>
  );
};

export default Promotions;
