import styles from "./Form.module.css";
import { useTranslations } from "next-intl";

const ImmediateAssistance = () => {
  const t = useTranslations("immediate");
  return (
    <div className={`direct_contact_info ${styles.directContactInfo}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h4 className="mb20 text-center">{t("heading")}</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className={`contact_method ${styles.contactMethod}`}>
              <i className="fas fa-phone text-thm"></i>
              <div className={`contact_details ${styles.contactDetails}`}>
                <h6>{t("callUs")}</h6>
                <a href="tel:+60127126128">+60 12 712 6128</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className={`contact_method ${styles.contactMethod}`}>
              <i className="fas fa-envelope text-thm"></i>
              <div className={`contact_details ${styles.contactDetails}`}>
                <h6>{t("emailUs")}</h6>
                <a href="mailto:motorkekal@gmail.com">motorkekal@gmail.com</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className={`contact_method ${styles.contactMethod}`}>
              <i className="fab fa-whatsapp text-thm"></i>
              <div className={`contact_details ${styles.contactDetails}`}>
                <h6>{t("whatsapp")}</h6>
                <a
                  href="https://wa.me/60127126128"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("chatWithUs")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImmediateAssistance;
