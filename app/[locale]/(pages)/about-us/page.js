import Footer from "@/app/components/common/Footer";
import DefaultHeader from "@/app/components/common/DefaultHeader";
import HeaderTop from "@/app/components/common/HeaderTop";
import MobileMenu from "@/app/components/common/MobileMenu";
import AboutTextBlock from "@/app/components/pages/about-us/AboutTextBlock";
import WhyChoose from "@/app/components/common/WhyChoose";
import Testimonial from "@/app/components/common/Testimonial";
import Map from "@/app/components/common/Map";
import ReviewBox from "@/app/components/listing/listing-single/ReviewBox";
import StickyHomeCTA from "@/app/components/common/StickyHomeCTA";
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import styles from "./about.module.css";

export const metadata = {
  title: "Tentang Kami - Kedai Motor Johor Jaya | Perniagaan Motor Kekal",
  description:
    "Perniagaan Motor Kekal, kedai motor di Johor Jaya yang dipercayai lebih 30 tahun. Yamaha dealer, Kawasaki dealer, Honda, KTM. Kedai motor terbaik di Johor Bahru.",
  keywords: [
    "perniagaan motor kekal",
    "kedai motor johor jaya",
    "motorcycle dealer johor bahru",
    "yamaha dealer johor bahru",
    "kawasaki dealer johor bahru",
    "kedai jual motor johor bahru",
  ],
  alternates: {
    canonical: "/about-us",
  },
};

const AboutUs = ({ params: { locale } }) => {
  setRequestLocale(locale);
  const t = useTranslations();
  return (
    <div className={`wrapper ${styles.aboutPage}`}>
      {/* header top */}
      <HeaderTop />
      {/* End header top */}

      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Main Header Nav For Mobile */}
      <MobileMenu />
      {/* End Main Header Nav For Mobile */}


      {/* About Text Content */}
      <section className="about-section pb130 bgc-f9">
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
                <h2>{t("whyChoose.heading")}</h2>
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
      <section className="our-testimonials-home1 pt120 bgc-f9">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="main-title text-center pt50">
                <h2>{t("about.testimonialsHeading")}</h2>
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

      <section className="user_profile_location">
        <div className="container">
          <h4 className="title">{t("about.locationHeading")}</h4>
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
              {t("about.getDirection")}
            </a>
          </div>
        </div>
      </section>
      {/* End Location */}

      <section className="bgc-f9">
        <div className="container">
          <ReviewBox />
        </div>
      </section>
      {/* End ReviewBox */}

      {/* Our Footer */}
      <Footer />
      {/* End Our Footer */}

      {/* Sticky CTA */}
      <StickyHomeCTA />
    </div>
    // End wrapper
  );
};

export default AboutUs;
