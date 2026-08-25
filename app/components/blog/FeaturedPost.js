import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { formatPostDate, readingMinutes } from "@/utils/blogSeo";

const FeaturedPost = ({ post }) => {
  const t = useTranslations("blog");
  const locale = useLocale();

  return (
    <article className="card card--hover post-featured">
      <Link href={`/blog/${post.slug}`} className="post-featured__link">
        {post.coverImageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className="post-featured__media"
            src={post.coverImageUrl}
            alt={post.title}
            fetchPriority="high"
          />
        ) : (
          <div className="post-featured__media post-card__media--empty" />
        )}
        <div className="post-featured__body">
          <div className="post-featured__chips">
            <span className="post-chip">{t("featured")}</span>
            <span className="post-chip post-chip--plain">
              {t(`categories.${post.category}`)}
            </span>
          </div>
          <h2 className="post-featured__title">{post.title}</h2>
          <p className="post-featured__excerpt">{post.excerpt}</p>
          <p className="post-card__meta muted">
            {formatPostDate(post.publishedAt, locale)} ·{" "}
            {t("readingTime", { minutes: readingMinutes(post.plainText) })}
          </p>
        </div>
      </Link>
    </article>
  );
};

export default FeaturedPost;
