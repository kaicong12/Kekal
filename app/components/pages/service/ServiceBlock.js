import Image from "next/image";

const ServiceBlock = () => {
  const services = [
    {
      id: "motorcycle-sales",
      title: "Motorcycle Sales",
      description:
        "Wide selection of new and pre-owned motorcycles from trusted brands",
      image:
        "https://images.unsplash.com/photo-1694274855681-1b12cd585066?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwZGVhbGVyc2hpcCUyMHNob3dyb29tfGVufDF8fHx8MTc1ODI3NTk4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      detailedDescription:
        "At Perniagaan Motor Kekal, we pride ourselves on offering an extensive selection of motorcycles to suit every rider&apos;s needs and budget. Our showroom in Johor Bahru features the latest models from renowned brands including Yamaha, Honda, Kawasaki, and Suzuki. Whether you&apos;re a beginner looking for your first motorcycle or an experienced rider seeking a high-performance machine, our knowledgeable sales team will help you find the perfect match.",
      features: [
        "New motorcycles with full manufacturer warranty",
        "Certified pre-owned motorcycles with quality guarantee",
        "Competitive pricing and flexible financing options",
        "Trade-in services for your current motorcycle",
        "Complete documentation and registration assistance",
      ],
    },
    {
      id: "repair-maintenance",
      title: "Repair & Maintenance",
      description:
        "Professional motorcycle repair and maintenance services by certified technicians",
      image:
        "https://images.unsplash.com/photo-1623221013483-1f3cbeffdcec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwcmVwYWlyJTIwc2VydmljZXxlbnwxfHx8fDE3NTgyNzU5ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      detailedDescription:
        "Our state-of-the-art service center is equipped with the latest diagnostic tools and staffed by certified technicians with years of experience. We provide comprehensive repair and maintenance services to keep your motorcycle running at peak performance. From routine oil changes to complex engine rebuilds, we handle it all with precision and care.",
      features: [
        "Engine diagnostics and repair",
        "Brake system maintenance and replacement",
        "Transmission and clutch services",
        "Electrical system troubleshooting",
        "Scheduled maintenance programs",
        "Emergency roadside assistance coordination",
      ],
    },
    {
      id: "spare-parts-accessories",
      title: "Spare Parts & Accessories",
      description:
        "Genuine spare parts and premium accessories for all motorcycle brands",
      image:
        "https://images.unsplash.com/photo-1675247911627-0fb610250598?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwcGFydHMlMjBhY2Nlc3Nvcmllc3xlbnwxfHx8fDE3NTgyNzU5ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      detailedDescription:
        "Our extensive parts department stocks genuine OEM parts and high-quality aftermarket components for all major motorcycle brands. We also carry a wide range of accessories to enhance your riding experience, from performance upgrades to comfort and safety equipment. Our parts specialists can help you find exactly what you need.",
      features: [
        "Genuine OEM parts with manufacturer warranty",
        "High-quality aftermarket alternatives",
        "Performance enhancement parts",
        "Safety gear and protective equipment",
        "Custom accessories and styling parts",
        "Fast ordering for special requests",
      ],
    },
    {
      id: "distribution-services",
      title: "Distribution Services",
      description:
        "Reliable distribution network for motorcycle dealers across the region",
      image:
        "https://images.unsplash.com/photo-1694274855681-1b12cd585066?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwZGVhbGVyc2hpcCUyMHNob3dyb29tfGVufDF8fHx8MTc1ODI3NTk4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      detailedDescription:
        "As an established distributor in the Johor region, Perniagaan Motor Kekal serves as a reliable partner for motorcycle dealers throughout Malaysia. Our efficient distribution network ensures timely delivery of motorcycles, parts, and accessories to our dealer partners, supporting their business growth and customer satisfaction.",
      features: [
        "Wholesale motorcycle distribution",
        "Parts and accessories supply chain",
        "Dealer support and training programs",
        "Marketing and promotional assistance",
        "Flexible payment terms for dealers",
        "Regional coverage across Johor and surrounding areas",
      ],
    },
  ];

  return (
    <>
      {services.map((service, index) => (
        <div
          key={service.id}
          className={`row ${index > 0 ? "mt120 mt50-sm" : ""}`}
          id={service.id}
        >
          <div className="col-md-6 col-xl-5">
            <div className="service_thumb mb30-sm">
              <Image
                width={526}
                height={354}
                priority={index === 0}
                style={{
                  width: "100%",
                  height: "auto",
                }}
                src={service.image}
                alt={service.title}
              />
            </div>
          </div>
          <div className="col-md-6 col-xl-5 offset-xl-1">
            <div className="service_include2 mt0-md">
              <h3 className="title">{service.title}</h3>
              <p className="para">{service.detailedDescription}</p>
              <div className="service_features mt20">
                <h5 className="mb15">Our {service.title} includes:</h5>
                <ul className="list-style-check-circle check_theme_color mb0">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="mb10">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* End services mapping */}

      {/* Additional Business Information Section */}
      <div className="row mt120 mt50-sm">
        <div className="col-xl-12">
          <div className="service_about_company">
            <div className="text-center mb60">
              <h3 className="title">About Perniagaan Motor Kekal</h3>
              <p className="subtitle">
                Your Trusted Motorcycle Partner in Johor Bahru
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="about_content">
                  <h4 className="mb20">
                    Established Excellence in Johor Bahru
                  </h4>
                  <p className="para">
                    Located in the heart of Johor Bahru, Perniagaan Motor Kekal
                    has been serving the motorcycle community in Malaysia with
                    dedication and expertise. As a leading motorcycle business
                    in JB, we understand the unique needs of Malaysian riders
                    and provide tailored solutions that exceed expectations.
                  </p>
                  <p className="para">
                    Our commitment to quality service, competitive pricing, and
                    customer satisfaction has made us the preferred choice for
                    motorcycle enthusiasts throughout Johor and the surrounding
                    regions.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about_content">
                  <h4 className="mb20">Why Choose Perniagaan Motor Kekal?</h4>
                  <ul className="list-style-check-circle check_theme_color mb0">
                    <li className="mb10">
                      Over years of experience in the motorcycle industry
                    </li>
                    <li className="mb10">
                      Certified technicians and professional staff
                    </li>
                    <li className="mb10">
                      Comprehensive warranty on all services
                    </li>
                    <li className="mb10">
                      Competitive pricing and transparent billing
                    </li>
                    <li className="mb10">Convenient location in Johor Bahru</li>
                    <li className="mb10">
                      Strong relationships with major motorcycle brands
                    </li>
                    <li className="mb10">
                      Commitment to customer satisfaction
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Additional Business Information */}
    </>
  );
};

export default ServiceBlock;
