import Footer from "@/app/components/common/Footer";
import DefaultHeader from "../components/common/DefaultHeader";
import HeaderTop from "../components/common/HeaderTop";
import MobileMenu from "../components/common/MobileMenu";
import Link from "next/link";

export const metadata = {
  title:
    "Perniagan Motor Kekal - 404 Not found Page || Motorcycle Shop in Johor Bahru",
  description:
    "Looking for a motorcycle dealer in Johor Bahru? Visit our service page for the best motorcycle in JB. Find kedai motor near me for top-notch services.",
  keywords:
    "kedai motor near me, kedia jual motor near me, yamaha shop near me, kedai motor johor jaya, kedai motor johor bahru, yamaha johor bahru, kedai motor, motorcycle shop johor bahru",
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
