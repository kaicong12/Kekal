"use client";

import { Spin } from "antd";
import { useMotorcyclesPg as useMotorcycles } from "@/utils/hooks/useMotorcyclesPg";
import BikeCard from "./BikeCard";

// Related motorcycles shown on the detail page in the design's bike-grid.
// Prefers same-brand bikes, excluding the one currently being viewed.
const RelatedBikes = ({ brand, currentId }) => {
  const { motorcycles, loading } = useMotorcycles(brand);
  const bikes = motorcycles.filter((m) => m.id !== currentId).slice(0, 4);

  if (loading) {
    return (
      <div className="mk-center">
        <Spin size="large" />
      </div>
    );
  }

  if (bikes.length === 0) return null;

  return (
    <div className="bike-grid">
      {bikes.map((m) => (
        <BikeCard key={m.id} motorcycle={m} />
      ))}
    </div>
  );
};

export default RelatedBikes;
