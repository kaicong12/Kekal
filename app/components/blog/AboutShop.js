import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const AboutShop = () => {
  const t = useTranslations("blog");

  return (
    <aside className="card card--pad post-about">
      <div className="brand__mark post-about__mark" aria-hidden="true">
        M<span>K</span>
      </div>
      <div>
        <h2 className="post-about__title">{t("aboutHeading")}</h2>
        <p className="post-about__body">{t("aboutBody")}</p>
        <Link href="/about-us" className="post-about__link">
          {t("aboutCta")} →
        </Link>
      </div>
    </aside>
  );
};

export default AboutShop;
