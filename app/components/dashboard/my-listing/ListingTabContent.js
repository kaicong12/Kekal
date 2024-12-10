
"use client"

import Pagination from "../../common/Pagination";
import ListingContent from "./ListingContent";
import { useState } from "react";

const ListingTabContent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const carListings = [
    {
      id: 1,
      make: "Volvo",
      model: "XC90",
      year: 2020,
      transmission: "Automatic",
      fuelType: "Diesel",
      price: "$129",
      imageSrc: "/images/listing/1.jpg",
    },
    {
      id: 2,
      make: "Audi",
      model: "A8 L 55",
      year: 2021,
      transmission: "Automatic",
      fuelType: "Diesel",
      price: "$129",
      imageSrc: "/images/listing/5.jpg",
    },
    {
      id: 3,
      make: "Bentley",
      model: "Bentayga V8",
      year: 2020,
      transmission: "Automatic",
      fuelType: "Diesel",
      price: "$129",
      imageSrc: "/images/listing/7.jpg",
    },
  ];

  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          {/* <!-- Nav tabs --> */}
          <div className="nav nav-tabs justify-content-start" role="tablist">
            <button
              className="nav-link active"
              id="nav-home-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-home"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              All Status
            </button>
            <button
              className="nav-link"
              id="nav-shopping-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-shopping"
              role="tab"
              aria-controls="nav-shopping"
              aria-selected="false"
            >
              New Cars
            </button>
            <button
              className="nav-link"
              id="nav-hotels-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-hotels"
              role="tab"
              aria-controls="nav-hotels"
              aria-selected="false"
            >
              Used Cars
            </button>
          </div>
        </div>
        {/* <!-- Tab panes --> */}

        <div className="col-lg-12 mt50">
          <div className="tab-content row" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <ListingContent carListings={carListings} />
            </div>
            {/* End tab-content */}

            <div
              className="tab-pane fade"
              id="nav-shopping"
              role="tabpanel"
              aria-labelledby="nav-shopping-tab"
            >
              <ListingContent carListings={carListings} />
            </div>
            {/* End tab-content */}

            <div
              className="tab-pane fade"
              id="nav-hotels"
              role="tabpanel"
              aria-labelledby="nav-hotels-tab"
            >
              <ListingContent carListings={carListings} />
            </div>
          </div>
          {/* End tab-content */}

          <div className="mbp_pagination mt10">
            <Pagination 
              currentPage={currentPage}
              totalPages={totalPages} 
              setCurrentPage={setCurrentPage} 
            />
          </div>
          {/* Pagination */}
        </div>
      </div>
    </>
  );
};

export default ListingTabContent;
