"use client";
import { useRouter } from "next/navigation";
import Select from 'react-select';
import { useState, useEffect } from "react";
import { fetchUniqueBrandSet } from "@/utils/db";

const HeroFilter = () => {
  const router = useRouter();
  const [selectedStatus, setSelectedStatus] = useState("All Status");
  const [brandFilter, setBrandFilter] = useState(null);
  const [priceFilter, setPriceFilter] = useState(null);
  const [brandOptions, setBrandOptions] = useState([]); 

  const priceOptions = [
    { value: 0, label: "All Price" },
    { value: 1, label: "No max Price" },
    { value: 2, label: "Less than RM2,000" },
    { value: 3, label: "Less than RM5,000" },
    { value: 4, label: "Less than RM10,000" },
    { value: 5, label: "Less than RM15,000" },
  ];

  useEffect(() => {
    const fetchBrands = async () => {
      const uniqueBrandSet = await fetchUniqueBrandSet();

      // Transform to react-select options format
      const brandOptionsArray = Array.from(uniqueBrandSet).map((brand, index) => ({
        value: index,
        label: brand,
      }));

      setBrandOptions(brandOptionsArray);
    };

    fetchBrands();
  }, []);

  const handleStatusClick = (status) => {
    setSelectedStatus(status);
  };
  
  const handleBrandChange = (selectedOption) => {
    if (selectedOption?.label) {
      setBrandFilter(selectedOption.label);
    }
  };

  const handlePriceFilterChange = (selectedOption) => {
    if (selectedOption?.value) {
      setPriceFilter(selectedOption.value);
    }
  };

  const handleSearchClick = () => {
    const queryParams = new URLSearchParams();
    if (brandFilter) queryParams.set('make', brandFilter);
    if (priceFilter) queryParams.set('price', priceFilter);

    router.push(`/listing?${queryParams.toString()}`);
  };

  return (
    <div className="col-lg-12">
      <ul className="nav nav-pills justify-content-center">
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${
              selectedStatus === "All Status" && "active"
            }`}
            onClick={() => handleStatusClick("All Status")}
          >
            All Bike
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${selectedStatus === "Used Cars" && "active"}`}
            onClick={() => handleStatusClick("Used Cars")}
          >
            Used Bike
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${selectedStatus === "New Cars" && "active"}`}
            onClick={() => handleStatusClick("New Cars")}
          >
            New Bike
          </button>
        </li>
      </ul>

      {/* Filter Tabs */}
      <div className="adss_bg_stylehome1">
        <div className="home1_advance_search_wrapper">
          <ul className="mb0 text-center">
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
