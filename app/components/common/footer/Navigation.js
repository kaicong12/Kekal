import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const Navigation = () => {
  const t = useTranslations("footer");
  const links = [
    { label: t("navHome"), path: "/" },
    { label: t("navListings"), path: "/listing" },
    { label: t("navPromotions"), path: "/promotions" },
    { label: t("navServices"), path: "/service" },
    { label: t("navAbout"), path: "/about-us" },
  ];

  return (
    <>
      {links.map((link, index) => (
        <li className="list-inline-item" key={index}>
          <Link href={link.path}>{link.label}</Link>
        </li>
      ))}
    </>
  );
};

export default Navigation;
