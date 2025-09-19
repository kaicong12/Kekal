import Footer from "@/app/components/common/Footer";
import DefaultHeader from "../../components/common/DefaultHeader";
import HeaderTop from "../../components/common/HeaderTop";
import MobileMenu from "../../components/common/MobileMenu";
import Map from "@/app/components/common/Map";
import Address from "@/app/components/pages/contact/Address";
import Form from "@/app/components/pages/contact/Form";

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
      <section className="our-contact  bgc-f9">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <Address />
            </div>
            {/* End .col-md-4 */}

            <div className="col-md-8">
              <div className="form_grid">
                <div className="wrapper">
                  <h3 className="title mb20">Contact Form</h3>
                  <Form />
                </div>
              </div>
            </div>
            {/* End .col-md-8 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Our Contact */}

      {/* Our Footer */}
      <Footer />
      {/* End Our Footer */}
    </div>
    // End wrapper
  );
};

export default Contact;
