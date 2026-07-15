import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

export const metadata = {
  // Brand is appended by the layout title template.
  title: "Page Not Found",
  description: "The page you are looking for could not be found.",
  robots: {
    index: false,
    follow: true,
  },
};

// Throw notFound() so the not-found.js boundary renders with a real HTTP 404
// status. Rendering the 404 UI directly here returned 200, which Google
// treats as a soft 404 and keeps recrawling.
const NotFound = ({ params: { locale } }) => {
  setRequestLocale(locale);
  notFound();
};

export default NotFound;
