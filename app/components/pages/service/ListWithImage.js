import Image from "next/image";
import { useTranslations } from "next-intl";

const ListWithImage = () => {
  const t = useTranslations("serviceList");
  const serviceItems = [
    { text: t("itemSales"), link: "#motorcycle-sales" },
    { text: t("itemRepair"), link: "#repair-maintenance" },
    { text: t("itemParts"), link: "#spare-parts-accessories" },
    { text: t("itemDistribution"), link: "#distribution-services" },
  ];

  return (
    <div className="row">
      <div className="col-lg-6 col-xl-5">
        <div className="service_include">
          <h3 className="title">{t("heading")}</h3>
          <p className="para">{t("para1")}</p>
          <p className="para mb30">{t("para2")}</p>
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
          <h3 className="title">{t("salesHeading")}</h3>
          <p className="para">{t("salesPara")}</p>
        </div>
        {/* End service_include */}
      </div>
      {/* End col-6 */}

      <div className="col-lg-6 col-xl-6 offset-xl-1">
        <div
          className="service_thumb"
          style={{ aspectRatio: "636 / 667", overflow: "hidden" }}
        >
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
