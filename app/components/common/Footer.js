import FooterItems from "./footer/FooterItems";
import Navigation from "./footer/Navigation";

const Footer = () => {
  return (
    <section className="footer_one pt50 pb25">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-xl-5">
            <div className="footer_menu_widget text-start text-md-end mt15">
              <ul>
                <Navigation />
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End .container */}

      <hr />
      <div className="container pt80 pt20-sm pb70 pb0-sm">
        <FooterItems />
        {/* End .row */}
      </div>
      {/* End .container */}
    </section>
  );
};

export default Footer;
