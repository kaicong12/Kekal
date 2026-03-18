import Footer from "@/app/components/common/Footer";
import DefaultHeader from "../components/common/DefaultHeader";
import HeaderTop from "../components/common/HeaderTop";
import MobileMenu from "../components/common/MobileMenu";
import Link from "next/link";

export const metadata = {
  title: "Page Not Found - Perniagaan Motor Kekal",
  description: "The page you are looking for could not be found.",
  robots: {
    index: false,
    follow: false,
  },
};

const NotFound = () => {
  return (
    <div className="wrapper">
      {/* header top */}
      <HeaderTop />
      {/* End header top */}

      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Main Header Nav For Mobile */}
      <MobileMenu />
      {/* End Main Header Nav For Mobile */}

      {/* Error Page */}
      <section className="our-error bgc-f9">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 offset-xl-3 text-center">
              <div className="error_page footer_apps_widget">
                <h3 className="subtitle">The Page Could Not Be Found!</h3>
                <div className="erro_code">
                  <h2>
                    4<span className="text-thm">0</span>4
                  </h2>
                </div>
              </div>
              <Link className="btn_error btn-thm" href="/">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* End Error Page */}

      {/* Our Footer */}
      <Footer />
      {/* End Our Footer */}
    </div>
    // End wrapper
  );
};

export default NotFound;
