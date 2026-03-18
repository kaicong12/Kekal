import { NextResponse } from "next/server";

export function middleware(request) {
  const { hostname, pathname, search } = request.nextUrl;

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

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
