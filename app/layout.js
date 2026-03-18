import { Inter } from "next/font/google";
import "aos/dist/aos.css";
import "../public/scss/main.scss";
import ClientLayout from "./components/ClientLayout";
import LocalBusinessSchema from "./components/seo/LocalBusinessSchema";
import WebSiteSchema from "./components/seo/WebSiteSchema";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default:
      "Kedai Motor Johor Jaya | Perniagaan Motor Kekal - Motorcycle Dealer JB",
    template: "%s | Perniagaan Motor Kekal",
  },
  description:
    "Kedai motor Johor Jaya & Johor Bahru yang dipercayai lebih 30 tahun. Jual motor baru Yamaha, Kawasaki, Honda, KTM. Servis, repair & aksesori. Harga terbaik di JB.",
  keywords: [
    "kedai motor johor jaya",
    "kedai motor johor bahru",
    "kedai motor near me",
    "kedai jual motor johor bahru",
    "motorcycle shop johor bahru",
    "yamaha johor jaya",
    "yamaha dealer johor bahru",
    "kawasaki service center johor bahru",
    "kedai motor",
    "motor shop near me",
    "kedai motor jb",
    "motorbike shop johor bahru",
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
      "Kedai Motor Johor Jaya | Perniagaan Motor Kekal - Motorcycle Dealer JB",
    description:
      "Kedai motor Johor Jaya & Johor Bahru yang dipercayai. Jual motor baru Yamaha, Kawasaki, Honda, KTM. Servis & repair. Harga terbaik di JB.",
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
    locale: "en_MY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Kedai Motor Johor Jaya | Perniagaan Motor Kekal - Motorcycle Dealer JB",
    description:
      "Kedai motor Johor Jaya & Johor Bahru yang dipercayai. Jual motor baru Yamaha, Kawasaki, Honda, KTM. Servis & repair. Harga terbaik di JB.",
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
      <head>
        <LocalBusinessSchema />
        <WebSiteSchema />
      </head>
      <body className={inter.className} cz-shortcut-listen="false">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
