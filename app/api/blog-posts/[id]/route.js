import { NextResponse } from "next/server";
import {
  getBlogPostByIdPg,
  getBlogPostBySlugPg,
  updateBlogPostPg,
  deleteBlogPostPg,
} from "@/utils/blogPg";
import { verifyAuthToken } from "@/utils/firebaseAdmin";
import { revalidateBlogSurfaces } from "@/utils/blogRevalidate";
import {
  parseSlug,
  parseCategory,
  parseTags,
  parseTranslations,
  parseSourceLocale,
} from "@/utils/blogPayload";
import { BLOG_LOCALES } from "@/utils/blogContent";

export const dynamic = "force-dynamic";

// Unlike the promotions equivalent this GET requires auth: it is the only way to
// read an unpublished draft, so leaving it open would publish every draft.
export async function GET(request, { params }) {
  const auth = await verifyAuthToken(request);
  if (auth.error) return auth.error;

  try {
    const { id } = await params;
    const post = await getBlogPostByIdPg(id);
    if (!post) {
      return NextResponse.json({ error: "Blog post not found" }, { status: 404 });
    }
    return NextResponse.json(post);
  } catch (error) {
    console.error(
      JSON.stringify({
        level: "error",
        msg: "failed to fetch blog post",
        err: { message: error.message, code: error.code, stack: error.stack },
      })
    );
    return NextResponse.json(
      { error: "Failed to fetch blog post" },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  const auth = await verifyAuthToken(request);
  if (auth.error) return auth.error;

  try {
    const body = await request.json();
    const { id } = await params;

    const existing = await getBlogPostByIdPg(id);
    if (!existing) {
      return NextResponse.json({ error: "Blog post not found" }, { status: 404 });
    }

    const data = {};

    if (body.slug !== undefined) {
      const slug = parseSlug(body.slug);
      if (slug.error)
        return NextResponse.json({ error: slug.error }, { status: 400 });
      if (slug.data !== existing.slug) {
        const clash = await getBlogPostBySlugPg(slug.data);
        if (clash && clash.id !== id) {
          return NextResponse.json({ error: "Slug already in use" }, { status: 409 });
        }
      }
      data.slug = slug.data;
    }

    if (body.category !== undefined) {
      const category = parseCategory(body.category);
      if (category.error)
        return NextResponse.json({ error: category.error }, { status: 400 });
      data.category = category.data;
    }

    if (body.sourceLocale !== undefined) {
      const sourceLocale = parseSourceLocale(body.sourceLocale);
      if (sourceLocale.error)
        return NextResponse.json({ error: sourceLocale.error }, { status: 400 });
      data.sourceLocale = sourceLocale.data;
    }

    if (body.tags !== undefined) {
      const tags = parseTags(body);
      if (tags.error)
        return NextResponse.json({ error: tags.error }, { status: 400 });
      data.tags = tags.data ?? null;
    }

    if (body.coverImageUrl !== undefined) {
      data.coverImageUrl = body.coverImageUrl || null;
    }

    if (body.status !== undefined) {
      const status = body.status === "PUBLISHED" ? "PUBLISHED" : "DRAFT";
      data.status = status;
      // Unpublishing keeps the original date so re-publishing doesn't reset it.
      if (status === "PUBLISHED" && !existing.publishedAt) {
        data.publishedAt = new Date();
      }
    }

    const translations = parseTranslations(body);
    if (translations.error)
      return NextResponse.json({ error: translations.error }, { status: 400 });

    let deleteLocales;
    if (body.deleteLocales !== undefined) {
      if (!Array.isArray(body.deleteLocales)) {
        return NextResponse.json(
          { error: "deleteLocales must be an array" },
          { status: 400 }
        );
      }
      deleteLocales = body.deleteLocales.filter((locale) =>
        BLOG_LOCALES.includes(locale)
      );
    }

    // A published post must keep content in its source locale.
    const effectiveSource = data.sourceLocale ?? existing.sourceLocale;
    const willHaveSource =
      translations.data?.some((t) => t.locale === effectiveSource) ??
      Boolean(existing.translations[effectiveSource]);
    if (!willHaveSource || deleteLocales?.includes(effectiveSource)) {
      return NextResponse.json(
        { error: `A post needs content in its source locale (${effectiveSource})` },
        { status: 400 }
      );
    }

    const post = await updateBlogPostPg(id, {
      ...data,
      translations: translations.data,
      deleteLocales,
    });

    console.log(
      JSON.stringify({
        level: "info",
        msg: "blog post updated",
        actor: auth.decoded.email,
        postId: id,
        fields: Object.keys(data),
        locales: (translations.data || []).map((t) => t.locale),
      })
    );

    revalidateBlogSurfaces();
    return NextResponse.json(post);
  } catch (error) {
    if (error.code === "P2002") {
      return NextResponse.json({ error: "Slug already in use" }, { status: 409 });
    }
    console.error(
      JSON.stringify({
        level: "error",
        msg: "failed to update blog post",
        actor: auth.decoded.email,
        err: { message: error.message, code: error.code, stack: error.stack },
      })
    );
    return NextResponse.json(
      { error: "Failed to update blog post" },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  const auth = await verifyAuthToken(request);
  if (auth.error) return auth.error;

  try {
    const { id } = await params;

    const existing = await getBlogPostByIdPg(id);
    if (!existing) {
      return NextResponse.json({ error: "Blog post not found" }, { status: 404 });
    }

    await deleteBlogPostPg(id);

    console.log(
      JSON.stringify({
        level: "info",
        msg: "blog post deleted",
        actor: auth.decoded.email,
        postId: id,
        slug: existing.slug,
      })
    );

    revalidateBlogSurfaces();
    return NextResponse.json({ message: "Blog post deleted successfully" });
  } catch (error) {
    console.error(
      JSON.stringify({
        level: "error",
        msg: "failed to delete blog post",
        actor: auth.decoded.email,
        err: { message: error.message, code: error.code, stack: error.stack },
      })
    );
    return NextResponse.json(
      { error: "Failed to delete blog post" },
      { status: 500 }
    );
  }
}
