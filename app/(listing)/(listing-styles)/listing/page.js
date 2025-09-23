"use client";

import { useSearchParams, useRouter } from "next/navigation";
import Footer from "@/app/components/common/Footer";
import DefaultHeader from "@/app/components/common/DefaultHeader";
import HeaderTop from "@/app/components/common/HeaderTop";
import MobileMenu from "@/app/components/common/MobileMenu";
import Pagination from "@/app/components/common/Pagination";
import SearchAndFilters from "@/app/components/listing/SearchAndFilters";
import EmptyState from "@/app/components/listing/EmptyState";
import CarItems from "@/app/components/listing/listing-styles/listing-v1/CarItems";

import { useMotorcycles } from "@/utils/hooks/useMotorcycles";
import { Spin } from "antd";
import { useState } from "react";

const ListingV1 = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const brandFilter = searchParams.get("make");
  const searchFromHome = searchParams.get("search");

  const priceFilter = searchParams.get("price")
    ? parseInt(searchParams.get("price"))
    : null;

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
  } = useMotorcycles(brandFilter, priceFilter, searchFromHome);
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm || "");

  const getPriceLabel = (priceValue) => {
    switch (priceValue) {
      case 2:
        return "Less than RM5,000";
      case 3:
        return "Less than RM10,000";
      case 4:
        return "Less than RM15,000";
      default:
        return "";
    }
  };

  const removeFilter = (filterType) => {
    onSearchChange("");
    setLocalSearchTerm("");
    const newParams = new URLSearchParams(searchParams);
    newParams.delete(filterType);
    router.push(`/listing?${newParams.toString()}`);
  };

  return (
    <div className="wrapper">
      {/* header top */}
      <HeaderTop />
      {/* End header top */}

      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Main Header Nav For Mobile */}
      <MobileMenu />
      {/* End Main Header Nav For Mobile */}

      {/* Inner Page Breadcrumb */}
      <section className="inner_page_breadcrumb style2 inner_page_section_spacing">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="breadcrumb_content style2">
                <h2
                  className="breadcrumb_title"
                  style={{ marginBottom: "16px" }}
                >
                  Motorcycles For Sale
                </h2>
                <p className="subtitle">Listing</p>
                <ol className="breadcrumb fn-sm mt15-sm">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Listing
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Inner Page Breadcrumb */}

      {/* Active Filters Display */}
      {(brandFilter || priceFilter || searchFromHome) && (
        <section className="active-filters-section pt20 pb20">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="active-filters">
                  <span className="filter-label me-3">Active Filters:</span>
                  {searchFromHome && (
                    <span className="filter-badge badge bg-info me-2">
                      Search: &ldquo;{searchFromHome}&rdquo;
                      <button
                        type="button"
                        className="btn-close btn-close-white ms-2"
                        aria-label="Remove search filter"
                        onClick={() => removeFilter("search")}
                        style={{ fontSize: "10px" }}
                      ></button>
                    </span>
                  )}
                  {brandFilter && (
                    <span className="filter-badge badge bg-primary me-2">
                      Make: {brandFilter}
                      <button
                        type="button"
                        className="btn-close btn-close-white ms-2"
                        aria-label="Remove make filter"
                        onClick={() => removeFilter("make")}
                        style={{ fontSize: "10px" }}
                      ></button>
                    </span>
                  )}
                  {priceFilter && (
                    <span className="filter-badge badge bg-success me-2">
                      Price: {getPriceLabel(priceFilter)}
                      <button
                        type="button"
                        className="btn-close btn-close-white ms-2"
                        aria-label="Remove price filter"
                        onClick={() => removeFilter("price")}
                        style={{ fontSize: "10px" }}
                      ></button>
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {/* End Active Filters Display */}

      {/* Listing Grid View */}
      <section className="our-listing pt0 bgc-f9 pb30-991">
        <div className="container">
          <div className="row mb15">
            <div className="col-12">
              <div className="page_control_shorting left_area tac-sm mb15-767 mt15">
                <p>
                  We found{" "}
                  <span className="heading-color fw600">
                    {motorcycles.length}
                  </span>{" "}
                  motorcycles for you.
                </p>
              </div>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="row mb30">
            <div className="col-12">
              <SearchAndFilters
                localSearchTerm={localSearchTerm}
                setLocalSearchTerm={setLocalSearchTerm}
                onSearchChange={onSearchChange}
                selectedSort={selectedSort}
                onSortChange={onSortOptionChange}
                brandOptions={brandOptions}
                selectedBrand={selectedBrand}
                onBrandChange={onBrandOptionChange}
              />
            </div>
          </div>
          {/* End .row */}

          {loading ? (
            <div style={{ textAlign: "center" }}>
              <Spin color="#0000ff" size="large" />
            </div>
          ) : motorcycles.length === 0 ? (
            <EmptyState searchTerm={searchTerm} selectedBrand={selectedBrand} />
          ) : (
            <div className="row">
              <CarItems motorcycles={paginatedMotorcycles} />
            </div>
          )}

          {/* End .row */}

          <div className="row">
            <div className="col-lg-12">
              <div className="mbp_pagination mt10">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  setCurrentPage={setCurrentPage}
                />
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* Listing Grid View */}

      {/* Our Footer */}
      <Footer />
      {/* End Our Footer */}
    </div>
    // End wrapper
  );
};

export default ListingV1;
