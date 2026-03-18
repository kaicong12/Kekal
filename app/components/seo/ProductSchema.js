const ProductSchema = ({ motorcycle }) => {
  const productData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: motorcycle.name,
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
      price: motorcycle.price,
      priceCurrency: "MYR",
      availability: "https://schema.org/InStock",
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
