import SiteHeader from "@/app/components/motorkekal/SiteHeader";
import SiteFooter from "@/app/components/motorkekal/SiteFooter";
import MobileBar from "@/app/components/motorkekal/MobileBar";
import { Link } from "@/i18n/navigation";
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Page Not Found - Perniagaan Motor Kekal",
  description: "The page you are looking for could not be found.",
  robots: {
    index: false,
    follow: false,
  },
};

const NotFound = ({ params: { locale } }) => {
  setRequestLocale(locale);
  const t = useTranslations("notFound");
  return (
    <div className="wrapper" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <SiteHeader />

      <section className="our-error bgc-f9" style={{ flex: 1 }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 offset-xl-3 text-center">
              <div className="error_page">
                <div className="erro_code">
                  <h2>
                    4<span className="text-thm">0</span>4
                  </h2>
                </div>
                <h3
                  className="subtitle"
                  style={{ marginBottom: "12px", fontWeight: 700 }}
                >
                  {t("title")}
                </h3>
                <p style={{ color: "#5f6973", marginBottom: "35px" }}>
                  {t("description")}
                </p>
              </div>
              <Link className="btn_error" href="/">
                {t("backHome")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
      <MobileBar />
    </div>
  );
};

export default NotFound;
