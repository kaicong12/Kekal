import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { formatPostDate, readingMinutes } from "@/utils/blogSeo";

const PostCard = ({ post }) => {
  const t = useTranslations("blog");
  const locale = useLocale();

  return (
    <article className="card card--hover post-card">
      <Link href={`/blog/${post.slug}`} className="post-card__link">
        {post.coverImageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className="post-card__media"
            src={post.coverImageUrl}
            alt={post.title}
            loading="lazy"
          />
        ) : (
          <div className="post-card__media post-card__media--empty" />
        )}
        <div className="post-card__body">
          <span className="post-chip">{t(`categories.${post.category}`)}</span>
          <h2 className="post-card__title">{post.title}</h2>
          <p className="post-card__excerpt">{post.excerpt}</p>
          <p className="post-card__meta muted">
            {formatPostDate(post.publishedAt, locale)} ·{" "}
            {t("readingTime", { minutes: readingMinutes(post.plainText) })}
          </p>
        </div>
      </Link>
    </article>
  );
};

export default PostCard;
