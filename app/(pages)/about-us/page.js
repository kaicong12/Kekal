import Footer from "@/app/components/common/Footer";
import DefaultHeader from "../../components/common/DefaultHeader";
import HeaderTop from "../../components/common/HeaderTop";
import MobileMenu from "../../components/common/MobileMenu";
import AboutTextBlock from "@/app/components/pages/about-us/AboutTextBlock";
import WhyChoose from "@/app/components/common/WhyChoose";
import Testimonial from "@/app/components/common/Testimonial";
import Map from "@/app/components/common/Map";
import ReviewBox from "@/app/components/listing/listing-single/ReviewBox";
import ReviewSection from "@/app/components/pages/about-us/ReviewSection";

export const metadata = {
  title:
    "Perniagaan Motor Kekal - Leading Motorcycle Dealer in Johor Bahru, Johor Bahru",
  description:
    "Perniagaan Motor Kekal is Johor Bahru's trusted motorcycle dealer offering sales, repairs, and accessories for brands like Yamaha and Kawasaki.",
  keywords: [
    "kedai motor",
    "motor shop",
    "motorcycle",
    "yamaha dealer",
    "kawasaki dealer",
    "motor repair",
    "LC135",
    "motor shop Johor Bahru",
    "kedai motor johor bahru",
  ],
};

const AboutUs = () => {
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

      {/* Inner Page Breadcrumb */}
      <section className="inner_page_breadcrumb">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="breadcrumb_content">
                <h2 className="breadcrumb_title">About Us</h2>
                <p className="subtitle">About Us</p>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/#">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    <a href="#">About Us</a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Inner Page Breadcrumb */}

      {/* About Text Content */}
      <section className="about-section pb130">
        <div className="container">
          <div className="row">
            <AboutTextBlock />
          </div>
        </div>
      </section>
      {/* End About Text Content */}

      {/* Why Chose Us */}
      <section className="why-chose pb90 pt0-md">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="main-title text-center">
                <h2>Why Choose Us?</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <WhyChoose />
          </div>
        </div>
      </section>
      {/* End Why Chose Us */}

      {/* Testimonials  */}
      <section className="our-testimonials-home1 pt120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="main-title text-center pt50">
                <h2>Testimonials</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="testimonial_slider_home1">
                <Testimonial />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Testimonials  */}

      <div className="user_profile_location">
        <h4 className="title">Location</h4>
        <div className="property_sp_map mb40">
          <div className="h400 bdrs8 map_in" id="map-canvas">
            <Map />
          </div>
        </div>
        <div className="upl_content d-block d-md-flex">
          <p className="float-start fn-sm mb20-sm">
            <span className="fas fa-map-marker-alt pr10 vam" />
            5, Jln Seroja 49, Taman Johor Bahru, 81100 Johor Bahru, Johor
          </p>
          <a
            href="https://maps.app.goo.gl/a9Fs6RkRSR8dnnsE9"
            className="btn location_btn"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            target="_blank"
          >
            Get Direction
          </a>
        </div>
      </div>
      {/* End Location */}

      <ReviewBox />
      {/* End ReviewBox */}

      {/* Review Section */}
      <ReviewSection />
      {/* End Review Section */}

      {/* Our Footer */}
      <Footer />
      {/* End Our Footer */}
    </div>
    // End wrapper
  );
};

export default AboutUs;
