import styles from "./Form.module.css";
import { useTranslations } from "next-intl";

const BusinessHours = () => {
  const t = useTranslations("businessHours");
  return (
    <div className={`business_hours ${styles.businessHours}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h4 className="mb20 text-center">{t("heading")}</h4>
          </div>
        </div>
        <div className="hours_list">
          <div className="row">
            <div className="col-md-6">
              <ul className="list-unstyled">
                <li>
                  <strong>{t("weekdays")}</strong> 9:00 AM - 6:00 PM
                </li>
                <li>
                  <strong>{t("saturday")}</strong> 9:00 AM - 5:00 PM
                </li>
                <li>
                  <strong>{t("sunday")}</strong> 10:00 AM - 4:00 PM
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <div className="info-icon" style={{ display: "flex" }}>
                <i
                  className="fas fa-info-circle"
                  style={{ paddingRight: "10px", marginTop: "3px" }}
                ></i>
                <p className="text-muted">{t("closedNote")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessHours;
