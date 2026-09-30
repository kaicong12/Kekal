import { DEALER_REF } from "./LocalBusinessSchema";

const SITE_URL = "https://www.motorkekal.com";

const PromotionSchema = ({ promotions = [] }) => {
  if (!promotions.length) return null;

  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Promotions at Perniagaan Motor Kekal",
    itemListElement: promotions.map((promotion, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Offer",
        name: promotion.title,
        description:
          promotion.subtitle || promotion.description || promotion.title,
        url: `${SITE_URL}/promotions`,
        availabilityStarts: new Date(promotion.startDate).toISOString(),
        availabilityEnds: new Date(promotion.endDate).toISOString(),
        priceValidUntil: new Date(promotion.endDate).toISOString(),
        ...(promotion.imageUrl ? { image: promotion.imageUrl } : {}),
        seller: DEALER_REF,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export default PromotionSchema;
