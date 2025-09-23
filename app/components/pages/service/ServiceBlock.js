import Image from "next/image";

// Individual Service Section Component
const ServiceSection = ({
  isOdd,
  service,
  isFirst = false,
  isReversed = false,
}) => {
  return (
    <div
      className={`service-section ${!isFirst ? "pt90 pb90" : "pb90"} ${
        isOdd ? "bgc-f9" : ""
      }`}
      id={service.id}
    >
      <div className="container">
        <div className="row align-items-center">
          <div
            className={`col-md-6 col-xl-5 ${isReversed ? "order-md-2" : ""}`}
          >
            <div className="service_thumb mb30-sm">
              <Image
                width={526}
                height={354}
                priority={isFirst}
                style={{
                  width: "100%",
                  height: "auto",
                }}
                src={service.image}
                alt={service.title}
              />
            </div>
          </div>
          <div
            className={`col-md-6 col-xl-5 ${
              isReversed ? "offset-xl-1 order-md-1" : "offset-xl-1"
            }`}
          >
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
      </div>
    </div>
  );
};

const ServiceBlock = () => {
  const services = [
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
        "https://images.unsplash.com/photo-1645850551039-19b16d2156cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vdG9yY3ljbGUlMjBzYWxlc3xlbnwwfHwwfHx8MA%3D%3D",
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
        <ServiceSection
          isOdd={index % 2 !== 0}
          key={service.id}
          service={service}
          isFirst={index === 0}
          isReversed={index % 2 === 1}
        />
      ))}
    </>
  );
};

export default ServiceBlock;
