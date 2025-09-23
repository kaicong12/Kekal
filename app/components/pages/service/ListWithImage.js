import Image from "next/image";

const ListWithImage = () => {
  const serviceItems = [
    { text: "Motorcycle Sales", link: "#motorcycle-sales" },
    { text: "Repair & Maintenance", link: "#repair-maintenance" },
    { text: "Spare Parts & Accessories", link: "#spare-parts-accessories" },
    { text: "Distribution Services", link: "#distribution-services" },
  ];

  return (
    <div className="row">
      <div className="col-lg-6 col-xl-5">
        <div className="service_include">
          <h3 className="title">
            Comprehensive Motorcycle Solutions in Johor Bahru
          </h3>
          <p className="para">
            Perniagaan Motor Kekal is your one-stop destination for all
            motorcycle needs in Johor Bahru, Malaysia. From sales to service,
            parts to distribution, we provide comprehensive solutions backed by
            years of experience and expertise in the motorcycle industry.
          </p>
          <p className="para mb30">
            Our commitment to excellence and customer satisfaction has
            established us as a trusted name among motorcycle enthusiasts and
            dealers throughout the region.
          </p>
          <div className="row">
            <div className="col-lg-6">
              <div className="si_list">
                <ul className="mb0 order_list list-style-check-circle check_theme_color">
                  {serviceItems.slice(0, 2).map((item, index) => (
                    <li key={index}>
                      <a href={item.link}>{item.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* End .col */}

            <div className="col-lg-6">
              <div className="si_list">
                <ul className="mb0 order_list list-style-check-circle check_theme_color">
                  {serviceItems.slice(2, 4).map((item, index) => (
                    <li key={index}>
                      <a href={item.link}>{item.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>

        <div className="service_include">
          <h3 className="title">Motorcycle Sales</h3>
          <p className="para">
            At Perniagaan Motor Kekal, we pride ourselves on offering an
            extensive selection of motorcycles to suit every rider&apos;s needs
            and budget. Our showroom in Johor Bahru features the latest models
            from renowned brands including Yamaha, Honda, Kawasaki, and Suzuki.
            Whether you&apos;re a beginner looking for your first motorcycle or
            an experienced rider seeking a high-performance machine, our
            knowledgeable sales team will help you find the perfect match.
          </p>
        </div>
        {/* End service_include */}
      </div>
      {/* End col-6 */}

      <div className="col-lg-6 col-xl-6 offset-xl-1">
        <div className="service_thumb">
          <Image
            width={636}
            height={667}
            style={{
              width: "100%",
              height: "auto",
            }}
            src="https://images.unsplash.com/photo-1694274855681-1b12cd585066?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwZGVhbGVyc2hpcCUyMHNob3dyb29tfGVufDF8fHx8MTc1ODI3NTk4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Perniagaan Motor Kekal - Motorcycle Services in Johor Bahru"
          />
        </div>
      </div>
      {/* End col-6 */}
    </div>
  );
};

export default ListWithImage;
