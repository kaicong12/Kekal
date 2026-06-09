import { Inter, Space_Grotesk } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import "aos/dist/aos.css";
import "@/public/scss/main.scss";
import ClientLayout from "@/app/components/ClientLayout";
import LocalBusinessSchema from "@/app/components/seo/LocalBusinessSchema";
import WebSiteSchema from "@/app/components/seo/WebSiteSchema";
import { routing } from "@/i18n/routing";

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

// OpenGraph locale codes keyed by our locale slugs.
const OG_LOCALE = { en: "en_MY", ms: "ms_MY", zh: "zh_MY" };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

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
    "motor jb",
    "jual motor jb",
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
    languages: {
      en: "/",
      ms: "/ms",
      zh: "/zh",
      "x-default": "/",
    },
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

export default async function RootLayout({ children, params: { locale } }) {
  // Validate the incoming locale and opt into static rendering.
  if (!routing.locales.includes(locale)) {
    notFound();
  }
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <LocalBusinessSchema />
        <WebSiteSchema />
        <meta property="og:locale" content={OG_LOCALE[locale]} />
      </head>
      <body
        className={`${inter.className} ${spaceGrotesk.variable}`}
        cz-shortcut-listen="false"
      >
        <NextIntlClientProvider messages={messages}>
          <ClientLayout>{children}</ClientLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
