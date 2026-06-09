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
