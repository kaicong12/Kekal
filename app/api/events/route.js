import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const ALLOWED_TYPES = new Set(["whatsapp_click", "facebook_click"]);

function trim(value, max) {
  return typeof value === "string" ? value.slice(0, max) : null;
}

export async function POST(request) {
  try {
    const body = await request.json();

    if (!ALLOWED_TYPES.has(body.type)) {
      return NextResponse.json({ error: "Unknown event type" }, { status: 400 });
    }

    console.log(
      JSON.stringify({
        level: "info",
        msg: body.type,
        page: trim(body.page, 300),
        label: trim(body.label, 120),
        href: trim(body.href, 500),
        referrer: trim(request.headers.get("referer"), 300),
        userAgent: trim(request.headers.get("user-agent"), 300),
        at: new Date().toISOString(),
      })
    );

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error(
      JSON.stringify({
        level: "error",
        msg: "failed to record cta event",
        err: { message: error.message },
      })
    );
    return NextResponse.json({ error: "Failed to record event" }, { status: 500 });
  }
}
