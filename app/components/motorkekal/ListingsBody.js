"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { Spin } from "antd";
import { useMotorcyclesPg as useMotorcycles } from "@/utils/hooks/useMotorcyclesPg";
import { useDebounce } from "@/utils/hooks/useDebounce";
import Pagination from "@/app/components/common/Pagination";
import BikeCard from "./BikeCard";
import { waLink } from "./waLink";

const SORTS = ["Price: lowest first", "Price: highest first"];

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <circle cx="11" cy="11" r="7" />
    <path d="M20 20l-3.5-3.5" strokeLinecap="round" />
  </svg>
);

const ChevronIcon = ({ dir }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
    <path
      d={dir === "prev" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ListingsBody = () => {
  const t = useTranslations("mk");
  const tl = useTranslations("listing");
  const searchParams = useSearchParams();

  const brandFilter = searchParams.get("make");
  const searchFromHome = searchParams.get("search");
  const priceFilter = searchParams.get("price")
    ? parseInt(searchParams.get("price"))
    : null;
  const maxPrice = searchParams.get("maxPrice") || null;
  const minPrice = searchParams.get("minPrice") || null;
  const minCC = searchParams.get("minCC") || null;
  const maxCC = searchParams.get("maxCC") || null;

  const {
    brandOptions,
    selectedSort,
    selectedBrand,
    searchTerm,
    onSortOptionChange,
    onBrandOptionChange,
    onSearchChange,
    motorcycles,
    paginatedMotorcycles,
    loading,
    currentPage,
    totalPages,
    setCurrentPage,
  } = useMotorcycles(brandFilter, priceFilter, searchFromHome, {
    maxPrice,
    minPrice,
    minCC,
    maxCC,
  });

  const isAll = !selectedBrand;

  // Keep typing responsive locally and only hit the API once the user pauses.
  const [query, setQuery] = useState(searchFromHome ?? "");
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    if (debouncedQuery !== searchTerm) onSearchChange(debouncedQuery);
  }, [debouncedQuery, searchTerm, onSearchChange]);

  const railRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(true);

  const syncRail = useCallback(() => {
    const el = railRef.current;
    if (!el) return;
    // Under 860px the row bleeds past the page gutter using padding-inline, so
    // resting scrollLeft equals that padding rather than 0.
    const restLeft = parseFloat(getComputedStyle(el).paddingLeft) || 0;
    const max = el.scrollWidth - el.clientWidth;
    setAtStart(el.scrollLeft <= restLeft + 1);
    setAtEnd(el.scrollLeft >= max - 1);
  }, []);

  useEffect(() => {
    const el = railRef.current;
    if (!el) return;
    syncRail();
    const observer = new ResizeObserver(syncRail);
    observer.observe(el);
    return () => observer.disconnect();
  }, [syncRail, brandOptions.length]);

  const pageRail = (direction) => {
    const el = railRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: "smooth" });
  };

  // Rendered in both slots; CSS shows the standalone row on mobile and the
  // toolbar one on desktop, so only ever one is visible.
  const searchBox = (modifier) => (
    <div className={`listing-search${modifier ? ` ${modifier}` : ""}`}>
      <SearchIcon />
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={tl("searchPlaceholder")}
        aria-label={tl("searchPlaceholder")}
      />
      {query ? (
        <button
          type="button"
          className="listing-search__clear"
          onClick={() => setQuery("")}
          aria-label={tl("clearSearch")}
        >
          &times;
        </button>
      ) : null}
    </div>
  );

  return (
    <section className="wrap" style={{ paddingBottom: 76 }}>
      {searchBox("listing-search--standalone")}

      {/* Brand filter chips — one clipped row paged by the arrows, since the
          brand list keeps growing and wrapping it swallowed the top of the
          grid. */}
      <div className="chip-rail">
        {!atStart ? (
          <button
            type="button"
            className="chip-rail__nav chip-rail__nav--prev"
            onClick={() => pageRail(-1)}
            aria-label={tl("brandsPrev")}
          >
            <ChevronIcon dir="prev" />
          </button>
        ) : null}
        <div
          ref={railRef}
          onScroll={syncRail}
          className={`chips chips--scroll${!atStart ? " is-start" : ""}${
            !atEnd ? " is-end" : ""
          }`}
          role="group"
          aria-label={tl("allBrands")}
        >
          <button
            className={`chip${isAll ? " chip--on" : ""}`}
            onClick={() => onBrandOptionChange(null)}
          >
            {t("listings.all")}
          </button>
          {brandOptions.map((b) => (
            <button
              key={b.value}
              className={`chip${selectedBrand === b.label ? " chip--on" : ""}`}
              onClick={() => onBrandOptionChange({ label: b.label })}
            >
              {b.label}
            </button>
          ))}
        </div>
        {!atEnd ? (
          <button
            type="button"
            className="chip-rail__nav chip-rail__nav--next"
            onClick={() => pageRail(1)}
            aria-label={tl("brandsNext")}
          >
            <ChevronIcon dir="next" />
          </button>
        ) : null}
      </div>

      <div className="listing-toolbar">
        <p className="count">
          {tl.rich("foundCount", {
            count: motorcycles.length,
            highlight: (chunks) => <b>{chunks}</b>,
          })}
        </p>
        <div className="listing-toolbar__controls">
          {searchBox()}
          <label className="chip" style={{ cursor: "pointer" }}>
            {tl("sortBy")}:
            <select
              value={selectedSort}
              onChange={(e) => onSortOptionChange({ value: e.target.value })}
              style={{
                border: "none",
                background: "transparent",
                fontFamily: "var(--kk-font)",
                fontSize: 14,
                fontWeight: 500,
                color: "inherit",
                cursor: "pointer",
                outline: "none",
              }}
            >
              <option value={SORTS[0]}>{tl("priceLowToHigh")}</option>
              <option value={SORTS[1]}>{tl("priceHighToLow")}</option>
            </select>
          </label>
        </div>
      </div>

      {loading ? (
        <div className="mk-center">
          <Spin size="large" />
        </div>
      ) : motorcycles.length === 0 ? (
        <div
          className="card card--pad"
          style={{ textAlign: "center", padding: 48 }}
        >
          <h3 style={{ fontSize: 20 }}>{tl("empty.title")}</h3>
          <p className="muted" style={{ marginTop: 8 }}>
            {tl("empty.subtitle")}
          </p>
        </div>
      ) : (
        <div className="bike-grid">
          {paginatedMotorcycles.map((m) => (
            <BikeCard key={m.id} motorcycle={m} />
          ))}
        </div>
      )}

      {/* Can't find CTA */}
      <div
        className="card card--pad"
        style={{
          marginTop: 26,
          borderStyle: "dashed",
          borderColor: "var(--kk-border-strong)",
          display: "flex",
          gap: 16,
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
          <div className="svc-card__ico" style={{ width: 46, height: 46 }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path
                d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <h3 style={{ fontSize: 18 }}>{t("listings.cantFindTitle")}</h3>
            <p
              className="muted"
              style={{ marginTop: 4, fontSize: "14.5px", maxWidth: "44ch" }}
            >
              {t("listings.cantFindBody")}
            </p>
          </div>
        </div>
        <a
          className="btn btn--wa"
          href={waLink(
            "Hi Motor Kekal, saya cari model ______. Ada tak / boleh source tak?"
          )}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("listings.cantFindCta")}
        </a>
      </div>

      {totalPages > 1 && (
        <div style={{ marginTop: 30 }}>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        </div>
      )}
    </section>
  );
};

export default ListingsBody;
