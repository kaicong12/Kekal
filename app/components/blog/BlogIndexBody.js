import { useTranslations } from "next-intl";
import CategoryNav from "./CategoryNav";
import FeaturedPost from "./FeaturedPost";
import PostCard from "./PostCard";

const BlogIndexBody = ({ heading, intro, posts, activeCategory = null }) => {
  const t = useTranslations("blog");
  const [featured, ...rest] = posts;

  return (
    <section className="section wrap">
      <div className="section-head">
        <h1>{heading}</h1>
        <p>{intro}</p>
      </div>

      <CategoryNav active={activeCategory} />

      {posts.length === 0 ? (
        <p className="muted post-empty">{t("empty")}</p>
      ) : (
        <>
          <FeaturedPost post={featured} />
          {rest.length > 0 && (
            <div className="post-grid">
              {rest.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default BlogIndexBody;
