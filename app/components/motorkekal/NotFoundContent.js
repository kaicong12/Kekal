import SiteHeader from "@/app/components/motorkekal/SiteHeader";
import SiteFooter from "@/app/components/motorkekal/SiteFooter";
import MobileBar from "@/app/components/motorkekal/MobileBar";
import { waLink, WaIcon } from "@/app/components/motorkekal/waLink";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

const BikeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="6.5" cy="17" r="3" />
    <circle cx="17.5" cy="17" r="3" />
    <path
      d="M6.5 17l3-8h4l4 8M9.5 9l-2-3h-3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const TagIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path
      d="M20.6 13.4l-7.2 7.2a2 2 0 01-2.8 0L3 13V3h10l7.6 7.6a2 2 0 010 2.8z"
      strokeLinejoin="round"
    />
    <circle cx="7.5" cy="7.5" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

const WrenchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path
      d="M14.7 6.3a5 5 0 00-7 7l1 1 6-6zM9 17l6-6 4 4a3 3 0 01-4 4z"
      strokeLinejoin="round"
    />
  </svg>
);

const WA_MESSAGE =
  "Hi Motor Kekal, saya cari sesuatu di website tapi tak jumpa. Boleh tolong?";

// Shared 404 UI, rendered both by the [...not_found] catch-all route and by
// the not-found.js boundary that catches programmatic notFound() calls.
const NotFoundContent = () => {
  const t = useTranslations("notFound");

  const quickLinks = [
    { href: "/listing", icon: <BikeIcon />, title: t("linkBikes"), sub: t("linkBikesSub") },
    { href: "/promotions", icon: <TagIcon />, title: t("linkPromos"), sub: t("linkPromosSub") },
    { href: "/service", icon: <WrenchIcon />, title: t("linkServices"), sub: t("linkServicesSub") },
  ];

  return (
    <div className="mk-site">
      <SiteHeader />

      <main>
        <section className="nf wrap">
          <div className="nf__grid">
            <div>
              <div className="nf__code">
                4<em>0</em>4
              </div>
              <div className="nf__skid"></div>
              <p className="muted" style={{ marginTop: 22, fontSize: 14 }}>
                {t("caption")}
              </p>
            </div>
            <div>
              <p className="eyebrow">{t("eyebrow")}</p>
              <h1>{t("title")}</h1>
              <p className="nf__sub">{t("description")}</p>

              <div className="nf__links">
                {quickLinks.map((link) => (
                  <Link className="nf__link" href={link.href} key={link.href}>
                    <span className="svc-card__ico">{link.icon}</span>
                    <span>
                      <b>{link.title}</b>
                      <span>{link.sub}</span>
                    </span>
                    <span className="nf__arrow">→</span>
                  </Link>
                ))}
              </div>

              <div className="nf__cta">
                <Link className="btn btn--ink" href="/">
                  ← {t("backHome")}
                </Link>
                <a
                  className="btn btn--wa"
                  href={waLink(WA_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WaIcon />
                  {t("askUs")}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <MobileBar waMessage={WA_MESSAGE} />
    </div>
  );
};

export default NotFoundContent;
