"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const HeroFilter = () => {
  const router = useRouter();

  const [selectedStatus, setSelectedStatus] = useState("All Status");
  const [brandFilter, setBrandFilter] = useState(0)
  const [priceFilter, setPriceFilter] = useState(0)

  const filters = [
    {
      label: "Make",
      options: [
        "Select Makes",
        "Honda",
        "Yamaha",
        "SYM"
      ],
    },
    {
      label: "Price",
      options: [
        "All Price",
        "No max Price",
        "Less than $2,000",
        "Less than $5,000",
        "Less than $10,000",
        "Less than $15,000",
      ],
    },
  ];

  const handleStatusClick = (status) => {
    setSelectedStatus(status);
  };

  const handleBrandChange = (event) => {
    setBrandFilter(Number(event.target.value))
  }

  const handlePriceFilterChange = (event) => {
    setPriceFilter(Number(event.target.value))
  }

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

      {/* filter tabs */}
      <div className="adss_bg_stylehome1">
        <div className="home1_advance_search_wrapper">
          <ul className="mb0 text-center">
            {filters
              .filter((filter) => filter.label !== selectedStatus)
              .map((filter) => (
                <li className="list-inline-item" key={filter.label}>
                  <div className="select-boxes">
                    <div className="car_brand">
                      <h6 className="title">{filter.label}</h6>
                      <select className="form-select" value={brandFilter} onChange={handleBrandChange}>
                        {filter.options.map((option, index) => (
                          <option key={option} value={index}>{option}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </li>
              ))}

            {/* Search button */}
            <li className="list-inline-item">
              <div className="d-block">
                <button
                  onClick={() => router.push("/listing")}
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
