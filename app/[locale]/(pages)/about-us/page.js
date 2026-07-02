import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import SiteHeader from "@/app/components/motorkekal/SiteHeader";
import SiteFooter from "@/app/components/motorkekal/SiteFooter";
import MobileBar from "@/app/components/motorkekal/MobileBar";
import Map from "@/app/components/common/Map";
import { waLink, MAPS_QUERY_URL, ADDRESS, PHONE_DISPLAY } from "@/app/components/motorkekal/waLink";

export const metadata = {
  title: "Tentang Kami - Kedai Motor Johor Bahru | Perniagaan Motor Kekal",
  description:
    "Perniagaan Motor Kekal, kedai motor keluarga di Johor Bahru sejak lebih 30 tahun. Pengedar Yamaha, Kawasaki, Honda, KTM — jujur, mesra dan dipercayai orang JB.",
  keywords: [
    "perniagaan motor kekal",
    "tentang motor kekal",
    "kedai motor johor bahru",
    "kedai motor near me",
    "pengedar motosikal jb",
  ],
  alternates: { canonical: "/about-us" },
};

const BANNER_IMG =
  "https://images.unsplash.com/photo-1694274855681-1b12cd585066?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400";
const STORY_IMG =
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";

const VALUE_ICONS = {
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" strokeLinejoin="round" />
    </svg>
  ),
  users: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.9M16 3.1a4 4 0 010 7.8" />
    </svg>
  ),
  tools: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14.7 6.3a5 5 0 00-7 7l1 1 6-6zM9 17l6-6 4 4a3 3 0 01-4 4z" strokeLinejoin="round" />
    </svg>
  ),
  spark: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
};

const AboutUs = ({ params: { locale } }) => {
  setRequestLocale(locale);
  const t = useTranslations("mk.about");
  const tFooter = useTranslations("footer");
  const tAbout = useTranslations("about");

  const values = t.raw("values");
  const stats = t.raw("stats");

  return (
    <div className="mk-site">
      <SiteHeader />

      <main>
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <a href="/">{t("crumbHome")}</a>
            <span>›</span>
            {t("crumbCurrent")}
          </nav>
        </div>

        <section className="page-hero wrap">
          <p className="eyebrow">{t("eyebrow")}</p>
          <h1>{t("heading")}</h1>
          <p>{t("sub")}</p>
        </section>

        {/* Banner */}
        <section className="section--tight wrap">
          <div className="split__media" style={{ aspectRatio: "16/7", borderRadius: 22 }}>
            <Image width={1180} height={516} priority src={BANNER_IMG} alt={t("bannerAlt")} />
          </div>
        </section>

        {/* Story */}
        <section className="section wrap">
          <div className="split">
            <div>
              <p className="eyebrow">{t("storyEyebrow")}</p>
              <h2 style={{ fontSize: "clamp(26px,3.4vw,36px)", marginTop: 10 }}>{t("storyHeading")}</h2>
              <p className="muted" style={{ marginTop: 16, fontSize: "16.5px" }}>{t("storyPara1")}</p>
              <p className="muted" style={{ marginTop: 14, fontSize: "16.5px" }}>{t("storyPara2")}</p>
            </div>
            <div className="split__media">
              <Image width={560} height={420} src={STORY_IMG} alt={t("storyImageAlt")} />
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section--tight wrap">
          <div className="section-head">
            <p className="eyebrow">{t("valuesEyebrow")}</p>
            <h2>{t("valuesHeading")}</h2>
          </div>
          <div className="svc-grid">
            {values.map((v) => (
              <article className="card card--hover svc-card" key={v.icon}>
                <div className="svc-card__ico">{VALUE_ICONS[v.icon]}</div>
                <div>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="section--tight wrap">
          <div className="card" style={{ padding: 14 }}>
            <div className="stats">
              {stats.map((s, i) => (
                <div className="stat" key={i}>
                  <b>{s.value}</b>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location / NAP */}
        <section className="section--tight wrap">
          <div className="local">
            <div className="local__map">
              <Map />
            </div>
            <div className="local__info">
              <p className="eyebrow" style={{ color: "#fff", opacity: 0.7 }}>{t("findEyebrow")}</p>
              <h2>{t("findHeading")}</h2>
              <div className="nap">
                <div className="nap__row">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 21s-7-6.3-7-11a7 7 0 1114 0c0 4.7-7 11-7 11z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                  <div>
                    <b>Perniagaan Motor Kekal</b>
                    {ADDRESS}
                  </div>
                </div>
                <div className="nap__row">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 4h4l2 5-3 2a12 12 0 005 5l2-3 5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
                  </svg>
                  <div>
                    <b>{PHONE_DISPLAY}</b>
                    WhatsApp &amp; {t("phoneNote")}
                  </div>
                </div>
                <div className="nap__row">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" strokeLinecap="round" />
                  </svg>
                  <div>
                    <b>{t("hoursLabel")}</b>
                    {tFooter("openingHoursValue")}
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", gap: 10, marginTop: 26, flexWrap: "wrap" }}>
                <a className="btn btn--primary" href={MAPS_QUERY_URL} target="_blank" rel="noopener noreferrer">
                  {tAbout("getDirection")}
                </a>
                <a
                  className="btn btn--wa"
                  href={waLink("Hi Motor Kekal, saya nak datang tengok motor.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("whatsappUs")}
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

export default AboutUs;
