import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  waLink,
  PHONE_DISPLAY,
  ADDRESS,
  MAPS_URL,
  FACEBOOK_URL,
} from "./waLink";

const SiteFooter = () => {
  const t = useTranslations();

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="footer-brand brand">
              <Image
                className="brand__logo brand__logo--footer"
                src="/images/logoBlack.svg"
                alt="Perniagaan Motor Kekal"
                width={367}
                height={66}
              />
            </div>
            <p className="footer-about">{t("mk.footer.about")}</p>
          </div>

          <div>
            <h4>{t("nav.menu")}</h4>
            <Link href="/">{t("nav.home")}</Link>
            <Link href="/listing">{t("nav.listings")}</Link>
            <Link href="/promotions">{t("nav.promotions")}</Link>
            <Link href="/service">{t("nav.ourServices")}</Link>
            <Link href="/about-us">{t("nav.aboutUs")}</Link>
          </div>

          <div>
            <h4>{t("nav.ourServices")}</h4>
            <Link href="/service#financing">{t("mk.services.financing.title")}</Link>
            <Link href="/service#tradein">{t("mk.services.tradein.title")}</Link>
            <Link href="/service#warranty">{t("mk.services.warranty.title")}</Link>
            <Link href="/service#insurance">{t("mk.services.insurance.title")}</Link>
          </div>

          <div>
            <h4>{t("mk.footer.contactHeading")}</h4>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
              {ADDRESS}
            </a>
            <a href={waLink("Hi Motor Kekal!")} target="_blank" rel="noopener noreferrer">
              WhatsApp: {PHONE_DISPLAY}
            </a>
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
              {t("mk.visitFacebook")}
            </a>
            <span
              style={{
                display: "block",
                padding: "5px 0",
                fontSize: "14.5px",
              }}
            >
              {t("footer.openingHoursValue")}
            </span>
          </div>
        </div>

        <p className="footer-seo">{t("mk.footer.seo")}</p>

        <div className="footer-bottom">
          <span>{t("mk.footer.rights")}</span>
          <span>Johor Bahru · Malaysia</span>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
