import { NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

export function middleware(request) {
  const { hostname } = request.nextUrl;

  // Redirect non-www to www in production
  if (
    hostname === "motorkekal.com" &&
    !hostname.startsWith("www.") &&
    !hostname.includes("localhost") &&
    !hostname.includes("vercel.app")
  ) {
    const url = request.nextUrl.clone();
    url.hostname = "www.motorkekal.com";
    return NextResponse.redirect(url, 301);
  }

  // next-intl strips the redundant "/en" prefix with a 307, which doesn't pass
  // ranking signals — and Google has indexed ~60 "/en/..." URLs. Redirect them
  // permanently instead so they consolidate onto the prefix-free canonical.
  const { pathname } = request.nextUrl;
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(3) || "/";
    const res = NextResponse.redirect(url, 301);
    // Bypassing next-intl skips its NEXT_LOCALE write, so an existing ms/zh
    // cookie would bounce the visitor straight back off the English page.
    res.cookies.set("NEXT_LOCALE", "en", { path: "/" });
    return res;
  }

  // Delegate locale detection / prefixing to next-intl
  return intlMiddleware(request);
}

export const config = {
  // Match all pathnames except for:
  // - API routes (/api)
  // - Next.js internals (/_next, /_vercel)
  // - files with an extension (e.g. /sitemap.xml, /favicon.ico, images)
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
