import prisma from "@/utils/prisma";
import { memoDuringBuild } from "@/utils/buildCache";

const blogPostInclude = { translations: true };

const splitTags = (tags) =>
  tags
    ? tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean)
    : [];

// Collapses translations down to one locale. Returns null when the locale has no
// row, which is how "not translated" becomes a 404.
function formatBlogPost(post, locale) {
  if (!post) return null;
  const translation = post.translations?.find((t) => t.locale === locale);
  if (!translation) return null;

  return {
    id: post.id,
    slug: post.slug,
    category: post.category,
    tags: splitTags(post.tags),
    coverImageUrl: post.coverImageUrl,
    status: post.status,
    sourceLocale: post.sourceLocale,
    publishedAt: post.publishedAt,
    createdAt: post.createdAt,
    updatedAt: post.updatedAt,
    locale,
    title: translation.title,
    excerpt: translation.excerpt,
    body: translation.body,
    plainText: translation.plainText,
    metaTitle: translation.metaTitle,
    metaDescription: translation.metaDescription,
    translationUpdatedAt: translation.updatedAt,
    availableLocales: (post.translations || []).map((t) => t.locale).sort(),
  };
}

// Admin shape: every locale at once, keyed, so the form can hydrate all tabs.
function formatBlogPostAdmin(post) {
  if (!post) return null;
  const translations = {};
  for (const t of post.translations || []) {
    translations[t.locale] = {
      locale: t.locale,
      title: t.title,
      excerpt: t.excerpt,
      body: t.body,
      metaTitle: t.metaTitle,
      metaDescription: t.metaDescription,
      updatedAt: t.updatedAt,
    };
  }
  return {
    ...post,
    tags: splitTags(post.tags),
    translations,
    availableLocales: Object.keys(translations).sort(),
  };
}

const publishedWhere = (locale) => ({
  status: "PUBLISHED",
  publishedAt: { lte: new Date() },
  ...(locale ? { translations: { some: { locale } } } : {}),
});

export const listPublishedBlogPostsPg = memoDuringBuild(
  async ({ locale, category, limit } = {}) => {
    const posts = await prisma.blogPost.findMany({
      where: { ...publishedWhere(locale), ...(category ? { category } : {}) },
      include: blogPostInclude,
      orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }],
      ...(limit ? { take: limit } : {}),
    });
    return posts.map((post) => formatBlogPost(post, locale)).filter(Boolean);
  }
);

export const getPublishedBlogPostBySlugPg = memoDuringBuild(
  async (slug, locale) => {
    const post = await prisma.blogPost.findUnique({
      where: { slug },
      include: blogPostInclude,
    });
    if (!post || post.status !== "PUBLISHED") return null;
    if (!post.publishedAt || post.publishedAt > new Date()) return null;
    return formatBlogPost(post, locale);
  }
);

// Same-category first, topped up with recent so the rail is never half-empty.
export const getRelatedBlogPostsPg = memoDuringBuild(
  async ({ locale, category, excludeId, limit = 3 } = {}) => {
    const pick = (posts) =>
      posts.filter((post) => post && post.id !== excludeId);

    const sameCategory = pick(
      await listPublishedBlogPostsPg({ locale, category, limit: limit + 1 })
    );
    if (sameCategory.length >= limit) return sameCategory.slice(0, limit);

    const seen = new Set(sameCategory.map((post) => post.id));
    const recent = pick(
      await listPublishedBlogPostsPg({ locale, limit: limit + sameCategory.length + 1 })
    ).filter((post) => !seen.has(post.id));

    return [...sameCategory, ...recent].slice(0, limit);
  }
);

// Explicit select so the sitemap never pulls every post's body JSON.
export const listBlogSitemapEntriesPg = memoDuringBuild(async () => {
  const posts = await prisma.blogPost.findMany({
    where: publishedWhere(),
    select: {
      slug: true,
      updatedAt: true,
      translations: { select: { locale: true, updatedAt: true } },
    },
  });
  return posts.map((post) => ({
    slug: post.slug,
    updatedAt: post.updatedAt,
    locales: post.translations.map((t) => ({
      locale: t.locale,
      updatedAt: t.updatedAt,
    })),
  }));
});

export const listAllBlogPostsPg = async () => {
  const posts = await prisma.blogPost.findMany({
    include: blogPostInclude,
    orderBy: { updatedAt: "desc" },
  });
  return posts.map(formatBlogPostAdmin);
};

export const getBlogPostByIdPg = async (id) => {
  const post = await prisma.blogPost.findUnique({
    where: { id },
    include: blogPostInclude,
  });
  return formatBlogPostAdmin(post);
};

export const getBlogPostBySlugPg = async (slug) => {
  const post = await prisma.blogPost.findUnique({
    where: { slug },
    select: { id: true, slug: true },
  });
  return post;
};

export const createBlogPostPg = async (data) => {
  const post = await prisma.blogPost.create({ data, include: blogPostInclude });
  return formatBlogPostAdmin(post);
};

// Translations are upserted per locale rather than replaced wholesale: saving one
// tab must not delete the others, and each row's updatedAt is what flags a stale
// translation in the admin.
export const updateBlogPostPg = async (id, { translations, deleteLocales, ...data }) => {
  const writes = [];

  if (Object.keys(data).length) {
    writes.push(prisma.blogPost.update({ where: { id }, data }));
  }

  for (const translation of translations || []) {
    const { locale, ...values } = translation;
    writes.push(
      prisma.blogPostTranslation.upsert({
        where: { postId_locale: { postId: id, locale } },
        create: { ...values, locale, postId: id },
        update: values,
      })
    );
  }

  if (deleteLocales?.length) {
    writes.push(
      prisma.blogPostTranslation.deleteMany({
        where: { postId: id, locale: { in: deleteLocales } },
      })
    );
  }

  if (writes.length) await prisma.$transaction(writes);

  return getBlogPostByIdPg(id);
};

export const deleteBlogPostPg = async (id) =>
  prisma.blogPost.delete({ where: { id } });
