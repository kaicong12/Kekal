"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";

const NewsletterSignup = () => {
  const t = useTranslations("footer");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setSubmitStatus({
        type: "error",
        message: t("emailRequired"),
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/email/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          source: "Website Footer",
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: t("subscribeThankYou"),
        });
        setEmail("");
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || t("subscribeFail"),
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: t("networkError"),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="footer_contact_widget">
      <h5 className="title">{t("keepInTouch")}</h5>
      <form className="footer_mailchimp_form" onSubmit={handleSubmit}>
        <div className="wrapper">
          <div className="col-auto">
            <input
              type="email"
              className="form-control"
              placeholder={t("emailPlaceholder")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
              required
            />
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "..." : t("go")}
            </button>
          </div>
        </div>
      </form>

      {submitStatus && (
        <div
          className={`newsletter-status mt-2 ${
            submitStatus.type === "success" ? "text-success" : "text-danger"
          }`}
          style={{ fontSize: "12px" }}
        >
          {submitStatus.message}
        </div>
      )}

      <p>{t("newsletterPrompt")}</p>

      <style jsx>{`
        .newsletter-status {
          margin-top: 8px;
          font-size: 12px;
          line-height: 1.3;
        }
        .text-success {
          color: #28a745 !important;
        }
        .text-danger {
          color: #dc3545 !important;
        }
        .footer_mailchimp_form button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
};

export default NewsletterSignup;
