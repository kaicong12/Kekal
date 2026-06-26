import Footer from "@/app/components/common/Footer";
import DefaultHeader from "@/app/components/common/DefaultHeader";
import HeaderTop from "@/app/components/common/HeaderTop";
import MobileMenu from "@/app/components/common/MobileMenu";
import Map from "@/app/components/common/Map";
import Address from "@/app/components/pages/contact/Address";
import Form from "@/app/components/pages/contact/Form";
import ImmediateAssistance from "@/app/components/pages/contact/ImmediateAssistance";
import BusinessHours from "@/app/components/pages/contact/BusinessHours";
import StickyHomeCTA from "@/app/components/common/StickyHomeCTA";
import { Divider } from "antd";
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Hubungi Kami - Kedai Motor Johor Jaya | Perniagaan Motor Kekal",
  description:
    "Hubungi Perniagaan Motor Kekal di Jalan Seroja 49, Johor Jaya. Tel: +60127126128. Kedai motor buka Isnin-Ahad. Parking percuma. Kedai motor near me di Johor Bahru.",
  keywords: [
    "kedai motor johor jaya",
    "kedai motor near me",
    "motorcycle shop johor bahru",
    "perniagaan motor kekal address",
    "kedai motor near me open now",
  ],
  alternates: {
    canonical: "/contact",
  },
};

const Contact = ({ params: { locale } }) => {
  setRequestLocale(locale);
  const t = useTranslations("contact");
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

      {/* <!-- Our Contact --> */}
      <section className="our-contact p0 mt0 mt70-992">
        <div className="container-fluid p0">
          <div className="row">
            <div className="col-lg-12">
              <div className="h600 map_in">
                <Map />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Our Contact --> */}

      {/* Our Contact */}
      <div className="our-contact bgc-f9" style={{ paddingTop: "50px" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <Address />

              {/* Location Section */}
              <div className="contact_location mt40">
                <h4 className="mb20">{t("visitShowroom")}</h4>
                <div className="location_info">
                  <p className="mb15">
                    <i className="fas fa-map-marker-alt text-thm me-2"></i>
                    <strong>{t("addressLabel")}</strong>
                    <br />
                    5, Jalan Seroja 49
                    <br />
                    Taman Johor Bahru,
                    <br />
                    81100 Johor Bahru, Johor
                  </p>
                  <p className="mb0">
                    <i className="fas fa-parking text-thm me-2"></i>
                    <strong>{t("parkingLabel")}</strong> {t("parkingValue")}
                  </p>
                </div>
              </div>
            </div>
            {/* End .col-lg-4 */}

            <div className="col-lg-8">
              <div className="form_grid">
                <div className="wrapper">
                  <h3 className="title mb20 mt40 mt-lg-0">{t("sendMessage")}</h3>
                  <Form />
                </div>
              </div>
            </div>
            {/* End .col-lg-8 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </div>
      {/* End Our Contact */}

      {/* Immediate Assistance Section */}
      <div className="immediate-assistance bgc-f9">
        <ImmediateAssistance />
      </div>
      {/* End Immediate Assistance */}

      {/* Business Hours Section */}
      <div className="business-hours bgc-f9">
        <BusinessHours />
      </div>
      {/* End Business Hours */}

      {/* Our Footer */}
      <Footer />
      {/* End Our Footer */}

      {/* Sticky CTA */}
      <StickyHomeCTA />
    </div>
    // End wrapper
  );
};

export default Contact;
