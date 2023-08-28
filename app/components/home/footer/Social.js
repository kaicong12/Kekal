const Social = () => {
  const socialIcons = [
    {
      icon: "fab fa-facebook-f",
      link: "https://www.facebook.com/PerniagaanMotorKekal"
    },
    {
      icon: "fa fa-globe",
      link: "https:://www.motorkekal.com",
    },
  ];

  return (
    <>
      {socialIcons.map((icon, index) => (
        <li className="list-inline-item" key={index}>
          <a href={icon.link}>
            <i className={icon.icon} />
          </a>
        </li>
      ))}
    </>
  );
};

export default Social;
