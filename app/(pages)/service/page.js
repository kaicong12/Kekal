import Footer from "@/app/components/common/Footer";
import DefaultHeader from "../../components/common/DefaultHeader";
import HeaderTop from "../../components/common/HeaderTop";
import MobileMenu from "../../components/common/MobileMenu";
import ListWithImage from "@/app/components/pages/service/ListWithImage";
import ServiceBlock from "@/app/components/pages/service/ServiceBlock";
import ScheduleService from "@/app/components/pages/service/ScheduleService";
import ServiceHours from "@/app/components/pages/service/ServiceHours";

export const metadata = {
  title: "Servis Motor Johor Bahru - Yamaha, Kawasaki Service Center",
  description:
    "Pusat servis motor di Johor Jaya, JB. Kawasaki service center, Yamaha service center, bengkel motor untuk semua jenama. Servis berkualiti, harga berpatutan. Book sekarang.",
  keywords: [
    "kawasaki service center johor bahru",
    "yamaha service center johor bahru",
    "servis motor johor bahru",
    "bengkel motor johor jaya",
    "motorcycle service near me",
    "service motor",
    "bengkel motor near me",
    "jb motorcycle service center",
    "servis motor yamaha near me",
  ],
  alternates: {
    canonical: "/service",
  },
};

const Service = () => {
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

      {/* <!-- Inner Page Breadcrumb --> */}
      <section className="inner_page_breadcrumb style2 bgc-f9 bt1">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="breadcrumb_content style2">
                <h2 className="breadcrumb_title">
                  Motorcycle Service in Johor Bahru
                </h2>
                <p className="subtitle">Your trusted motorcycle dealer in JB</p>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Motorcycle Service
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Inner Page Breadcrumb --> */}

      {/* Service Section Area */}
      <section className="our-service bgc-f9 pb90 pt0">
        <div className="container">
          <ListWithImage />
        </div>
      </section>
      {/* End Service Section Area */}

      {/* Service Section Area */}
      <div className="our-service">
        <ServiceBlock />
      </div>
      {/* Service Section Area */}

      {/* Service Forms Section Area */}
      <section className="service-forms bgc-f9">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-xl-8">
              <div className="service_form mb30-sm">
                <h5 className="title">Schedule Service</h5>
                <ScheduleService />
              </div>
            </div>
            {/* End .col */}

            <div className="col-md-5 col-xl-4">
              <div className="opening_hour_widgets">
                <div className="wrapper">
                  <h4 className="title">Opening hours</h4>
                  <ServiceHours />
                </div>
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Service Forms Section Area */}

      {/* Our Footer */}
      <Footer />
      {/* End Our Footer */}
    </div>
    // End wrapper
  );
};

export default Service;
