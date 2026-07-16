import { toMotorcycleSlug } from "@/utils/slug";

const BASE_URL = "https://www.motorkekal.com";

const BrandCollectionSchema = ({ brand, motorcycles, brandSlug }) => {
  const data = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${brand} Motorcycles at Perniagaan Motor Kekal`,
    url: `${BASE_URL}/brands/${brandSlug}`,
    description: `Browse ${brand} motorcycles available at Perniagaan Motor Kekal, Johor Bahru.`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: motorcycles.length,
      itemListElement: motorcycles.slice(0, 20).map((moto, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${BASE_URL}/motorcycle/${toMotorcycleSlug(moto)}`,
        name: `${moto.brand} ${moto.name}`,
      })),
    },
    provider: {
      "@type": "MotorcycleDealer",
      name: "Perniagaan Motor Kekal",
      url: BASE_URL,
      address: {
        "@type": "PostalAddress",
        streetAddress: "5, Jalan Seroja 49, Taman Johor Bahru",
        addressLocality: "Johor Bahru",
        addressRegion: "Johor",
        postalCode: "81100",
        addressCountry: "MY",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export default BrandCollectionSchema;
