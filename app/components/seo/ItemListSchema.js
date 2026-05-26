import { listMotorcyclesPg } from "@/utils/dbPg";
import { toMotorcycleSlug } from "@/utils/slug";

const ItemListSchema = async () => {
  try {
    const motorcycles = await listMotorcyclesPg();

    const itemListData = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Motorcycles for Sale — Perniagaan Motor Kekal, Johor Bahru",
      url: "https://www.motorkekal.com/listing",
      numberOfItems: motorcycles.length,
      itemListElement: motorcycles.slice(0, 20).map((moto, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://www.motorkekal.com/motorcycle/${toMotorcycleSlug(moto)}`,
        name: moto.name,
      })),
    };

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListData) }}
      />
    );
  } catch {
    return null;
  }
};

export default ItemListSchema;
