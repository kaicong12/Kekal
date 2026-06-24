"use client";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

const MENU_ITEMS = [
  { key: "listings", path: "/listing" },
  { key: "promotions", path: "/promotions" },
  { key: "aboutUs", path: "/about-us" },
  { key: "contact", path: "/contact" },
  { key: "service", path: "/service" },
  { key: "faq", path: "/faq" },
];

const MainMenu = () => {
  const t = useTranslations("nav");
  const path = usePathname();

  return (
    <>
      {MENU_ITEMS.map((menuItem) => (
        <li key={menuItem.key}>
          <Link
            href={menuItem.path}
            className={path === menuItem.path ? "active" : ""}
          >
            <span className="title">{t(menuItem.key)}</span>
          </Link>
        </li>
      ))}
    </>
  );
};

export default MainMenu;
