import { getTranslations } from "next-intl/server";
import { getRelatedBlogPostsPg } from "@/utils/blogPg";
import PostCard from "./PostCard";

const RelatedPosts = async ({ locale, category, currentId }) => {
  const t = await getTranslations("blog");

  let posts = [];
  try {
    posts = await getRelatedBlogPostsPg({
      locale,
      category,
      excludeId: currentId,
    });
  } catch (error) {
    console.error("Failed to load related posts:", error);
  }

  if (posts.length === 0) return null;

  return (
    <section className="section section--tight wrap post-related">
      <div className="section-head">
        <h2>{t("relatedHeading")}</h2>
      </div>
      <div className="post-grid">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default RelatedPosts;
