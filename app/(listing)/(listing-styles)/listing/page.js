"use client";

import { useSearchParams } from "next/navigation";
import Footer from "@/app/components/common/Footer";
import DefaultHeader from "@/app/components/common/DefaultHeader";
import HeaderTop from "@/app/components/common/HeaderTop";
import HeaderSidebar from "@/app/components/common/HeaderSidebar";
import MobileMenu from "@/app/components/common/MobileMenu";
import Pagination from "@/app/components/common/Pagination";
import ListGridFilter from "@/app/components/listing/ListGridFilter";
import CarItems from "@/app/components/listing/listing-styles/listing-v1/CarItems";

import { useMotorcycles } from "@/utils/hooks/useMotorcycles";
import { Spin } from "antd";
import { useRouter } from "next/navigation";

const ListingV1 = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const brandFilter = searchParams.get("make");
  const priceFilter = searchParams.get("price")
    ? parseInt(searchParams.get("price"))
    : null;

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
    const newParams = new URLSearchParams(searchParams);
    newParams.delete(filterType);
    router.push(`/listing?${newParams.toString()}`);
  };

  const {
    sortOptions,
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
  } = useMotorcycles(brandFilter, priceFilter);

  return (
    <div className="wrapper">
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <HeaderSidebar />
      </div>
      {/* Sidebar Panel End */}

      {/* header top */}
      <HeaderTop />
      {/* End header top */}

      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Main Header Nav For Mobile */}
      <MobileMenu />
      {/* End Main Header Nav For Mobile */}

      {/* Advance_search_menu_sectn*/}
      {/* <section className="advance_search_menu_sectn bgc-thm2 pt20 pb0 px20 mt70-992 filter-style_two">
                <div className="row">
                    <MainFilter />
                </div>
            </section> */}
      {/* End Advance_search_menu_sectn*/}

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
      {(brandFilter || priceFilter) && (
        <section className="active-filters-section pt20 pb20">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="active-filters">
                  <span className="filter-label me-3">Active Filters:</span>
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
            <div className="col-md-4 mb5">
              <div className="page_control_shorting left_area tac-sm mb15-767 mt15">
                <p>
                  We found{" "}
                  <span className="heading-color fw600">
                    {motorcycles.length}
                  </span>{" "}
                  Motorcycles for you
                </p>
              </div>
            </div>
            <ListGridFilter
              label={"Sort By: "}
              options={sortOptions}
              selectedOption={selectedSort}
              onOptionChange={onSortOptionChange}
            />
            <ListGridFilter
              label={"Brand: "}
              options={brandOptions}
              selectedOption={selectedBrand}
              onOptionChange={onBrandOptionChange}
            />
          </div>
          {/* End .row */}

          {loading ? (
            <div style={{ textAlign: "center" }}>
              <Spin color="#0000ff" size="large" />
            </div>
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
