import { queryMotorcyclePg } from "@/utils/dbPg";
import BikeCard from "./BikeCard";

// Related motorcycles shown on the detail page in the design's bike-grid.
// Server-rendered so the cross-links to other detail pages exist in the
// initial HTML (crawlable by Googlebot, not hidden behind client JS).
// Prefers same-brand bikes, excluding the one currently being viewed.
const RelatedBikes = async ({ brand, currentId }) => {
  const { motorcycles } = await queryMotorcyclePg({
    filterOpt: brand
      ? [{ fieldToFilter: "brand", operator: "==", filterValue: brand }]
      : [],
    limitResult: 5,
  });

  const bikes = motorcycles.filter((m) => m.id !== currentId).slice(0, 4);

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
