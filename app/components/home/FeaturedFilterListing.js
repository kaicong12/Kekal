"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useMotorcycles } from "@/utils/hooks/useMotorcycles";
import { Spin } from "antd";

const FeaturedFilterListing = () => {
  const [filter, setFilter] = useState("*");
  const { motorcycles: data, loading } = useMotorcycles();

  const filteredItems =
    filter === "*"
      ? data.slice(0, 6)
      : data.slice(0, 6).filter((item) => item.tags?.includes(filter));

  return (
    <div className="popular_listing_sliders">
      {/* Tab panes */}
      <div className="row">
        {loading ? (
          <div style={{ textAlign: "center" }}>
            <Spin size="large" />
          </div>
        ) : (
          filteredItems.map((listing) => (
            <div className="col-sm-6 col-xl-6" key={listing.id}>
              <Link
                href={`/listing-single-v1/${listing.id}`}
                className="text-decoration-none"
              >
                <div
                  className="car-listing list_style"
                  style={{ cursor: "pointer" }}
                >
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
                          <a href="#" onClick={(e) => e.stopPropagation()}>
                            <span className="flaticon-shuffle-arrows" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#" onClick={(e) => e.stopPropagation()}>
                            <span className="flaticon-heart" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="details">
                    <div className="wrapper">
                      <h5 className="price">RM {listing.price}</h5>
                      <h6 className="title">
                        {listing.brand} {listing.model}
                      </h6>
                    </div>{" "}
                    <div className="listing_footer">
                      <ul className="mb0">
                        {listing?.specifications?.Displacement ? (
                          <li className="list-inline-item">
                            <span className="flaticon-sedan-car-model me-2" />
                            {listing?.specifications?.Displacement}
                          </li>
                        ) : null}
                        <li className="list-inline-item">
                          <span className="flaticon-coin me-2" />
                          RM {listing.price}
                        </li>
                        {listing?.specifications?.["Maximum Power"] ? (
                          <li className="list-inline-item">
                            <span className="flaticon-gear me-2" />
                            {listing?.specifications?.["Maximum Power"]}
                          </li>
                        ) : null}
                      </ul>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FeaturedFilterListing;
