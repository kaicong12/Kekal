import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import SiteHeader from "@/app/components/motorkekal/SiteHeader";
import SiteFooter from "@/app/components/motorkekal/SiteFooter";
import MobileBar from "@/app/components/motorkekal/MobileBar";
import Pill from "@/app/components/motorkekal/Pill";
import { waLink } from "@/app/components/motorkekal/waLink";
import { localeAlternates } from "@/utils/seoAlternates";

export function generateMetadata({ params: { locale } }) {
  return {
    title: "Servis Motor Johor Bahru - Yamaha, Kawasaki Service Center",
    description:
      "Pusat servis motor di Johor Bahru. Pembiayaan mudah lulus, tukar-beli, waranti & servis bengkel sendiri, insurans & renew cukai jalan. Semua bawah satu bumbung.",
    keywords: [
      "pembiayaan motosikal johor bahru",
      "loan motor mudah lulus",
      "trade-in motor johor bahru",
      "servis motor johor bahru",
      "insurans motor",
      "renew cukai jalan johor",
    ],
    alternates: localeAlternates("/service", locale),
  };
}

const IMG_A =
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const IMG_B =
  "https://images.unsplash.com/photo-1694274855681-1b12cd585066?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Media = ({ src, alt }) => (
  <div className="split__media">
    <Image width={560} height={420} src={src} alt={alt} />
  </div>
);

const Ticks = ({ items }) => (
  <ul className="ticks">
    {items.map((item, i) => (
      <li key={i}>
        <Check />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const Service = ({ params: { locale } }) => {
  setRequestLocale(locale);
  const t = useTranslations("mk.services");

  const fin = t.raw("financing");
  const trade = t.raw("tradein");
  const warranty = t.raw("warranty");
  const insurance = t.raw("insurance");
  const faq = t.raw("faq");

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
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 24 }}>
            <a className="chip" href="#financing">{fin.title}</a>
            <a className="chip" href="#tradein">{trade.title}</a>
            <a className="chip" href="#warranty">{warranty.title}</a>
            <a className="chip" href="#insurance">{insurance.title}</a>
          </div>
        </section>

        {/* Financing */}
        <section className="section wrap" id="financing" style={{ scrollMarginTop: 90 }}>
          <div className="split">
            <div>
              <Pill status="live">{fin.badge}</Pill>
              <h2 style={{ fontSize: "clamp(26px,3.4vw,36px)", marginTop: 14 }}>{fin.title}</h2>
              <p className="muted" style={{ marginTop: 14, fontSize: "16.5px" }}>{fin.body}</p>
              <Ticks items={fin.ticks} />
              <a
                className="btn btn--wa btn--lg"
                style={{ marginTop: 24 }}
                href={waLink("Hi Motor Kekal, saya nak semak kelayakan loan motor.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                {fin.cta}
              </a>
            </div>
            <Media src={IMG_A} alt={fin.title} />
          </div>
        </section>

        <hr className="divider" />

        {/* Trade-in */}
        <section className="section wrap" id="tradein" style={{ scrollMarginTop: 90 }}>
          <div className="split">
            <Media src={IMG_B} alt={trade.title} />
            <div>
              <p className="eyebrow">{trade.eyebrow}</p>
              <h2 style={{ fontSize: "clamp(26px,3.4vw,36px)", marginTop: 10 }}>{trade.title}</h2>
              <p className="muted" style={{ marginTop: 14, fontSize: "16.5px" }}>{trade.body}</p>
              <div className="steps" style={{ gridTemplateColumns: "1fr 1fr", marginTop: 24 }}>
                {trade.steps.map((step, i) => (
                  <div className="step" key={i}>
                    <div className="step__n">{i + 1}</div>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                ))}
              </div>
              <a
                className="btn btn--wa btn--lg"
                style={{ marginTop: 24 }}
                href={waLink("Hi Motor Kekal, saya nak trade-in motor saya. Model ____ tahun ____.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                {trade.cta}
              </a>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* Warranty & service */}
        <section className="section wrap" id="warranty" style={{ scrollMarginTop: 90 }}>
          <div className="split">
            <div>
              <p className="eyebrow">{warranty.eyebrow}</p>
              <h2 style={{ fontSize: "clamp(26px,3.4vw,36px)", marginTop: 10 }}>{warranty.title}</h2>
              <p className="muted" style={{ marginTop: 14, fontSize: "16.5px" }}>{warranty.body}</p>
              <Ticks items={warranty.ticks} />
              <a
                className="btn btn--ink btn--lg"
                style={{ marginTop: 24 }}
                href={waLink("Hi Motor Kekal, saya nak book servis motor.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                {warranty.cta}
              </a>
            </div>
            <Media src={IMG_A} alt={warranty.title} />
          </div>
        </section>

        <hr className="divider" />

        {/* Insurance & road tax */}
        <section className="section wrap" id="insurance" style={{ scrollMarginTop: 90 }}>
          <div className="split">
            <Media src={IMG_B} alt={insurance.title} />
            <div>
              <Pill status="scheduled">{insurance.badge}</Pill>
              <h2 style={{ fontSize: "clamp(26px,3.4vw,36px)", marginTop: 14 }}>{insurance.title}</h2>
              <p className="muted" style={{ marginTop: 14, fontSize: "16.5px" }}>{insurance.body}</p>
              <Ticks items={insurance.ticks} />
              <a
                className="btn btn--wa btn--lg"
                style={{ marginTop: 24 }}
                href={waLink("Hi Motor Kekal, saya nak renew insurans & cukai jalan. No. plat ____.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                {insurance.cta}
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section--tight wrap">
          <div className="section-head">
            <p className="eyebrow">{t("faqEyebrow")}</p>
            <h2>{t("faqTitle")}</h2>
          </div>
          <div className="faq">
            {faq.map((item, i) => (
              <details key={i} open={i === 0}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA band */}
        <section className="section--tight wrap">
          <div className="cta-band">
            <h2>{t("ctaHeading")}</h2>
            <p>{t("ctaBody")}</p>
            <a
              className="btn btn--wa btn--lg"
              href={waLink("Hi Motor Kekal, saya ada soalan pasal perkhidmatan.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("ctaButton")}
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
      <MobileBar waMessage="Hi Motor Kekal, saya nak tanya pasal perkhidmatan." />
    </div>
  );
};

export default Service;
