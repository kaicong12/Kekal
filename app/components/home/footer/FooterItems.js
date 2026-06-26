"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";

const FooterItems = () => {
  const t = useTranslations("footer");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");
    setIsSuccess(false);

    try {
      const response = await fetch("/api/email/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          source: "Website Footer",
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(t("subscribeSuccess"));
        setIsSuccess(true);
        setEmail("");
      } else {
        setMessage(data.error || t("subscribeFail"));
      }
    } catch (error) {
      setMessage(t("subscribeError"));
    } finally {
      setIsSubmitting(false);
    }
  };

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
      {/* End .col */}

      <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3">
        <div className="footer_contact_widget home2">
          <h5 className="title">{t("needHelp")}</h5>
          <div className="footer_phone">+60127126128</div>
          <p>motorkekal@gmail.com</p>
        </div>
      </div>
      {/* End .col */}

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
      {/* End .col */}

      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
        <div className="footer_contact_widget home2">
          <h5 className="title">{t("keepInTouch")}</h5>
          <form
            className="footer_mailchimp_form"
            onSubmit={handleNewsletterSubmit}
          >
            <div className="wrapper">
              <div className="col-auto">
                <input
                  type="email"
                  className="form-control"
                  placeholder={t("emailPlaceholder")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isSubmitting}
                />
                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "..." : t("go")}
                </button>
              </div>
            </div>
          </form>
          {message && (
            <p className={isSuccess ? "text-success" : "text-danger"}>
              {message}
            </p>
          )}
          <p>{t("newsletterPrompt")}</p>
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default FooterItems;
