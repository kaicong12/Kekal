const localBusinessData = {
  "@context": "https://schema.org",
  "@type": "MotorcycleDealer",
  name: "Perniagaan Motor Kekal",
  description:
    "Johor Bahru's trusted motorcycle dealer offering sales, repairs, and accessories for brands like Yamaha and Kawasaki. Serving riders for over 30 years.",
  url: "https://www.motorkekal.com",
  telephone: "+60127126128",
  address: {
    "@type": "PostalAddress",
    streetAddress: "5, Jalan Seroja 49, Taman Johor Bahru",
    addressLocality: "Johor Bahru",
    addressRegion: "Johor",
    postalCode: "81100",
    addressCountry: "MY",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 1.4927,
    longitude: 103.7732,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "08:30",
      closes: "19:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  image: "https://www.motorkekal.com/images/background/website-screenshot.jpeg",
  priceRange: "RM",
  sameAs: ["https://www.facebook.com/PerniagaanMotorKekal/"],
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
