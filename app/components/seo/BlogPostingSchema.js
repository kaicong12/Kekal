import { truncateHeadline } from "@/utils/blogSeo";

const SITE = "https://www.motorkekal.com";
const PUBLISHER = "Perniagaan Motor Kekal";

const BlogPostingSchema = ({ post, url, description, categoryLabel }) => {
  const data = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: truncateHeadline(post.title),
    description,
    inLanguage: post.locale,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    datePublished: post.publishedAt
      ? new Date(post.publishedAt).toISOString()
      : undefined,
    dateModified: new Date(
      post.translationUpdatedAt || post.updatedAt || post.publishedAt
    ).toISOString(),
    // A single site byline, so the author is the Organization rather than an
    // invented Person. author.url points somewhere that identifies it.
    author: {
      "@type": "Organization",
      name: PUBLISHER,
      url: `${SITE}/about-us`,
    },
    publisher: {
      "@type": "Organization",
      name: PUBLISHER,
      url: SITE,
    },
    ...(post.coverImageUrl ? { image: [post.coverImageUrl] } : {}),
    ...(categoryLabel ? { articleSection: categoryLabel } : {}),
    ...(post.tags?.length ? { keywords: post.tags.join(", ") } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export default BlogPostingSchema;
