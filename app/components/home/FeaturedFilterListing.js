"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useMotorcycles } from "@/utils/hooks/useMotorcycles";

const FeaturedFilterListing = () => {
  const [filter, setFilter] = useState("*");
  const [data, setData] = useMotorcycles()

  const filteredItems =
    filter === "*"
      ? data.slice(0, 6)
      : data.slice(0, 6).filter((item) => item.tags.includes(filter));

  return (
    <div className="popular_listing_sliders">
      {/* Nav tabs */}
      <div className="nav nav-tabs  justify-content-center">
        <button
          className={filter === "*" ? "active nav-link" : "nav-link"}
          onClick={() => setFilter("*")}
        >
          All Status
        </button>

        <button
          className={filter === "new" ? "active nav-link" : "nav-link"}
          onClick={() => setFilter("new")}
        >
          New Cars
        </button>
        <button
          className={filter === "used" ? "active nav-link" : "nav-link"}
          onClick={() => setFilter("used")}
        >
          Used Cars
        </button>
      </div>

      {/* Tab panes */}
      <div className="row">
        {filteredItems.map((listing) => (
          <div className="col-sm-6 col-xl-6" key={listing.id}>
            <div className="car-listing list_style">
              <div className="thumb">
                {listing.featured ? (
                  <>
                    <div className="tag">FEATURED</div>
                  </>
                ) : undefined}
                {!listing.featured ? (
                  <>
                    <div className="tag blue">SPECIAL</div>
                  </>
                ) : undefined}

                <Image
                  width={284}
                  height={183}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  priority
                  src={listing.imageUrl}
                  alt={listing.model}
                />
                
                <div className="thmb_cntnt3">
                  <ul className="mb0">
                    <li className="list-inline-item">
                      <a href="@/app/components/home/FeaturedFilterListing#">
                        <span className="flaticon-shuffle-arrows" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="@/app/components/home/FeaturedFilterListing#">
                        <span className="flaticon-heart" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="details">
                <div className="wrapper">
                  <h5 className="price">${listing.price}</h5>
                  <h6 className="title">
                    <Link href={`/listing-single-v1/${listing.id}`}>{listing.brand} {listing.model}</Link>
                  </h6>
                </div>{" "}
                <div className="listing_footer">
                  <ul className="mb0">
                    <li className="list-inline-item">
                      <span className="flaticon-sedan-car-model me-2" />
                      {listing.engine}
                    </li>
                    <li className="list-inline-item">
                      <span className="flaticon-coin me-2" />
                      {listing.price}
                    </li>
                    <li className="list-inline-item">
                      <span className="flaticon-gear me-2" />
                      {listing.gear}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedFilterListing;
