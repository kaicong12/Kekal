"use client";
// ScrollToTop has no "use client" of its own and relies on this boundary.
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
