"use client";

import { useTranslations } from "next-intl";
import { Spin } from "antd";
import { useMotorcyclesPg as useMotorcycles } from "@/utils/hooks/useMotorcyclesPg";
import BikeCard from "./BikeCard";

// Home page "popular bikes" grid — shows the first four real listings.
const PopularBikes = () => {
  const t = useTranslations("mk");
  const { motorcycles, loading } = useMotorcycles();
  const bikes = motorcycles.slice(0, 4);

  if (loading) {
    return (
      <div className="mk-center">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className="bike-grid">
      {bikes.map((m, i) => (
        <BikeCard
          key={m.id}
          motorcycle={m}
          tag={i === 0 ? t("home.bestSeller") : undefined}
        />
      ))}
    </div>
  );
};

export default PopularBikes;
