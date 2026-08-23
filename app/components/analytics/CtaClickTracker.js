"use client";
import { useEffect } from "react";

function eventTypeFor(href) {
  if (/(^|\/\/)(wa\.me|api\.whatsapp\.com|chat\.whatsapp\.com)/.test(href)) {
    return "whatsapp_click";
  }
  if (/(^|\/\/)([\w.-]*\.)?(facebook\.com|fb\.me|fb\.com)/.test(href)) {
    return "facebook_click";
  }
  return null;
}

export default function CtaClickTracker() {
  useEffect(() => {
    const onClick = (event) => {
      const link = event.target.closest?.("a[href]");
      if (!link) return;

      const href = link.href || "";
      const type = eventTypeFor(href);
      if (!type) return;

      const payload = JSON.stringify({
        type,
        page: `${window.location.pathname}${window.location.search}`,
        label: (link.getAttribute("aria-label") || link.textContent || "").trim(),
        href,
      });

      // Beacon so the request survives the navigation to WhatsApp/Facebook.
      if (navigator.sendBeacon) {
        navigator.sendBeacon(
          "/api/events",
          new Blob([payload], { type: "application/json" })
        );
        return;
      }

      fetch("/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: payload,
        keepalive: true,
      }).catch(() => {});
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
