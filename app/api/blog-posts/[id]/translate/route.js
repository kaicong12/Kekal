import { NextResponse } from "next/server";
import { getBlogPostByIdPg } from "@/utils/blogPg";
import { verifyAuthToken } from "@/utils/firebaseAdmin";
import { translateBlogContent, TranslateError } from "@/utils/blogTranslate";
import { parseTiptapDoc } from "@/utils/blogPayload";
import { BLOG_LOCALES } from "@/utils/blogContent";

export const dynamic = "force-dynamic";
export const maxDuration = 300;

// Returns drafts for the admin to review; it deliberately does not write to the
// database, so a bad translation can never overwrite stored content. Source
// content is read server-side, so the client cannot smuggle in an unvalidated doc.
export async function POST(request, { params }) {
  const auth = await verifyAuthToken(request);
  if (auth.error) return auth.error;

  try {
    const { id } = await params;
    const body = await request.json();

    const post = await getBlogPostByIdPg(id);
    if (!post) {
      return NextResponse.json({ error: "Blog post not found" }, { status: 404 });
    }

    const sourceLocale = body.sourceLocale || post.sourceLocale;
    const source = post.translations[sourceLocale];
    if (!source) {
      return NextResponse.json(
        { error: `Save your ${sourceLocale} content before translating` },
        { status: 400 }
      );
    }

    const targets = (
      Array.isArray(body.targetLocales) ? body.targetLocales : []
    ).filter((locale) => BLOG_LOCALES.includes(locale) && locale !== sourceLocale);

    if (!targets.length) {
      return NextResponse.json(
        { error: "No valid target locales requested" },
        { status: 400 }
      );
    }

    const translations = {};
    const warnings = [];

    for (const targetLocale of targets) {
      const result = await translateBlogContent({
        targetLocale,
        title: source.title,
        excerpt: source.excerpt,
        metaTitle: source.metaTitle,
        metaDescription: source.metaDescription,
        body: source.body,
      });

      // Same gate the save path uses, so a walker bug can't yield an unsaveable doc.
      const validated = parseTiptapDoc(result.body);
      if (validated.error) {
        return NextResponse.json(
          { error: `Translation produced invalid content: ${validated.error}` },
          { status: 502 }
        );
      }

      translations[targetLocale] = {
        title: result.title,
        excerpt: result.excerpt,
        metaTitle: result.metaTitle,
        metaDescription: result.metaDescription,
        body: validated.data,
      };
      warnings.push(...result.warnings.map((message) => ({ locale: targetLocale, message })));
    }

    console.log(
      JSON.stringify({
        level: "info",
        msg: "blog post translated",
        actor: auth.decoded.email,
        postId: id,
        sourceLocale,
        targets,
        warnings: warnings.length,
      })
    );

    return NextResponse.json({ translations, warnings });
  } catch (error) {
    if (error instanceof TranslateError) {
      console.error(
        JSON.stringify({
          level: "error",
          msg: "blog translation failed",
          actor: auth.decoded.email,
          status: error.status,
          err: { message: error.message },
        })
      );
      return NextResponse.json(
        { error: error.message, retryable: error.retryable },
        { status: error.status }
      );
    }
    console.error(
      JSON.stringify({
        level: "error",
        msg: "blog translation failed",
        actor: auth.decoded.email,
        err: { message: error.message, code: error.code, stack: error.stack },
      })
    );
    return NextResponse.json({ error: "Failed to translate post" }, { status: 500 });
  }
}
