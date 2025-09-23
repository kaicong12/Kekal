import { useMemo, useCallback, useEffect } from "react";
import Select from "react-select";
import PropTypes from "prop-types";
import { useDebounce } from "@/utils/hooks/useDebounce";

const SearchAndFilters = ({
  localSearchTerm,
  setLocalSearchTerm,
  searchTerm = "",
  onSearchChange,
  selectedSort = "Price: lowest first",
  onSortChange,
  brandOptions,
  selectedBrand = null,
  onBrandChange,
}) => {
  // Debounce search term to avoid excessive API calls
  const debouncedSearchTerm = useDebounce(localSearchTerm, 300);

  const handleSearchChange = useCallback((e) => {
    const value = e.target.value;
    setLocalSearchTerm(value);
  }, []);

  // Call onSearchChange when debounced value changes
  useEffect(() => {
    if (debouncedSearchTerm !== searchTerm) {
      onSearchChange(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm, onSearchChange, searchTerm]);

  const sortSelectValue = useMemo(() => {
    if (!selectedSort) {
      return { value: "Price: lowest first", label: "Price (Low to High)" };
    }

    // Map internal sort values to display labels
    const sortLabel =
      selectedSort === "Price: highest first"
        ? "Price (High to Low)"
        : "Price (Low to High)";

    return {
      value: selectedSort,
      label: sortLabel,
    };
  }, [selectedSort]);

  const brandSelectValue = useMemo(() => {
    if (!selectedBrand) {
      return { value: null, label: "All Brands" };
    }

    const brandOption = brandOptions.find(
      (option) => option.label === selectedBrand
    );
    return brandOption || { value: null, label: "All Brands" };
  }, [selectedBrand, brandOptions]);

  const customSelectStyles = {
    control: (provided, state) => ({
      ...provided,
      minHeight: "48px",
      border: "1px solid #e0e0e0",
      borderRadius: "8px",
      boxShadow: state.isFocused ? "0 0 0 2px rgba(0, 123, 255, 0.25)" : "none",
      "&:hover": {
        borderColor: "#007bff",
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#6c757d",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "#6c757d",
    }),
  };

  const searchInputStyles = {
    height: "48px",
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    padding: "0 16px 0 40px",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
  };

  return (
    <div>
      <div className="row align-items-center">
        {/* Search Bar */}
        <div className="col-md-6 col-lg-7 mb-3 mb-md-0">
          <div
            className="search-input-wrapper"
            style={{ position: "relative" }}
          >
            <i
              className="fa fa-search"
              style={{
                position: "absolute",
                left: "16px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#6c757d",
                zIndex: 1,
              }}
            ></i>
            <input
              type="text"
              className="form-control search-input"
              placeholder="Search motorcycles (e.g., Yamaha, sport, 150cc)..."
              value={localSearchTerm}
              onChange={handleSearchChange}
              style={searchInputStyles}
            />
          </div>
        </div>

        {/* Sort By Filter */}
        <div className="col-md-3 col-lg-2 mb-3 mb-md-0">
          <Select
            value={sortSelectValue}
            onChange={onSortChange}
            options={[
              { value: "Price: lowest first", label: "Price (Low to High)" },
              { value: "Price: highest first", label: "Price (High to Low)" },
            ]}
            className="sort-select"
            classNamePrefix="select"
            isSearchable={false}
            styles={customSelectStyles}
            placeholder="Sort by"
          />
        </div>

        {/* Brand Filter */}
        <div className="col-md-3 col-lg-3">
          <Select
            value={brandSelectValue}
            onChange={onBrandChange}
            options={[{ value: null, label: "All Brands" }, ...brandOptions]}
            className="brand-select"
            classNamePrefix="select"
            isSearchable={true}
            isClearable={true}
            styles={customSelectStyles}
            placeholder="All Brands"
          />
        </div>
      </div>

      <style jsx>{`
        .search-input:focus {
          border-color: #007bff !important;
          box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25) !important;
        }

        @media (max-width: 768px) {
          .search-and-filters-container {
            padding: 15px;
          }
        }
      `}</style>
    </div>
  );
};

SearchAndFilters.propTypes = {
  localSearchTerm: PropTypes.string,
  setLocalSearchTerm: PropTypes.func.isRequired,
  searchTerm: PropTypes.string,
  onSearchChange: PropTypes.func.isRequired,
  selectedSort: PropTypes.string,
  onSortChange: PropTypes.func.isRequired,
  brandOptions: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedBrand: PropTypes.string,
  onBrandChange: PropTypes.func.isRequired,
};

export default SearchAndFilters;
