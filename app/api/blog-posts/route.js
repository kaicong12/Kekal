import { NextResponse } from "next/server";
import {
  listPublishedBlogPostsPg,
  listAllBlogPostsPg,
  getBlogPostBySlugPg,
  createBlogPostPg,
} from "@/utils/blogPg";
import { verifyAuthToken } from "@/utils/firebaseAdmin";
import { CATALOG_CACHE_HEADERS } from "@/utils/cacheHeaders";
import { revalidateBlogSurfaces } from "@/utils/blogRevalidate";
import {
  parseSlug,
  parseCategory,
  parseTags,
  parseTranslations,
  parseSourceLocale,
} from "@/utils/blogPayload";
import { BLOG_DEFAULT_LOCALE } from "@/utils/blogContent";

export const dynamic = "force-dynamic";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);

    if (searchParams.get("all") === "true") {
      const auth = await verifyAuthToken(request);
      if (auth.error) return auth.error;
      return NextResponse.json({ posts: await listAllBlogPostsPg() });
    }

    const posts = await listPublishedBlogPostsPg({
      locale: searchParams.get("locale") || BLOG_DEFAULT_LOCALE,
      category: searchParams.get("category") || undefined,
      limit: Number(searchParams.get("limit")) || undefined,
    });

    return NextResponse.json({ posts }, { headers: CATALOG_CACHE_HEADERS });
  } catch (error) {
    console.error(
      JSON.stringify({
        level: "error",
        msg: "failed to fetch blog posts",
        err: { message: error.message, code: error.code, stack: error.stack },
      })
    );
    return NextResponse.json(
      { error: "Failed to fetch blog posts" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  const auth = await verifyAuthToken(request);
  if (auth.error) return auth.error;

  try {
    const body = await request.json();

    const slug = parseSlug(body.slug);
    if (slug.error) return NextResponse.json({ error: slug.error }, { status: 400 });

    const category = parseCategory(body.category);
    if (category.error)
      return NextResponse.json({ error: category.error }, { status: 400 });

    const sourceLocale = parseSourceLocale(body.sourceLocale);
    if (sourceLocale.error)
      return NextResponse.json({ error: sourceLocale.error }, { status: 400 });

    const tags = parseTags(body);
    if (tags.error) return NextResponse.json({ error: tags.error }, { status: 400 });

    const translations = parseTranslations(body);
    if (translations.error)
      return NextResponse.json({ error: translations.error }, { status: 400 });

    const hasSource = translations.data?.some(
      (t) => t.locale === sourceLocale.data
    );
    if (!hasSource) {
      return NextResponse.json(
        { error: `A post needs content in its source locale (${sourceLocale.data})` },
        { status: 400 }
      );
    }

    if (await getBlogPostBySlugPg(slug.data)) {
      return NextResponse.json({ error: "Slug already in use" }, { status: 409 });
    }

    const status = body.status === "PUBLISHED" ? "PUBLISHED" : "DRAFT";

    const post = await createBlogPostPg({
      slug: slug.data,
      category: category.data,
      sourceLocale: sourceLocale.data,
      tags: tags.data ?? null,
      coverImageUrl: body.coverImageUrl || null,
      status,
      publishedAt: status === "PUBLISHED" ? new Date() : null,
      translations: { create: translations.data },
    });

    console.log(
      JSON.stringify({
        level: "info",
        msg: "blog post created",
        actor: auth.decoded.email,
        postId: post.id,
        slug: post.slug,
        locales: translations.data.map((t) => t.locale),
      })
    );

    revalidateBlogSurfaces();
    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    // Backstop for the slug race the pre-check above cannot close.
    if (error.code === "P2002") {
      return NextResponse.json({ error: "Slug already in use" }, { status: 409 });
    }
    console.error(
      JSON.stringify({
        level: "error",
        msg: "failed to create blog post",
        actor: auth.decoded.email,
        err: { message: error.message, code: error.code, stack: error.stack },
      })
    );
    return NextResponse.json(
      { error: "Failed to create blog post" },
      { status: 500 }
    );
  }
}
