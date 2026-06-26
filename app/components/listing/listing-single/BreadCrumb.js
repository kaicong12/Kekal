import { useTranslations } from "next-intl";

const BreadCrumb = () => {
  const t = useTranslations("detail");
  return (
    <ol className="breadcrumb float-start">
      <li className="breadcrumb-item">
        <a href="/#">{t("breadcrumbHome")}</a>
      </li>
      <li className="breadcrumb-item active" aria-current="page">
        {t("breadcrumbMotorcycles")}
      </li>
    </ol>
  );
};

export default BreadCrumb;
