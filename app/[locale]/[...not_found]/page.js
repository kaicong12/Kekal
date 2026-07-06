import NotFoundContent from "@/app/components/motorkekal/NotFoundContent";
import { setRequestLocale } from "next-intl/server";

export const metadata = {
  title: "Page Not Found - Perniagaan Motor Kekal",
  description: "The page you are looking for could not be found.",
  robots: {
    index: false,
    follow: true,
  },
};

const NotFound = ({ params: { locale } }) => {
  setRequestLocale(locale);
  return <NotFoundContent />;
};

export default NotFound;
