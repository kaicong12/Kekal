import { Inter } from "next/font/google";
import "aos/dist/aos.css";
import "../public/scss/main.scss";
import ClientLayout from "./components/ClientLayout";

if (typeof window !== "undefined") {
  import("bootstrap");
}

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default:
      "Perniagaan Motor Kekal - Leading Motorcycle Dealer in Johor Jaya, JB",
    template: "%s | Perniagaan Motor Kekal",
  },
  description:
    "Perniagaan Motor Kekal is Johor Bahru's trusted motorcycle dealer offering sales, repairs, and accessories for brands like Yamaha and Kawasaki.",
  keywords: [
    "kedai motor",
    "motor shop",
    "motorcycle",
    "yamaha dealer",
    "kawasaki dealer",
    "motor repair",
    "LC135",
    "motor shop Johor Bahru",
    "kedai motor johor bahru",
    "kedai motor johor jaya",
    "kedai jual motor Johor Bahru",
    "kedai motor near me",
    "yamaha shop near me",
  ],
  authors: [{ name: "Perniagaan Motor Kekal" }],
  creator: "Perniagaan Motor Kekal",
  publisher: "Perniagaan Motor Kekal",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.motorkekal.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Perniagaan Motor Kekal - Leading Motorcycle Dealer in Johor Jaya, JB",
    description:
      "Perniagaan Motor Kekal is Johor Bahru's trusted motorcycle dealer offering sales, repairs, and accessories for brands like Yamaha and Kawasaki.",
    url: "https://www.motorkekal.com",
    siteName: "Perniagaan Motor Kekal",
    images: [
      {
        url: "/images/background/website-screenshot.jpeg",
        width: 1200,
        height: 630,
        alt: "Perniagaan Motor Kekal - Motorcycle Dealer Storefront",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Perniagaan Motor Kekal - Leading Motorcycle Dealer in Johor Jaya, JB",
    description:
      "Perniagaan Motor Kekal is Johor Bahru's trusted motorcycle dealer offering sales, repairs, and accessories for brands like Yamaha and Kawasaki.",
    images: ["/images/background/website-screenshot.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} cz-shortcut-listen="false">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
