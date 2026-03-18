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
    <div className="wrapper" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
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
                  Page Not Found
                </h3>
                <p style={{ color: "#5f6973", marginBottom: "35px" }}>
                  The page you are looking for might have been removed or is
                  temporarily unavailable.
                </p>
              </div>
              <Link className="btn_error" href="/">
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
