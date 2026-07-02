"use client";

import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { Spin } from "antd";
import { useMotorcyclesPg as useMotorcycles } from "@/utils/hooks/useMotorcyclesPg";
import Pagination from "@/app/components/common/Pagination";
import BikeCard from "./BikeCard";
import { waLink } from "./waLink";

const SORTS = ["Price: lowest first", "Price: highest first"];

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
    onSortOptionChange,
    onBrandOptionChange,
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

  return (
    <main>
      <div className="wrap">
        <nav className="crumbs" aria-label="Breadcrumb">
          <a href="/">{tl("breadcrumbHome")}</a>
          <span>›</span>
          {tl("breadcrumbCurrent")}
        </nav>
      </div>

      <section className="page-hero wrap">
        <p className="eyebrow">{t("listings.eyebrow")}</p>
        <h1>{tl("breadcrumbTitle")}</h1>
        <p>{t("listings.subtitle")}</p>
      </section>

      <section className="wrap" style={{ paddingBottom: 76 }}>
        {/* Brand filter chips */}
        <div className="chips" style={{ marginBottom: 22 }}>
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

        <div className="listing-toolbar">
          <p className="count">
            {tl.rich("foundCount", {
              count: motorcycles.length,
              highlight: (chunks) => <b>{chunks}</b>,
            })}
          </p>
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
    </main>
  );
};

export default ListingsBody;
