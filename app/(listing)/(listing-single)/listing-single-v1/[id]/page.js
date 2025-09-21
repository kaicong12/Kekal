import Footer from "@/app/components/common/Footer";
import DefaultHeader from "@/app/components/common/DefaultHeader";
import HeaderTop from "@/app/components/common/HeaderTop";
import MobileMenu from "@/app/components/common/MobileMenu";
import BreadCrumb from "@/app/components/listing/listing-single/BreadCrumb";
import ProductGallery from "@/app/components/listing/listing-single/listing-single-v1/ProductGallery";
import Overview from "@/app/components/listing/listing-single/Overview";
import LoanCalculator from "@/app/components/listing/LoanCalculator";
import ContactSeller from "@/app/components/listing/listing-single/sidebar/ContactSeller";
import Link from "next/link";
import ReleatedCar from "@/app/components/listing/listing-single/ReleatedCar";

import { getMotorcycleById } from "@/utils/db";

export async function generateMetadata({ params }) {
  try {
    const motorcycleData = await getMotorcycleById(params.id);

    if (!motorcycleData) {
      return {
        title: "Motorcycle Not Found - Perniagaan Motor Kekal",
        description: "The requested motorcycle listing could not be found.",
      };
    }

    return {
      title: `${motorcycleData.name} - RM${motorcycleData.price} | Perniagaan Motor Kekal`,
      description: `${motorcycleData.name} for sale at RM${
        motorcycleData.price
      }. ${
        motorcycleData.description ||
        "Quality motorcycle from trusted dealer in Johor Bahru, Johor Jaya."
      }`,
      keywords: [
        motorcycleData.brand,
        motorcycleData.model,
        motorcycleData.name,
        "kedai motor",
        "motor shop",
        "motorcycle",
        "motor shop Johor Bahru",
        "motor shop Johor Jaya",
        "kedai motor johor bahru",
        "kedai motor johor jaya",
        `${motorcycleData.brand} dealer`,
      ],
      openGraph: {
        title: `${motorcycleData.name} - RM${motorcycleData.price}`,
        description: `${motorcycleData.name} for sale at RM${motorcycleData.price}`,
        url: `https://motorkekal.com/listing-single-v1/${params.id}`,
        siteName: "Perniagaan Motor Kekal",
        type: "website",
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
        },
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Perniagaan Motor Kekal - Motorcycle Dealer",
      description: "Authorized motorcycle dealer in Johor Bahru",
    };
  }
}

const ListingSingleV1 = async ({ params }) => {
  const motorcycleData = await getMotorcycleById(params.id);

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

      {/* Agent Single Grid View */}
      <section className="our-agent-single bgc-f9 pb90 mt70-992 pt30">
        <div className="container">
          <div className="row mb30">
            <div className="col-xl-12">
              <div className="breadcrumb_content style2">
                <BreadCrumb />
              </div>
            </div>
          </div>
          {/* End .row bradcrumb */}

          <div className="row mb30">
            <div className="col-lg-7 col-xl-8">
              <div className="single_page_heading_content">
                <div className="car_single_content_wrapper">
                  <ul className="car_info mb20-md">
                    <li className="list-inline-item">
                      <a href="#">BRAND NEW - IN STOCK</a>
                    </li>
                  </ul>
                  <h2 className="title" style={{ marginBottom: "0" }}>
                    {motorcycleData.name}
                  </h2>
                </div>
              </div>
            </div>
            {/* End .col-lg-7 */}

            <div className="col-lg-5 col-xl-4">
              <div className="single_page_heading_content text-start text-lg-end">
                <div className="price_content">
                  <div className="price">
                    <small
                      className="mr15"
                      style={{ marginLeft: "4px", fontSize: "16px" }}
                    >
                      RM {motorcycleData.price}
                    </small>
                  </div>
                </div>
              </div>
            </div>
            {/* End col-lg-5 */}
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-8 col-xl-8">
              <ProductGallery
                brand={motorcycleData.brand}
                modelName={motorcycleData.name}
              />
              {/* End Car Gallery */}

              <div className="opening_hour_widgets p30 mt30">
                <div className="wrapper">
                  <h4 className="title">Overview</h4>
                  <Overview
                    productSpecification={motorcycleData.specifications}
                  />
                </div>
              </div>
              {/* End opening_hour_widgets */}

              <div className="listing_single_description mt30">
                <h4 className="mb30">
                  Description{" "}
                  <span className="float-end body-color fz13">
                    {motorcycleData.brand} {motorcycleData.model}
                  </span>
                </h4>
                <p className="first-para">{motorcycleData.description}</p>
              </div>
              {/* End car descriptions */}

              {/* Loan Calculator */}
              <div className="loanCalculator mt30">
                <LoanCalculator motorcycle={motorcycleData} />
              </div>
            </div>
            {/* End .col-xl-8 */}

            <div className="col-lg-4 col-xl-4">
              <div className="sidebar_seller_contact">
                <h4 className="mb30">Contact Seller</h4>
                <ContactSeller />
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Agent Single Grid View */}

      {/* Car For Rent */}
      <section className="car-for-rent bb1">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="main-title text-center text-md-start mb10-520">
                <h2 className="title">Related Best Bikes</h2>
              </div>
            </div>
            {/* End .col-sm-6 */}

            <div className="col-sm-6">
              <div className="text-center text-md-end mb30-520">
                <Link href="/listing" className="more_listing">
                  Show All Bikes
                  <span className="icon">
                    <span className="fas fa-plus" />
                  </span>
                </Link>
              </div>
            </div>
            {/* End .col-sm-6 */}
          </div>
          {/* End .row */}

          <div className="col-lg-12">
            <div
              className="home1_popular_listing home3_style"
              data-aos-delay="100"
            >
              <div className="listing_item_4grid_slider nav_none">
                <ReleatedCar
                  currentMotorcycle={motorcycleData}
                  currentMotorId={params.id}
                />
              </div>
            </div>
          </div>
          {/* End .col-lg-12 */}
        </div>
        {/* End .container */}
      </section>
      {/* End Car For Rent */}

      {/* Our Footer */}
      <Footer />
      {/* End Our Footer */}
    </div>
    // End wrapper
  );
};

export default ListingSingleV1;
