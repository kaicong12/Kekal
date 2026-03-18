export const metadata = {
  title: "Motorcycles For Sale in Johor Bahru",
  description:
    "Browse our full range of new motorcycles for sale at Perniagaan Motor Kekal. Yamaha, Kawasaki, Honda, KTM and more. Best prices in Johor Bahru.",
  keywords: [
    "motorcycle for sale",
    "motor murah",
    "beli motor",
    "kedai motor johor bahru",
    "yamaha for sale JB",
    "kawasaki for sale JB",
    "honda motorcycle johor",
    "motorcycle listing",
  ],
  alternates: {
    canonical: "/listing",
  },
  openGraph: {
    title: "Motorcycles For Sale - Perniagaan Motor Kekal",
    description:
      "Browse our full range of new motorcycles. Yamaha, Kawasaki, Honda, KTM and more at the best prices in Johor Bahru.",
    url: "https://www.motorkekal.com/listing",
    type: "website",
  },
};

export default function ListingLayout({ children }) {
  return children;
}
