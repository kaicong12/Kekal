import { queryMotorcyclePg, withPromotionsPg } from "@/utils/dbPg";
import BikeCard from "./BikeCard";

const SHOWN = 4;

// Related motorcycles shown on the detail page in the design's bike-grid.
// Server-rendered so the cross-links to other detail pages exist in the
// initial HTML (crawlable by Googlebot, not hidden behind client JS).
// Prefers same-brand bikes, excluding the one currently being viewed.
// `fill` tops the row up from general stock when the brand alone can't fill it.
const RelatedBikes = async ({ brand, currentId, fill = false }) => {
  const { motorcycles } = await queryMotorcyclePg({
    filterOpt: brand
      ? [{ fieldToFilter: "brand", operator: "==", filterValue: brand }]
      : [],
    limitResult: SHOWN + 1,
  });

  let picked = motorcycles.filter((m) => m.id !== currentId).slice(0, SHOWN);

  if (fill && brand && picked.length < SHOWN) {
    const seen = new Set([currentId, ...picked.map((m) => m.id)]);
    const { motorcycles: others } = await queryMotorcyclePg({
      limitResult: SHOWN * 2,
    });
    picked = [
      ...picked,
      ...others.filter((m) => !seen.has(m.id)),
    ].slice(0, SHOWN);
  }

  const bikes = await withPromotionsPg(picked);

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
