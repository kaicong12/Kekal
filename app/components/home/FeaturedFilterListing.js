"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useMotorcyclesPg as useMotorcycles } from "@/utils/hooks/useMotorcyclesPg";
import { toMotorcycleSlug } from "@/utils/slug";
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
      <div className="row car-listing-grid">
        {loading ? (
          <div style={{ textAlign: "center", minHeight: "400px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Spin size="large" />
          </div>
        ) : (
          filteredItems.map((listing) => (
            <div className="col-sm-6 col-lg-4" key={listing.id}>
              <Link
                href={`/motorcycle/${toMotorcycleSlug(listing)}`}
                className="text-decoration-none"
              >
                <div className="car-listing" style={{ cursor: "pointer" }}>
                  <div className="thumb">
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
                  </div>
                  <div className="details">
                    <h6 className="card-title">{listing.name}</h6>
                    <div className="spec-grid">
                      <div className="spec-item">
                        <span className="spec-label">ENGINE</span>
                        <span className="spec-value">
                          {listing.engineCapacity
                            ? `${listing.engineCapacity}cc${listing.engine ? ` ${listing.engine}` : ""}`
                            : listing.engine || "-"}
                        </span>
                      </div>
                      <div className="spec-item">
                        <span className="spec-label">PRICE</span>
                        <span className="spec-value">RM {listing.price?.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="view-details-btn">View Details</div>
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
