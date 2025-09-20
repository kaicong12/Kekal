import Footer from "@/app/components/common/Footer";
import DefaultHeader from "../../components/common/DefaultHeader";
import HeaderTop from "../../components/common/HeaderTop";
import MobileMenu from "../../components/common/MobileMenu";
import Map from "@/app/components/common/Map";
import Address from "@/app/components/pages/contact/Address";
import Form from "@/app/components/pages/contact/Form";
import ImmediateAssistance from "@/app/components/pages/contact/ImmediateAssistance";
import BusinessHours from "@/app/components/pages/contact/BusinessHours";
import { Divider } from "antd";

export const metadata = {
  title:
    "Perniagan Motor Kekal - Contact Us Page || Motorcycle Shop in Johor Bahru",
  description:
    "Looking for a motorcycle dealer in Johor Bahru? Visit our service page for the best motorcycle in JB. Find kedai motor near me for top-notch services.",
  keywords:
    "kedai motor near me, kedia jual motor near me, yamaha shop near me, kedai motor johor jaya, kedai motor johor bahru, yamaha johor bahru, kedai motor, motorcycle shop johor bahru",
};

const Contact = () => {
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
      <div className="our-contact bgc-f9">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main_title text-center mb50">
                <h2>Get In Touch With Us</h2>
                <p className="text">
                  We&apos;re here to help you find the perfect motorcycle or
                  answer any questions you may have.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <Address />

              {/* Location Section */}
              <div className="contact_location mt40">
                <h4 className="mb20">Visit Our Showroom</h4>
                <div className="location_info">
                  <p className="mb15">
                    <i className="fas fa-map-marker-alt text-thm me-2"></i>
                    <strong>Address:</strong>
                    <br />
                    5, Jalan Seroja 49
                    <br />
                    Taman Johor Bahru,
                    <br />
                    81100 Johor Bahru, Johor
                  </p>
                  <p className="mb0">
                    <i className="fas fa-parking text-thm me-2"></i>
                    <strong>Parking:</strong> Free parking available in front of
                    our showroom.
                  </p>
                </div>
              </div>
            </div>
            {/* End .col-lg-4 */}

            <div className="col-lg-8">
              <div className="form_grid">
                <div className="wrapper">
                  <h3 className="title mb20 mt40 mt-lg-0">Send Us A Message</h3>
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
    </div>
    // End wrapper
  );
};

export default Contact;
