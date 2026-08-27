"use client";
// Stays a client component: ScrollToTop and the analytics trackers are hooks-based
// and have no "use client" of their own, so they rely on this boundary.
import ScrollToTop from "./common/ScrollTop";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import CtaClickTracker from "./analytics/CtaClickTracker";

export default function ClientLayout({ children }) {
  return (
    <>
      {children}
      <ScrollToTop />
      <CtaClickTracker />
      <Analytics />
      <SpeedInsights />
    </>
  );
}
