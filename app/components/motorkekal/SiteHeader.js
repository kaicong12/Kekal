"use client";

import "./motorkekal.css";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import LanguageSwitcher from "@/app/components/common/LanguageSwitcher";
import { waLink, WaIcon, FbIcon, FACEBOOK_URL } from "./waLink";

const NAV = [
  { href: "/", key: "home" },
  { href: "/listing", key: "listings" },
  { href: "/brands", key: "brands" },
  { href: "/promotions", key: "promotions" },
  { href: "/service", key: "ourServices" },
  { href: "/about-us", key: "aboutUs" },
];

const SiteHeader = () => {
  const t = useTranslations("nav");
  const tMk = useTranslations("mk");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const brand = (
    <>
      <span className="brand__mark" aria-hidden="true">
        M<span>K</span>
      </span>
      <span>
        <span className="brand__name">Motor Kekal</span>
        <span className="brand__loc">Kedai Motor · Johor Bahru</span>
      </span>
    </>
  );

  return (
    <>
      <header className="site-header">
        <div className="site-header__inner">
          <Link className="brand" href="/" aria-label="Perniagaan Motor Kekal">
            {brand}
          </Link>

          <nav className="nav" aria-label="Main navigation">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <LanguageSwitcher />
            <a
              className="icon-btn"
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={tMk("visitFacebook")}
            >
              <FbIcon />
            </a>
            <a
              className="btn btn--wa btn--sm"
              href={waLink("Hi Motor Kekal, saya nak tanya pasal motosikal.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WaIcon />
              WhatsApp
            </a>
          </div>

          <button
            className="nav-toggle"
            aria-label="Open navigation menu"
            onClick={() => setOpen(true)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </header>

      <div
        className={`mobile-nav${open ? " open" : ""}`}
        aria-hidden={open ? "false" : "true"}
        onClick={(e) => {
          if (
            e.target === e.currentTarget ||
            e.target.closest(".mobile-nav__close") ||
            e.target.tagName === "A"
          ) {
            setOpen(false);
          }
        }}
      >
        <div className="mobile-nav__panel">
          <button className="mobile-nav__close" aria-label="Close menu">
            &times;
          </button>
          {NAV.map((item) => (
            <Link key={item.href} href={item.href}>
              {t(item.key)}
            </Link>
          ))}
          <a
            className="btn btn--wa btn--block"
            style={{ marginTop: 12 }}
            href={waLink("Hi Motor Kekal, saya nak tanya pasal motosikal.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WaIcon />
            WhatsApp
          </a>
          <a
            className="btn btn--block"
            style={{ marginTop: 10, background: "#1877f2", color: "#fff" }}
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FbIcon />
            {tMk("visitFacebook")}
          </a>
        </div>
      </div>
    </>
  );
};

export default SiteHeader;
