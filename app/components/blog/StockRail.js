import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import RelatedBikes from "@/app/components/motorkekal/RelatedBikes";
import { fetchUniqueBrandSetPg } from "@/utils/dbPg";

// Lead with the post's brand if we stock it, so an R15 review surfaces Yamahas.
async function brandFromTags(tags = []) {
  if (!tags.length) return undefined;
  try {
    const brands = await fetchUniqueBrandSetPg();
    const wanted = tags.map((tag) => tag.trim().toLowerCase()).filter(Boolean);
    for (const brand of brands) {
      const normalized = brand.toLowerCase();
      if (wanted.some((tag) => normalized === tag || normalized.endsWith(tag))) {
        return brand;
      }
    }
  } catch (error) {
    console.error("Failed to match post tags to a brand:", error);
  }
  return undefined;
}

const StockRail = async ({ tags = [] }) => {
  const t = await getTranslations("blog");
  const brand = await brandFromTags(tags);

  return (
    <section className="section section--tight wrap post-stock">
      <div className="section-head">
        <h2>{t("stockHeading")}</h2>
        <p>{t("stockIntro")}</p>
      </div>
      <RelatedBikes brand={brand} fill />
      <p className="post-stock__cta">
        <Link href="/listing" className="btn btn--outline">
          {t("stockCta")}
        </Link>
      </p>
    </section>
  );
};

export default StockRail;
