import Image from "next/image";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import SiteHeader from "@/app/components/motorkekal/SiteHeader";
import SiteFooter from "@/app/components/motorkekal/SiteFooter";
import MobileBar from "@/app/components/motorkekal/MobileBar";
import PopularBikes from "@/app/components/motorkekal/PopularBikes";
import Pill from "@/app/components/motorkekal/Pill";
import Map from "@/app/components/common/Map";
import { waLink, WaIcon, FbIcon, FACEBOOK_URL, MAPS_QUERY_URL, ADDRESS, PHONE_DISPLAY } from "@/app/components/motorkekal/waLink";

const HERO_IMG =
  "https://images.unsplash.com/photo-1694274855681-1b12cd585066?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";

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

const TESTIMONIALS = [
  { name: "Ahmad Fauzi", roleKey: "enthusiast", textKey: "text1", avatar: "/images/testimonial/avatar-af.svg" },
  { name: "Nurul Aina", roleKey: "commuter", textKey: "text2", avatar: "/images/testimonial/avatar-na.svg" },
  { name: "Raj Kumar Selvam", roleKey: "enthusiast", textKey: "text3", avatar: "/images/testimonial/avatar-rs.svg" },
  { name: "Tan Mei Ling", roleKey: "commuter", textKey: "text4", avatar: "/images/testimonial/avatar-tm.svg" },
];

const Home = ({ params }) => {
  if (params?.locale) setRequestLocale(params.locale);
  const t = useTranslations();

  const meta = t.raw("mk.home.meta");
  const stats = t.raw("mk.home.stats");
  const values = t.raw("mk.about.values");

  return (
    <div className="mk-site">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="hero wrap">
          <div className="hero__grid">
            <div>
              <p className="eyebrow">{t("mk.home.eyebrow")}</p>
              <h1>
                {t.rich("mk.home.h1", {
                  em: (c) => <em>{c}</em>,
                  br: () => <br />,
                })}
              </h1>
              <p className="hero__sub">{t("mk.home.sub")}</p>
              <div className="hero__cta">
                <Link className="btn btn--primary btn--lg" href="/listing">
                  {t("mk.home.ctaBrowse")}
                </Link>
                <a
                  className="btn btn--wa btn--lg"
                  href={waLink("Hi Motor Kekal, saya nak tanya pasal motosikal yang ada dalam stok.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WaIcon />
                  {t("mk.home.ctaWhatsapp")}
                </a>
              </div>
              <div className="hero__meta">
                {meta.map((m, i) => (
                  <div key={i}>✓ {m}</div>
                ))}
              </div>
            </div>
            <div className="hero__media">
              <Image width={720} height={576} priority src={HERO_IMG} alt={t("mk.home.heroImageAlt")} />
              <div className="hero__badge">
                <Pill status="live">{t("mk.home.badgeOpen")}</Pill>
                <span style={{ fontSize: 13, fontWeight: 600 }}>Johor Bahru</span>
              </div>
            </div>
          </div>
        </section>

        {/* Brand strip */}
        <div className="wrap">
          <div className="brandstrip card" style={{ borderRadius: 16 }}>
            <span className="brandstrip__label">{t("mk.home.dealerLabel")}</span>
            <span className="brandstrip__logo">Yamaha</span>
            <span className="brandstrip__logo">Honda</span>
            <span className="brandstrip__logo">Kawasaki</span>
            <span className="brandstrip__logo">KTM</span>
          </div>
        </div>

        {/* Popular bikes */}
        <section className="section wrap">
          <div className="listing-toolbar">
            <div className="section-head" style={{ marginBottom: 0 }}>
              <p className="eyebrow">{t("mk.home.popularEyebrow")}</p>
              <h2>{t("mk.home.popularHeading")}</h2>
            </div>
            <Link className="btn btn--outline" href="/listing">
              {t("nav.allMotorcycles")} →
            </Link>
          </div>
          <PopularBikes />
        </section>

        <hr className="divider" />

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

        {/* The Motor Kekal way (values) */}
        <section className="section wrap">
          <div className="section-head">
            <p className="eyebrow">{t("mk.about.valuesEyebrow")}</p>
            <h2>{t("mk.about.valuesHeading")}</h2>
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
          <div style={{ marginTop: 32 }}>
            <Link className="btn btn--ink btn--lg" href="/about-us">
              {t("mk.home.splitCta")} →
            </Link>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section--tight wrap">
          <div className="section-head">
            <p className="eyebrow">{t("mk.home.testimonialsEyebrow")}</p>
            <h2>{t("mk.home.testimonialsHeading")}</h2>
          </div>
          <div className="quote-grid">
            {TESTIMONIALS.slice(0, 3).map((item) => (
              <article className="card quote" key={item.name}>
                <div className="stars">★★★★★</div>
                <p>{t(`commonTestimonials.${item.textKey}`)}</p>
                <div className="quote__by">
                  <span className="quote__av">
                    <Image width={40} height={40} src={item.avatar} alt={item.name} />
                  </span>
                  <span>
                    <b>{item.name}</b>
                    <br />
                    <span>{t(`commonTestimonials.${item.roleKey}`)}</span>
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Local / map / NAP */}
        <section className="section wrap">
          <div className="local">
            <div className="local__map">
              <Map />
            </div>
            <div className="local__info">
              <p className="eyebrow" style={{ color: "#fff", opacity: 0.7 }}>
                {t("mk.home.findUsEyebrow")}
              </p>
              <h2>{t("mk.home.findUsHeading")}</h2>
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
                    {t("mk.home.napPhone")}
                  </div>
                </div>
                <div className="nap__row">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" strokeLinecap="round" />
                  </svg>
                  <div>
                    <b>{t("mk.home.napHoursLabel")}</b>
                    {t("footer.openingHoursValue")}
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", gap: 10, marginTop: 26, flexWrap: "wrap" }}>
                <a className="btn btn--primary" href={MAPS_QUERY_URL} target="_blank" rel="noopener noreferrer">
                  {t("about.getDirection")}
                </a>
                <a
                  className="btn btn--wa"
                  href={waLink("Hi Motor Kekal, saya nak datang tengok motor. Boleh bagi lokasi?")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("mk.home.napWhatsappLocation")}
                </a>
                <a
                  className="btn"
                  style={{ background: "#1877f2", color: "#fff" }}
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FbIcon />
                  {t("mk.visitFacebook")}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA band */}
        <section className="section--tight wrap">
          <div className="cta-band">
            <h2>{t("mk.home.ctaBandHeading")}</h2>
            <p>{t("mk.home.ctaBandBody")}</p>
            <a
              className="btn btn--wa btn--lg"
              href={waLink("Hi Motor Kekal, saya berminat nak beli motor. Boleh bagi cadangan?")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WaIcon />
              {t("mk.home.ctaBandButton")}
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
      <MobileBar />
    </div>
  );
};

export default Home;
