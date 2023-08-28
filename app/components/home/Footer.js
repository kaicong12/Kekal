import CopyRight from "./footer/CopyRight";
import FooterItems from "./footer/FooterItems";

const Footer = () => {
  return (
    <section className="footer_one home2_style pt50 pb25 ">
      <hr className="hr" />
      <div className="container pl30 pl15-sm pt80 pt20-sm pb70 pb0-sm">
        <FooterItems />
        {/* End .row */}
      </div>
      {/* End .container */}
      <CopyRight />
    </section>
  );
};

export default Footer;
