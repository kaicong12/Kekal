"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";
import {
  whatsappLink,
  daysLeft,
  formatOfferDate,
} from "@/app/components/pages/promotions/promoUtils";
import styles from "./FeaturedPromotions.module.css";

const PLACEHOLDER = "/images/no-image.svg";

const FeaturedPromotions = () => {
  const t = useTranslations();
  const locale = useLocale();
  const [promotions, setPromotions] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let active = true;
    fetch("/api/promotions")
      .then((res) => (res.ok ? res.json() : { promotions: [] }))
      .then((data) => {
        if (!active) return;
        // Only featured promos appear on the home page.
        setPromotions((data.promotions || []).filter((p) => p.isFeatured));
      })
      .catch(() => {})
      .finally(() => {
        if (active) setLoaded(true);
      });
    return () => {
      active = false;
    };
  }, []);

  // Render nothing until loaded, and nothing when there are no featured promos.
  if (!loaded || promotions.length === 0) return null;

  return (
    <section className={styles.section}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="main-title text-center">
              <h2>{t("home.promotionsHeading")}</h2>
              <p className={styles.subtitle}>{t("home.promotionsSubtitle")}</p>
            </div>
          </div>
        </div>

        <div className="row car-listing-grid">
          {promotions.map((promo) => {
            const remaining = daysLeft(promo.endDate);
            const badge =
              remaining <= 1
                ? t("promotions.endsToday")
                : t("promotions.endsInDays", { count: remaining });
            const image =
              promo.imageUrl || promo.motorcycle?.imageUrl || PLACEHOLDER;

            return (
              <div className="col-sm-6 col-lg-4" key={promo.id}>
                <div className="car-listing">
                  <div className="thumb">
                    <span className={styles.badge}>{badge}</span>
                    <Image
                      width={284}
                      height={183}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      src={image}
                      alt={promo.title}
                    />
                  </div>
                  <div className="details">
                    <h6 className="card-title">{promo.title}</h6>
                    {promo.subtitle && (
                      <p className={styles.cardSubtitle}>{promo.subtitle}</p>
                    )}
                    <p className={styles.ends}>
                      {t("promotions.offerEnds", {
                        date: formatOfferDate(promo.endDate, locale),
                      })}
                    </p>
                    <a
                      href={whatsappLink(promo)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="view-details-btn"
                    >
                      {promo.ctaText || t("promotions.claimDeal")}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="row mt20">
          <div className="col-lg-12">
            <div className="text-center">
              <Link href="/promotions" className="more_listing">
                {t("home.viewAllPromotions")}{" "}
                <span className="icon">
                  <span className="fas fa-plus" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPromotions;
