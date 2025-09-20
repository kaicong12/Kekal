const HeaderTop = () => {
  const socialData = [
    {
      icon: "fab fa-facebook-f",
      link: "https://www.facebook.com/PerniagaanMotorKekal/",
    },
    {
      icon: "fab fa-google",
      link: "https://share.google/OohDB8ee58dGsIflS",
    },
    {
      icon: "fab fa-whatsapp",
      link: "https://wa.me/60127126128",
    },
  ];

  const contactData = [
    {
      icon: "flaticon-phone-call",
      text: "+6012-712-6128",
    },
    {
      icon: "flaticon-map",
      text: "5, Jln Seroja 49, Taman Johor Bahru, 81100 Johor Bahru, Johor",
    },
    {
      icon: "flaticon-clock",
      text: "Mon - Sun 8:00 - 18:00",
    },
  ];

  return (
    <div className="header_top home3_style dn-992">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-xl-7">
            <div className="header_top_contact_opening_widget text-center text-md-start">
              <ul className="mb0">
                {contactData.map((contact, index) => (
                  <li className="list-inline-item" key={index}>
                    <a href="#">
                      <span className={contact.icon} />
                      {contact.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* End .col */}

          <div className="col-lg-4 col-xl-5">
            <div className="header_top_social_widgets text-center text-md-end">
              <ul className="m0">
                {socialData.map((social, index) => (
                  <li className="list-inline-item" key={index}>
                    <a href={social.link}>
                      <span className={social.icon} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* End .col */}
        </div>
        {/* End .row */}
      </div>
      {/* End .container */}
    </div>
  );
};

export default HeaderTop;
