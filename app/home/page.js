import HeroFilter from "@/app/components/common/HeroFilter";
import MobileMenu from "@/app/components/common/MobileMenu";
import WhyChoose from "@/app/components/common/WhyChoose";
import FeaturedFilterListing from "@/app/components/home/FeaturedFilterListing";
import Footer from "@/app/components/home/Footer";
import Header from "@/app/components/home/Header";
import Hero from "@/app/components/home/Hero";
import Testimonial from "@/app/components/home/Testimonial";
import Link from "next/link";

const Home = () => {
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

      {/* How It Works with filter */}
      <section className="whychose_us pb70 pt0">
        <div className="container">
          <div className="row mb20">
            <div className="col-lg-10 m-auto">
              <div className="advance_search_panel home2_style">
                <div className="row">
                  <HeroFilter />
                </div>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row mt100 justify-content-center">
            <div className="col-lg-8">
              <div className="main-title text-center">
                <h2>Why Choose Us?</h2>
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
                <h2>Featured Listings</h2>
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
                  Show All Motorcycles{" "}
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
                <h2>Our Testimonials</h2>
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
    </div>
    // End .body_home2_style
  );
};

export default Home;
