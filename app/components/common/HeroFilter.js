"use client";
import { useRouter } from "next/navigation";
import Select from "react-select";
import { useState, useEffect, useRef } from "react";
import { useDebounce } from "@/utils/hooks/useDebounce";
import { toMotorcycleSlug } from "@/utils/slug";

const HeroFilter = () => {
  const router = useRouter();
  const [brandFilter, setBrandFilter] = useState(null);
  const [priceFilter, setPriceFilter] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [brandOptions, setBrandOptions] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const searchRef = useRef(null);
  const debouncedSearch = useDebounce(searchTerm, 300);

  const priceOptions = [
    { value: 0, label: "All Price" },
    { value: 1, label: "No max Price" },
    { value: 2, label: "Less than RM5,000" },
    { value: 3, label: "Less than RM10,000" },
    { value: 4, label: "Less than RM15,000" },
  ];

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const res = await fetch("/api/motorcycles/brands");
        const data = await res.json();
        const brandOptionsArray = data.brands.map((brand, index) => ({
          value: index,
          label: brand,
        }));
        setBrandOptions(brandOptionsArray);
      } catch (error) {
        console.error("Failed to fetch brands:", error);
      }
    };

    fetchBrands();
  }, []);

  useEffect(() => {
    if (!debouncedSearch.trim()) {
      setSearchResults([]);
      setShowDropdown(false);
      return;
    }

    const fetchResults = async () => {
      setIsSearching(true);
      try {
        const res = await fetch(
          `/api/motorcycles?search=${encodeURIComponent(debouncedSearch.trim())}&limit=10`
        );
        const data = await res.json();
        setSearchResults(data.motorcycles || []);
        setShowDropdown(true);
      } catch (error) {
        console.error("Search preview failed:", error);
      } finally {
        setIsSearching(false);
      }
    };

    fetchResults();
  }, [debouncedSearch]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleBrandChange = (selectedOption) => {
    if (selectedOption?.label) {
      setBrandFilter(selectedOption.label);
    }
  };

  const handlePriceFilterChange = (selectedOption) => {
    if (selectedOption?.value !== undefined) {
      setPriceFilter(selectedOption.value === 0 ? null : selectedOption.value);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleResultClick = (motorcycle) => {
    setShowDropdown(false);
    router.push(`/motorcycle/${toMotorcycleSlug(motorcycle)}`);
  };

  const handleSearchClick = () => {
    setShowDropdown(false);
    const queryParams = new URLSearchParams();
    if (searchTerm.trim()) queryParams.set("search", searchTerm.trim());
    if (brandFilter) queryParams.set("make", brandFilter);
    if (priceFilter) queryParams.set("price", priceFilter.toString());

    router.push(`/listing?${queryParams.toString()}`);
  };

  return (
    <div className="col-lg-12">
      {/* Filter Tabs */}
      <div className="adss_bg_stylehome1">
        <div className="home1_advance_search_wrapper">
          <ul className="mb0 text-center">
            <li className="list-inline-item">
              <div className="select-boxes">
                <div className="search_area" ref={searchRef} style={{ position: "relative" }}>
                  <h6 className="title">Search</h6>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search motorcycles..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    onFocus={() => {
                      if (searchResults.length > 0) setShowDropdown(true);
                    }}
                    style={{
                      height: "38px",
                      border: "1px solid hsl(0, 0%, 80%)",
                      borderRadius: "8px",
                      padding: "0 16px",
                      fontSize: "14px",
                      minWidth: "250px",
                    }}
                  />
                  {showDropdown && (
                    <div
                      data-testid="search-preview-dropdown"
                      style={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        right: 0,
                        background: "#fff",
                        borderRadius: "8px",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                        zIndex: 1000,
                        marginTop: "4px",
                        overflowY: "auto",
                        minWidth: "300px",
                        maxHeight: "320px",
                      }}
                    >
                      {isSearching ? (
                        <div style={{ padding: "12px 16px", color: "#888", fontSize: "14px" }}>
                          Searching...
                        </div>
                      ) : searchResults.length > 0 ? (
                        searchResults.map((motorcycle) => (
                          <div
                            key={motorcycle.id}
                            data-testid="search-preview-item"
                            onClick={() => handleResultClick(motorcycle)}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                              padding: "10px 16px",
                              cursor: "pointer",
                              borderBottom: "1px solid #f0f0f0",
                              transition: "background 0.15s",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.background = "#f8f8f8")}
                            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                          >
                            <img
                              src={motorcycle.imageUrl}
                              alt={motorcycle.name}
                              style={{
                                width: "48px",
                                height: "48px",
                                objectFit: "cover",
                                borderRadius: "6px",
                                flexShrink: 0,
                              }}
                            />
                            <div style={{ fontSize: "14px", fontWeight: 500, color: "#333" }}>
                              {motorcycle.brand} {motorcycle.name}
                            </div>
                          </div>
                        ))
                      ) : (
                        <div style={{ padding: "12px 16px", color: "#888", fontSize: "14px" }}>
                          No motorcycles found
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </li>

            <li className="list-inline-item">
              <div className="select-boxes">
                <div className="car_brand">
                  <h6 className="title">Make</h6>
                  <Select
                    onChange={handleBrandChange}
                    options={brandOptions}
                    placeholder="Select Make"
                  />
                </div>
              </div>
            </li>

            <li className="list-inline-item">
              <div className="select-boxes">
                <div className="car_price">
                  <h6 className="title">Price</h6>
                  <Select
                    onChange={handlePriceFilterChange}
                    options={priceOptions}
                    placeholder="Select Price"
                  />
                </div>
              </div>
            </li>

            {/* Search button */}
            <li className="list-inline-item">
              <div className="d-block">
                <button
                  onClick={handleSearchClick}
                  className="btn btn-thm advnc_search_form_btn"
                >
                  <span className="flaticon-magnifiying-glass" />
                  Search
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeroFilter;
