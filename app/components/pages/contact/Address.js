const Address = () => {
  const addressData = {
    title: "Contact Details",
    address: (
      <>
        5, Jalan Seroja 49<br /> Taman Johor Bahru,
        <br /> 81100 Johor Bahru
      </>
    ),
    subtitle: "+6 012 712 6128",
    email: "motorkekal@gmail.com",
    socialIcons: [
      { iconClass: "fab fa-facebook-f", link: "https://www.facebook.com/PerniagaanMotorKekal" },
      { iconClass: "fab fa-google", link: "https://g.co/kgs/sjKgCH" },
    ],
  };

  return (
    <div className="contact_icon_box mb50">
      <div className="details">
        <h3 className="title">{addressData.title}</h3>
        <p>{addressData.address}</p>
        <h4 className="subtitle">
          <a href={`tel:${addressData.subtitle}`}>{addressData.subtitle}</a>
        </h4>
        <p>
          <a href={`mailto:${addressData.email}`}>{addressData.email}</a>
        </p>
        <div className="footer_social_widget">
          <ul className="mb0">
            {addressData.socialIcons.map((icon, index) => (
              <li key={index} className="list-inline-item">
                <a href={icon.link}>
                  <i className={icon.iconClass} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Address;
