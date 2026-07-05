import { useTranslations } from "next-intl";

const FooterItems = () => {
  const t = useTranslations("footer");

  return (
    <div className="row">
      <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3">
        <div className="footer_about_widget home2">
          <h5 className="title">{t("showroom")}</h5>
          <p>
            5, Jalan Seroja, 49
            <br />
            Taman Johor Bahru,
            <br />
            81100 Johor Bahru, Johor
          </p>
        </div>
      </div>

      <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3">
        <div className="footer_contact_widget home2">
          <h5 className="title">{t("needHelp")}</h5>
          <div className="footer_phone">+60127126128</div>
          <p>motorkekal@gmail.com</p>
        </div>
      </div>

      <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3">
        <div className="footer_contact_widget home2">
          <h5 className="title">{t("openingHours")}</h5>
          <p>
            {t("openingHoursValue")}
            <br />
            {t("fridayClosed")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterItems;
