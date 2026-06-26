import MobileMenu from "@/app/components/common/MobileMenu";
import WhyChoose from "@/app/components/common/WhyChoose";
import FeaturedFilterListing from "@/app/components/home/FeaturedFilterListing";
import Footer from "@/app/components/home/Footer";
import Header from "@/app/components/home/Header";
import Hero from "@/app/components/home/Hero";
import QuickQuote from "@/app/components/home/QuickQuote";
import StickyHomeCTA from "@/app/components/common/StickyHomeCTA";
import Testimonial from "@/app/components/home/Testimonial";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

const Home = ({ params }) => {
  // When rendered as the /[locale]/home route, opt into static rendering.
  // When composed inside app/[locale]/page.js, the parent already sets it.
  if (params?.locale) setRequestLocale(params.locale);
  const t = useTranslations();
  return (
    <div className="body_home2_style">
      {/* Main Header Nav */}
      <Header />
      {/* End Main Header Nav */}

      {/* Main Header Nav For Mobile */}
      <MobileMenu />
      {/* End Main Header Nav For Mobile */}

      {/* Hero Section */}
      <section className="home-one mt10 mt70-992 p0 bdrs16 bdrs0-md ovh">
        <div className="container-fluid p0">
          <div className="row">
            <div className="col-xl-12">
              <Hero />
            </div>
          </div>
        </div>
      </section>
      {/* End Hero Section */}

      {/* Quick Quote Wizard */}
      <section className="pt30 pb70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <QuickQuote />
            </div>
          </div>
        </div>
      </section>
      {/* End Quick Quote Wizard */}

      {/* Why Choose Us */}
      <section className="whychose_us pb70 pt0">
        <div className="container">
          <div className="row mt100 justify-content-center">
            <div className="col-lg-8">
              <div className="main-title text-center">
                <h2>{t("whyChoose.heading")}</h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <WhyChoose />
          </div>
          {/* End .row */}
        </div>
        {/* End container */}
      </section>
      {/* End How It Works with filter */}

      {/* Featured Product  */}
      <div className="featured-product">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="main-title text-center">
                <h2>{t("home.featuredListings")}</h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-12" data-aos-delay="100" data-aos="fade-up">
              <FeaturedFilterListing />
            </div>
          </div>
          {/* End .row */}

          <div className="row mt20">
            <div className="col-lg-12">
              <div className="text-center">
                <Link href="/listing" className="more_listing">
                  {t("home.showAllMotorcycles")}{" "}
                  <span className="icon">
                    <span className="fas fa-plus" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
      </div>
      {/* End Featured Product  */}

      {/* Our Testimonials */}
      <div
        className="our-testimonial"
        style={{ marginTop: "30px", marginBottom: "30px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>{t("home.ourTestimonials")}</h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row justify-content-center">
            <div className="col-lg-12">
              <Testimonial />
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </div>
      {/* End Our Testimonials */}

      {/* Our Footer */}
      <Footer />
      {/* End Our Footer */}

      {/* Sticky CTA */}
      <StickyHomeCTA />
    </div>
    // End .body_home2_style
  );
};

export default Home;
