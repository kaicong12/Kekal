import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { BLOG_CATEGORIES } from "@/utils/blogContent";

const CategoryNav = ({ active = null }) => {
  const t = useTranslations("blog");

  return (
    <nav className="chips post-catnav" aria-label={t("heading")}>
      <Link href="/blog" className={`chip${active ? "" : " chip--on"}`}>
        {t("allCategories")}
      </Link>
      {BLOG_CATEGORIES.map((category) => (
        <Link
          key={category}
          href={`/blog/category/${category}`}
          className={`chip${active === category ? " chip--on" : ""}`}
        >
          {t(`categories.${category}`)}
        </Link>
      ))}
    </nav>
  );
};

export default CategoryNav;
