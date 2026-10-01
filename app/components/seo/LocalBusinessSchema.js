import { MAPS_URL } from "@/app/components/motorkekal/waLink";

export const DEALER_ID = "https://www.motorkekal.com/#dealer";

export const DEALER_REF = {
  "@type": "MotorcycleDealer",
  "@id": DEALER_ID,
  name: "Perniagaan Motor Kekal",
};

const localBusinessData = {
  "@context": "https://schema.org",
  "@type": "MotorcycleDealer",
  "@id": DEALER_ID,
  name: "Perniagaan Motor Kekal",
  legalName: "Perniagaan Motor Kekal",
  alternateName: ["Motor Kekal", "Kedai Motor Kekal"],
  description:
    "Kedai motor di Johor Jaya, Johor Bahru yang dipercayai lebih 30 tahun. Jual motor baru Yamaha, Kawasaki, Honda, KTM, Modenas. Servis, repair & aksesori motor.",
  url: "https://www.motorkekal.com",
  telephone: "+60127126128",
  address: {
    "@type": "PostalAddress",
    streetAddress: "5, Jalan Seroja 49, Taman Johor Jaya",
    addressLocality: "Johor Bahru",
    addressRegion: "Johor",
    postalCode: "81100",
    addressCountry: "MY",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 1.5350979,
    longitude: 103.8011779,
  },
  areaServed: [
    { "@type": "City", name: "Johor Bahru" },
    { "@type": "Place", name: "Johor Jaya" },
    { "@type": "Place", name: "Pasir Gudang" },
    { "@type": "Place", name: "Tebrau" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Saturday", "Sunday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  image:
    "https://www.motorkekal.com/images/background/website-screenshot.jpeg",
  foundingDate: "1992-07-13",
  priceRange: "RM",
  hasMap: MAPS_URL,
  sameAs: [
    "https://www.facebook.com/PerniagaanMotorKekal/",
    MAPS_URL,
  ],
};

const LocalBusinessSchema = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
    />
  );
};

export default LocalBusinessSchema;
