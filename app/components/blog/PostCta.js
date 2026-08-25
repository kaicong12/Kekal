import { useTranslations } from "next-intl";
import { waLink, WaIcon } from "@/app/components/motorkekal/waLink";

const PostCta = ({ title }) => {
  const t = useTranslations("blog");

  return (
    <aside className="card card--pad post-cta">
      <h2 className="post-cta__title">{t("ctaHeading")}</h2>
      <p className="post-cta__body">{t("ctaBody")}</p>
      <a
        className="btn btn--wa"
        href={waLink(t("ctaWaMessage", { title }))}
        target="_blank"
        rel="noopener noreferrer"
      >
        <WaIcon />
        {t("ctaButton")}
      </a>
    </aside>
  );
};

export default PostCta;
