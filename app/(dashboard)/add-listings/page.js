import DashboardHeader from "@/app/components/common/DashboardHeader";
import DashboardHeaderTop from "@/app/components/common/DashboardHeaderTop";
import DashboardSidebarMenu from "@/app/components/common/DashboardSidebarMenu";
import DashboardSidebarMobileMenu from "@/app/components/common/DashboardSidebarMobileMenu";
import HeaderSidebar from "@/app/components/common/HeaderSidebar";
import MobileMenu from "@/app/components/common/MobileMenu";
import LoginSignupModal from "@/app/components/common/login-signup";
import Additional from "@/app/components/dashboard/add-listing/Additional";
import CarFeatures from "@/app/components/dashboard/add-listing/CarFeatures";
import LocationInfo from "@/app/components/dashboard/add-listing/LocationInfo";
import Gallery from "@/app/components/dashboard/add-listing/Gallery";

export const metadata = {
  title: "Add Listing || Voiture - Automotive & Car Dealer NextJS Template",
};

const AddListings = () => {
  return (
    <div className="wrapper">
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <HeaderSidebar />
      </div>
      {/* Sidebar Panel End */}

      {/* header top */}
      <DashboardHeaderTop />
      {/* End header top */}

      {/* Main Header Nav */}
      <DashboardHeader />
      {/* End Main Header Nav */}

      {/* Main Header Nav For Mobile */}
      <MobileMenu />
      {/* End Main Header Nav For Mobile */}

      {/* Our Dashbord */}
      <section className="our-dashbord dashbord bgc-f9">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xxl-10 offset-xxl-2 dashboard_grid_space">
              <div className="row">
                <div className="col-lg-12">
                  <div className="extra-dashboard-menu dn-lg">
                    <div className="ed_menu_list">
                      <ul>
                        <DashboardSidebarMenu />
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* End .row */}

              <div className="dashboard_navigationbar dn db-lg mt50">
                <DashboardSidebarMobileMenu />
              </div>

              <div className="row">
                <div className="col-xl-8">
                  <div className="breadcrumb_content mb50">
                    <h2 className="breadcrumb_title">Add Listing</h2>
                    <p>Ready to jump back in!</p>
                  </div>
                </div>
              </div>
              {/* End .row */}

              <div className="row">
                <div className="col-lg-12">
                  <div className="new_property_form">
                    <h4 className="title mb30">Additional</h4>
                    <Additional />
                  </div>
                </div>
                {/* End col-12 Additional */}

                <div className="col-lg-12">
                  <div className="new_property_form">
                    <div className="row">
                      <div className="col-lg-12">
                        <h4 className="title mb30">Select Your Car Features</h4>
                      </div>
                      <CarFeatures />
                    </div>
                  </div>
                </div>
                {/* End col-12 CarFeatures */}

                <div className="col-lg-12">
                  <div className="new_property_form">
                    <div className="row">
                      <div className="col-lg-12">
                        <h4 className="title mb30">Gallery</h4>
                      </div>
                      {/* End .col-12 */}

                      <div className="col-lg-12">
                        <label className="form-label">Featured Image</label>
                        <Gallery />
                      </div>
                      {/* End .col-12 */}

                      <div className="col-md-12">
                        <div className="mb20">
                          <label className="form-label">
                            Video - copy any online video link e.g. YouTube,
                            Facebook, Instagram or .mp4
                          </label>
                          <input
                            name="form_name"
                            className="form-control form_control"
                            type="text"
                            placeholder="Video Link"
                          />
                        </div>
                      </div>
                      {/* End .col-12 */}
                    </div>
                  </div>
                </div>
                {/* End col-12 gallery */}

                <div className="col-lg-12">
                  <div className="new_property_form">
                    <div className="row">
                      <div className="col-lg-12">
                        <h4 className="title mb30">Location</h4>
                      </div>
                      <LocationInfo />
                    </div>
                  </div>
                </div>
                {/* End col-12 loction info */}
              </div>
              {/* End .row */}
            </div>
          </div>
        </div>
      </section>
      {/* End Our Dashbord */}

      {/* Modal */}
      <div
        className="sign_up_modal modal fade"
        id="logInModal"
        data-backdrop="static"
        data-keyboard=""
        tabIndex={-1}
        aria-hidden="true"
      >
        <LoginSignupModal />
      </div>
      {/* End Modal */}
    </div>
    // End wrapper
  );
};

export default AddListings;
