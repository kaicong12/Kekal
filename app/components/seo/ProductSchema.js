import { toMotorcycleSlug } from "@/utils/slug";

const ProductSchema = ({ motorcycle }) => {
  const url = `https://www.motorkekal.com/motorcycle/${toMotorcycleSlug(
    motorcycle
  )}`;
  const productData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: motorcycle.name,
    url,
    description:
      motorcycle.description ||
      `${motorcycle.name} for sale at Perniagaan Motor Kekal, Johor Bahru.`,
    brand: {
      "@type": "Brand",
      name: motorcycle.brand,
    },
    image: motorcycle.images?.[0]?.url || motorcycle.imageUrl,
    offers: {
      "@type": "Offer",
      url,
      price: motorcycle.price,
      priceCurrency: "MYR",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@type": "Organization",
        name: "Perniagaan Motor Kekal",
      },
    },
  };

  if (motorcycle.year) {
    productData.model = motorcycle.model;
    productData.productionDate = motorcycle.year;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(productData) }}
    />
  );
};

export default ProductSchema;
