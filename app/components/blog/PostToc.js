import { useTranslations } from "next-intl";
import { blogHeadings } from "@/utils/blogToc";

const PostToc = ({ doc }) => {
  const t = useTranslations("blog");
  // Two entries is a list, not a table of contents.
  const headings = blogHeadings(doc).filter(({ level }) => level === 2);
  if (headings.length < 3) return null;

  return (
    <nav className="post-toc" aria-labelledby="post-toc-title">
      <p className="post-toc__title" id="post-toc-title">
        {t("onThisPage")}
      </p>
      <ol className="post-toc__list">
        {headings.map(({ id, text }) => (
          <li key={id}>
            <a href={`#${id}`}>{text}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default PostToc;
