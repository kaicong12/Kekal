import FooterItems from "./footer/FooterItems";
import Navigation from "./footer/Navigation";

const Footer = () => {
  return (
    <section className="footer_one home2_style p25">
      <div style={{ marginLeft: "15px" }} className="text-md-end mt15">
        <ul>
          <Navigation />
        </ul>
      </div>
      <div className="container pl30 pl15-sm pt80 pt20-sm pb70 pb0-sm">
        <FooterItems />
        {/* End .row */}
      </div>
      {/* End .container */}
    </section>
  );
};

export default Footer;
