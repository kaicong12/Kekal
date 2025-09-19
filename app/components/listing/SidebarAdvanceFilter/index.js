import { useState } from "react";
import RangeSlider from "./RangeSlider";
import SearchBox from "./SearchBox";
import SelectFilter from "./SelectFilter";

const SidebarAdvnaceFilter = ({ onFiltersChange }) => {
  const [filters, setFilters] = useState({
    searchTerm: "",
    selectFilters: {},
    priceRange: { min: 5000, max: 15000 },
    mileage: { min: "", max: "" },
    fuelType: [],
    transmission: [],
    features: [],
  });

  const handleSearchChange = (searchTerm) => {
    const newFilters = { ...filters, searchTerm };
    setFilters(newFilters);
    if (onFiltersChange) onFiltersChange(newFilters);
  };

  const handleSelectFilterChange = (selectFilters) => {
    const newFilters = { ...filters, selectFilters };
    setFilters(newFilters);
    if (onFiltersChange) onFiltersChange(newFilters);
  };

  const handlePriceRangeChange = (priceRange) => {
    const newFilters = { ...filters, priceRange };
    setFilters(newFilters);
    if (onFiltersChange) onFiltersChange(newFilters);
  };

  const handleMileageChange = (field, value) => {
    const newMileage = { ...filters.mileage, [field]: value };
    const newFilters = { ...filters, mileage: newMileage };
    setFilters(newFilters);
    if (onFiltersChange) onFiltersChange(newFilters);
  };

  const handleCheckboxChange = (category, value, checked) => {
    const currentValues = filters[category] || [];
    const newValues = checked
      ? [...currentValues, value]
      : currentValues.filter((item) => item !== value);

    const newFilters = { ...filters, [category]: newValues };
    setFilters(newFilters);
    if (onFiltersChange) onFiltersChange(newFilters);
  };

  const handleResetFilters = () => {
    const resetFilters = {
      searchTerm: "",
      selectFilters: {},
      priceRange: { min: 5000, max: 15000 },
      mileage: { min: "", max: "" },
      fuelType: [],
      transmission: [],
      features: [],
    };
    setFilters(resetFilters);
    if (onFiltersChange) onFiltersChange(resetFilters);
  };

  return (
    <div className="sidebar_widgets">
      <div className="sidebar_widgets_wrapper">
        <div className="sidebar_advanced_search_widget">
          <h4 className="title">Search Filters</h4>
          <ul className="sasw_list mb0">
            <li className="search_area">
              <SearchBox onSearch={handleSearchChange} />
            </li>
            {/* End .search_area */}

            <SelectFilter onFilterChange={handleSelectFilterChange} />
            {/* End li select filter */}

            <li>
              <h5 className="subtitle">Mileage</h5>
            </li>
            <li className="min_area list-inline-item">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Min"
                  value={filters.mileage.min}
                  onChange={(e) => handleMileageChange("min", e.target.value)}
                />
              </div>
            </li>
            <li className="max_area list-inline-item">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Max"
                  value={filters.mileage.max}
                  onChange={(e) => handleMileageChange("max", e.target.value)}
                />
              </div>
            </li>
            {/* End milage */}

            <li>
              <h5 className="subtitle">Price</h5>
            </li>
            <li>
              <RangeSlider onPriceChange={handlePriceRangeChange} />
            </li>
            {/* End range price slider */}

            <li>
              <h5 className="subtitle">Fuel Type</h5>
              <div className="ui_kit_checkbox">
                <div className="form-check mb20">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckPetrol"
                    checked={filters.fuelType.includes("Petrol")}
                    onChange={(e) =>
                      handleCheckboxChange(
                        "fuelType",
                        "Petrol",
                        e.target.checked
                      )
                    }
                  />
                  <label className="form-check-label" htmlFor="flexCheckPetrol">
                    Petrol
                  </label>
                </div>
                <div className="form-check mb20">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckDiesel"
                    checked={filters.fuelType.includes("Diesel")}
                    onChange={(e) =>
                      handleCheckboxChange(
                        "fuelType",
                        "Diesel",
                        e.target.checked
                      )
                    }
                  />
                  <label className="form-check-label" htmlFor="flexCheckDiesel">
                    Diesel
                  </label>
                </div>
                <div className="form-check mb20">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckElectric"
                    checked={filters.fuelType.includes("Electric")}
                    onChange={(e) =>
                      handleCheckboxChange(
                        "fuelType",
                        "Electric",
                        e.target.checked
                      )
                    }
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckElectric"
                  >
                    Electric
                  </label>
                </div>
                <div className="form-check mb30">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckHybrid"
                    checked={filters.fuelType.includes("Hybrid")}
                    onChange={(e) =>
                      handleCheckboxChange(
                        "fuelType",
                        "Hybrid",
                        e.target.checked
                      )
                    }
                  />
                  <label className="form-check-label" htmlFor="flexCheckHybrid">
                    Hybrid
                  </label>
                </div>
              </div>
            </li>
            <li>
              <h5 className="subtitle">Transmission</h5>
              <div className="ui_kit_checkbox">
                <div className="form-check mb20">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckAutometic"
                    checked={filters.transmission.includes("Automatic")}
                    onChange={(e) =>
                      handleCheckboxChange(
                        "transmission",
                        "Automatic",
                        e.target.checked
                      )
                    }
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckAutometic"
                  >
                    Automatic
                  </label>
                </div>
                <div className="form-check mb30">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckManual"
                    checked={filters.transmission.includes("Manual")}
                    onChange={(e) =>
                      handleCheckboxChange(
                        "transmission",
                        "Manual",
                        e.target.checked
                      )
                    }
                  />
                  <label className="form-check-label" htmlFor="flexCheckManual">
                    Manual
                  </label>
                </div>
              </div>
            </li>
            <li>
              <h5 className="subtitle">Features</h5>
              <div className="sidebar_feature_checkbox">
                <div className="wrapper">
                  <div className="form-check mb15">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Adaptive Cruise Control (6,676)
                    </label>
                  </div>
                  <div className="form-check mb15">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault1"
                    >
                      Cooled Seats (9,784)
                    </label>
                  </div>
                  <div className="form-check mb15">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault2"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault2"
                    >
                      Keyless Start (9,784)
                    </label>
                  </div>
                  <div className="form-check mb15">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault3"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault3"
                    >
                      Navigation System (9,784)
                    </label>
                  </div>
                  <div className="form-check mb15">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault4"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault4"
                    >
                      Remote Start (9,784)
                    </label>
                  </div>
                  <div className="form-check mb15">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault5"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault5"
                    >
                      Cooled Seats (9,784)
                    </label>
                  </div>
                  <div className="form-check mb15">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault6"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault6"
                    >
                      Keyless Start (9,784)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault7"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault7"
                    >
                      Navigation System (9,784)
                    </label>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="search_option_button">
                <button
                  type="button"
                  className="btn btn-block btn-thm"
                  onClick={() => onFiltersChange && onFiltersChange(filters)}
                >
                  <span className="flaticon-magnifiying-glass mr10" /> Search
                </button>
              </div>
            </li>
            <li className="text-center">
              <button
                className="reset-filter"
                style={{
                  background: "none",
                  border: "none",
                  color: "inherit",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
                onClick={handleResetFilters}
              >
                Reset Filter
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SidebarAdvnaceFilter;
