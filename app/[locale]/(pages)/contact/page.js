import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import SiteHeader from "@/app/components/motorkekal/SiteHeader";
import SiteFooter from "@/app/components/motorkekal/SiteFooter";
import MobileBar from "@/app/components/motorkekal/MobileBar";
import Map from "@/app/components/common/Map";
import {
  waLink,
  MAPS_QUERY_URL,
  ADDRESS,
  PHONE,
  PHONE_DISPLAY,
} from "@/app/components/motorkekal/waLink";
import { localeAlternates } from "@/utils/seoAlternates";

export function generateMetadata({ params: { locale } }) {
  return {
    title: "Hubungi Kami - Kedai Motor Johor Jaya, JB",
    description:
      "Hubungi Perniagaan Motor Kekal: telefon, WhatsApp atau datang terus ke kedai kami di Taman Johor Bahru (Johor Jaya). Buka setiap hari 9 pagi - 7 malam, Jumaat tutup.",
    keywords: [
      "kedai motor johor jaya",
      "kedai motor johor bahru contact",
      "kedai motor near me",
      "motor kekal contact",
      "whatsapp kedai motor jb",
    ],
    alternates: localeAlternates("/contact", locale),
  };
}

const CARD_ICONS = {
  phone: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 4h4l2 5-3 2a12 12 0 005 5l2-3 5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
    </svg>
  ),
  wa: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a10 10 0 00-8.6 15l-1.4 5 5.1-1.3A10 10 0 1012 2zm0 18.3c-1.5 0-3-.4-4.3-1.1l-.3-.2-3 .8.8-3-.2-.3A8.3 8.3 0 1112 20.3z" />
    </svg>
  ),
  pin: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 21s-7-6.3-7-11a7 7 0 1114 0c0 4.7-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" strokeLinecap="round" />
    </svg>
  ),
};

const Contact = ({ params: { locale } }) => {
  setRequestLocale(locale);
  const t = useTranslations("mk.contact");
  const tAbout = useTranslations("mk.about");

  return (
    <div className="mk-site">
      <SiteHeader />

      <main>
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <a href="/">{tAbout("crumbHome")}</a>
            <span>›</span>
            {t("crumbCurrent")}
          </nav>
        </div>

        <section className="page-hero wrap">
          <p className="eyebrow">{t("eyebrow")}</p>
          <h1>{t("heading")}</h1>
          <p>{t("sub")}</p>
        </section>

        {/* Contact channels */}
        <section className="section--tight wrap">
          <div className="svc-grid">
            <article className="card card--hover svc-card">
              <div className="svc-card__ico">{CARD_ICONS.phone}</div>
              <div>
                <h3>{t("callTitle")}</h3>
                <p>{t("callDesc")}</p>
                <a className="btn btn--outline" href={`tel:+${PHONE}`} style={{ marginTop: 12 }}>
                  {PHONE_DISPLAY}
                </a>
              </div>
            </article>
            <article className="card card--hover svc-card">
              <div className="svc-card__ico">{CARD_ICONS.wa}</div>
              <div>
                <h3>{t("waTitle")}</h3>
                <p>{t("waDesc")}</p>
                <a
                  className="btn btn--wa"
                  href={waLink(t("waPrefill"))}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginTop: 12 }}
                >
                  {t("waCta")}
                </a>
              </div>
            </article>
            <article className="card card--hover svc-card">
              <div className="svc-card__ico">{CARD_ICONS.pin}</div>
              <div>
                <h3>{t("visitTitle")}</h3>
                <p>
                  {ADDRESS}
                  <br />
                  {t("visitDesc")}
                </p>
                <a
                  className="btn btn--outline"
                  href={MAPS_QUERY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginTop: 12 }}
                >
                  {t("visitCta")}
                </a>
              </div>
            </article>
            <article className="card card--hover svc-card">
              <div className="svc-card__ico">{CARD_ICONS.clock}</div>
              <div>
                <h3>{t("hoursTitle")}</h3>
                <p>
                  {t("hoursValue")}
                  <br />
                  {t("hoursNote")}
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* Location / NAP */}
        <section className="section--tight wrap">
          <div className="local">
            <div className="local__map">
              <Map />
            </div>
            <div className="local__info">
              <p className="eyebrow" style={{ color: "#fff", opacity: 0.7 }}>
                {t("findEyebrow")}
              </p>
              <h2>{t("findHeading")}</h2>
              <div className="nap">
                <div className="nap__row">
                  {CARD_ICONS.pin}
                  <div>
                    <b>Perniagaan Motor Kekal</b>
                    {ADDRESS}
                  </div>
                </div>
                <div className="nap__row">
                  {CARD_ICONS.phone}
                  <div>
                    <b>{PHONE_DISPLAY}</b>
                    WhatsApp &amp; {tAbout("phoneNote")}
                  </div>
                </div>
                <div className="nap__row">
                  {CARD_ICONS.clock}
                  <div>
                    <b>{tAbout("hoursLabel")}</b>
                    {t("hoursValue")}
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", gap: 10, marginTop: 26, flexWrap: "wrap" }}>
                <a
                  className="btn btn--primary"
                  href={MAPS_QUERY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("visitCta")}
                </a>
                <a
                  className="btn btn--wa"
                  href={waLink(t("waPrefill"))}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {tAbout("whatsappUs")}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <MobileBar waMessage="Hi Motor Kekal, saya nak tanya pasal kedai." />
    </div>
  );
};

export default Contact;
