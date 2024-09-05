const FooterItems = () => {
  return (
    <div className="row">
      <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3">
        <div className="footer_about_widget">
        <h5 className="title">SHOWROOM</h5>
        <p>
            5, Jalan Seroja, 49<br />
            Taman Johor Bahru,
            <br />
            81100 Johor Bahru, Johor
        </p>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3">
        <div className="footer_contact_widget">
          <h5 className="title">NEED HELP</h5>
          <div className="footer_phone">+60127126128</div>
          <p>motorkekal@gmail.com</p>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3">
        <div className="footer_contact_widget">
          <h5 className="title">OPENING HOURS</h5>
          <p>
              Monday – Sunday: 09:00AM – 07:00PM
              <br />
              Friday: Closed
          </p>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
        <div className="footer_contact_widget">
          <h5 className="title">KEEP IN TOUCH</h5>
          <form className="footer_mailchimp_form">
            <div className="wrapper">
              <div className="col-auto">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email..."
                  required
                />
                <button type="submit">GO</button>
              </div>
            </div>
          </form>
          <p>Get latest updates and offers.</p>
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default FooterItems;
