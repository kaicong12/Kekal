import SiteHeader from "@/app/components/motorkekal/SiteHeader";
import SiteFooter from "@/app/components/motorkekal/SiteFooter";
import MobileBar from "@/app/components/motorkekal/MobileBar";
import Breadcrumb from "@/app/components/motorkekal/Breadcrumb";
import DetailGallery from "@/app/components/motorkekal/DetailGallery";
import BuyBox from "@/app/components/motorkekal/BuyBox";
import QuickSpec from "@/app/components/motorkekal/QuickSpec";
import SpecTable from "@/app/components/motorkekal/SpecTable";
import FinanceCalculator from "@/app/components/motorkekal/FinanceCalculator";
import RelatedBikes from "@/app/components/motorkekal/RelatedBikes";
import { waLink, WaIcon, FbIcon, FACEBOOK_URL } from "@/app/components/motorkekal/waLink";
import { Link } from "@/i18n/navigation";
import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";

import { getMotorcycleByIdPg as getMotorcycleById } from "@/utils/dbPg";
import { extractIdFromSlug, toMotorcycleSlug } from "@/utils/slug";
import { localeAlternates } from "@/utils/seoAlternates";
import ProductSchema from "@/app/components/seo/ProductSchema";
import BreadcrumbSchema from "@/app/components/seo/BreadcrumbSchema";

export async function generateMetadata({ params }) {
  try {
    const id = extractIdFromSlug(params.slug);
    if (!id) {
      return {
        title: "Motorcycle Not Found - Perniagaan Motor Kekal",
        description: "The requested motorcycle listing could not be found.",
      };
    }
    const motorcycleData = await getMotorcycleById(id);

    if (!motorcycleData) {
      return {
        title: "Motorcycle Not Found - Perniagaan Motor Kekal",
        description: "The requested motorcycle listing could not be found.",
      };
    }

    const slug = toMotorcycleSlug(motorcycleData);

    const firstImage = motorcycleData.images?.[0]?.url;

    return {
      title: `${motorcycleData.name} - RM${motorcycleData.price}`,
      description: `${motorcycleData.name} for sale at RM${
        motorcycleData.price
      }. ${
        motorcycleData.description ||
        "Quality motorcycle from trusted dealer in Johor Bahru, Johor Jaya."
      }`,
      keywords: [
        motorcycleData.brand,
        motorcycleData.model,
        motorcycleData.name,
        "kedai motor",
        "motor shop",
        "motorcycle",
        "motor shop Johor Bahru",
        "motor shop Johor Jaya",
        "kedai motor johor bahru",
        "kedai motor johor jaya",
        `${motorcycleData.brand} dealer`,
      ],
      alternates: localeAlternates(`/motorcycle/${slug}`, params.locale),
      openGraph: {
        title: `${motorcycleData.name} - RM${motorcycleData.price}`,
        description: `${motorcycleData.name} for sale at RM${motorcycleData.price}. Trusted motorcycle dealer in Johor Bahru.`,
        url: `https://www.motorkekal.com/motorcycle/${slug}`,
        siteName: "Perniagaan Motor Kekal",
        type: "website",
        ...(firstImage
          ? {
              images: [
                {
                  url: firstImage,
                  alt: `${motorcycleData.name} motorcycle`,
                },
              ],
            }
          : {}),
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
        },
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Perniagaan Motor Kekal - Motorcycle Dealer",
      description: "Authorized motorcycle dealer in Johor Bahru",
    };
  }
}

const MotorcyclePage = async ({ params }) => {
  setRequestLocale(params.locale);
  const t = await getTranslations("mk.detail");
  const tDetail = await getTranslations("detail");
  const tLoan = await getTranslations("loanCalculator");
  const tMk = await getTranslations("mk");
  const tNav = await getTranslations("nav");

  const id = extractIdFromSlug(params.slug);
  if (!id) notFound();
  const motorcycleData = await getMotorcycleById(id);
  if (!motorcycleData) notFound();

  const tags = (motorcycleData.tags || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
    .slice(0, 4);

  const ctaMessage = `Hi Motor Kekal, saya nak datang tengok ${motorcycleData.brand} ${motorcycleData.name}.`;

  return (
    <div className="mk-site">
      <ProductSchema motorcycle={motorcycleData} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.motorkekal.com" },
          { name: "Listing", url: "https://www.motorkekal.com/listing" },
          { name: motorcycleData.name },
        ]}
      />

      <SiteHeader />

      <main>
        <div className="wrap">
          <Breadcrumb
            items={[
              { label: tDetail("breadcrumbHome"), href: "/" },
              { label: tDetail("breadcrumbMotorcycles"), href: "/listing" },
              { label: motorcycleData.name },
            ]}
          />
        </div>

        {/* Gallery + buy box */}
        <section className="wrap" style={{ paddingTop: 22, paddingBottom: 60 }}>
          <div className="detail-grid">
            <div>
              <DetailGallery
                brand={motorcycleData.brand}
                modelName={motorcycleData.name}
                images={motorcycleData.images ?? []}
              />
              <QuickSpec motorcycle={motorcycleData} />
            </div>
            <BuyBox motorcycle={motorcycleData} />
          </div>
        </section>

        <hr className="divider" />

        {/* Overview + specifications */}
        <section className="section wrap">
          <div className="split" style={{ alignItems: "start" }}>
            <div>
              <p className="eyebrow">{t("aboutHeading")}</p>
              <h2 style={{ fontSize: "clamp(24px,3vw,32px)", marginTop: 10 }}>
                {motorcycleData.brand} {motorcycleData.name}
              </h2>
              {motorcycleData.description ? (
                <p className="muted" style={{ marginTop: 14, fontSize: 16 }}>
                  {motorcycleData.description}
                </p>
              ) : null}
              {tags.length > 0 ? (
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 22 }}>
                  {tags.map((tag) => (
                    <span className="chip" key={tag} style={{ cursor: "default" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
            <div className="card card--pad">
              <SpecTable motorcycle={motorcycleData} />
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* Finance calculator */}
        <section className="section wrap" id="finance" style={{ scrollMarginTop: 90 }}>
          <div className="section-head">
            <p className="eyebrow">{tLoan("title")}</p>
            <h2>{tLoan("title")}</h2>
            <p>{tLoan("subtitle")}</p>
          </div>
          <FinanceCalculator motorcycle={motorcycleData} />
        </section>

        <hr className="divider" />

        {/* Related bikes */}
        <section className="section wrap">
          <div className="listing-toolbar">
            <div className="section-head" style={{ marginBottom: 0 }}>
              <p className="eyebrow">{t("mayLike")}</p>
              <h2>{tDetail("relatedBikes")}</h2>
            </div>
            <Link className="btn btn--outline" href="/listing">
              {tNav("allMotorcycles")} →
            </Link>
          </div>
          <RelatedBikes brand={motorcycleData.brand} currentId={id} />
        </section>

        {/* CTA band */}
        <section className="section--tight wrap">
          <div className="cta-band">
            <h2>{t("ctaTitle")}</h2>
            <p>{t("ctaText")}</p>
            <div className="cta-band__actions">
              <a
                className="btn btn--wa btn--lg"
                href={waLink(ctaMessage)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WaIcon />
                {t("ctaWhatsApp")}
              </a>
              <a
                className="btn btn--fb btn--lg"
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FbIcon />
                {tMk("visitFacebook")}
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

      <MobileBar
        waMessage={`Hi Motor Kekal, saya berminat ${motorcycleData.brand} ${motorcycleData.name}.`}
      />
    </div>
  );
};

export default MotorcyclePage;
