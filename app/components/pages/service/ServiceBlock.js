import Image from "next/image";
import { useTranslations } from "next-intl";

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
            <div
              className="service_thumb mb30-sm"
              style={{ aspectRatio: "526 / 354", overflow: "hidden" }}
            >
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
                <h5 className="mb15">{service.includesLabel}</h5>
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
  const t = useTranslations("serviceBlock");
  const serviceMeta = [
    {
      id: "repair-maintenance",
      key: "repair",
      image:
        "https://images.unsplash.com/photo-1623221013483-1f3cbeffdcec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwcmVwYWlyJTIwc2VydmljZXxlbnwxfHx8fDE3NTgyNzU5ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "spare-parts-accessories",
      key: "parts",
      image:
        "https://images.unsplash.com/photo-1675247911627-0fb610250598?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwcGFydHMlMjBhY2Nlc3Nvcmllc3xlbnwxfHx8fDE3NTgyNzU5ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "distribution-services",
      key: "distribution",
      image:
        "https://images.unsplash.com/photo-1645850551039-19b16d2156cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vdG9yY3ljbGUlMjBzYWxlc3xlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  const services = serviceMeta.map((meta) => {
    const title = t(`${meta.key}.title`);
    return {
      id: meta.id,
      image: meta.image,
      title,
      detailedDescription: t(`${meta.key}.detailedDescription`),
      features: t.raw(`${meta.key}.features`),
      includesLabel: t("includesLabel", { title }),
    };
  });

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
