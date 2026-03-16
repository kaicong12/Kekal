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

import { useMotorcyclesPg as useMotorcycles } from "@/utils/hooks/useMotorcyclesPg";
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
                searchTerm={searchTerm}
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
            <div className="row car-listing-grid">
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
