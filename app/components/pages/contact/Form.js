"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import styles from "./Form.module.css";

const Form = () => {
  const t = useTranslations("contactForm");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t("nameRequired");
    }

    if (!formData.email.trim() && !formData.phone.trim()) {
      newErrors.contact = t("contactRequired");
    }

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t("emailInvalid");
    }

    if (!formData.message.trim()) {
      newErrors.message = t("messageRequired");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setSubmitStatus(null);

      try {
        const response = await fetch("/api/email/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (response.ok) {
          setSubmitStatus({
            type: "success",
            message: t("success"),
          });
          // Reset form
          setFormData({
            name: "",
            email: "",
            phone: "",
            topic: "",
            message: "",
          });
          setErrors({});
        } else {
          setSubmitStatus({
            type: "error",
            message: result.error || t("sendFail"),
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
    }
  };

  return (
    <div className={`contact_form_wrapper ${styles.contactFormWrapper}`}>
      {/* Short Intro Text */}
      <div className={`contact_intro mb30 ${styles.contactIntro}`}>
        <p className="text-muted">{t("intro")}</p>
      </div>

      <form className="contact_form" onSubmit={handleSubmit}>
        <div className="row">
          {/* Name Field */}
          <div className="col-md-12">
            <div className="form-group">
              <label className="form-label">{t("name")}</label>
              <input
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder={t("namePlaceholder")}
                required
              />
              {errors.name && (
                <div className="invalid-feedback">{errors.name}</div>
              )}
            </div>
          </div>

          {/* Email Field */}
          <div className="col-md-6">
            <div className="form-group">
              <label className="form-label">{t("email")}</label>
              <input
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your-email@gmail.com"
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>
          </div>

          {/* Phone Field */}
          <div className="col-md-6">
            <div className="form-group">
              <label className="form-label">{t("phone")}</label>
              <input
                className="form-control"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+60 12 345 6789"
              />
            </div>
          </div>

          {/* Contact Method Error */}
          {errors.contact && (
            <div className="col-12">
              <div className="alert alert-danger" role="alert">
                {errors.contact}
              </div>
            </div>
          )}

          {/* Topic Dropdown */}
          <div className="col-md-12">
            <div className="form-group">
              <label className="form-label">{t("topic")}</label>
              <select
                className="form-control"
                name="topic"
                value={formData.topic}
                onChange={handleInputChange}
              >
                <option value="">{t("topicSelect")}</option>
                <option value="order-support">{t("topicOrderSupport")}</option>
                <option value="dealer-inquiry">{t("topicDealerInquiry")}</option>
                <option value="sell-your-bike">{t("topicSellBike")}</option>
                <option value="service-inquiry">{t("topicServiceInquiry")}</option>
                <option value="general-inquiry">{t("topicGeneralInquiry")}</option>
              </select>
            </div>
          </div>

          {/* Message Field */}
          <div className="col-md-12">
            <div className="form-group">
              <label className="form-label">{t("message")}</label>
              <textarea
                name="message"
                className={`form-control ${errors.message ? "is-invalid" : ""}`}
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                placeholder={t("messagePlaceholder")}
                required
                disabled={isSubmitting}
              />
              {errors.message && (
                <div className="invalid-feedback">{errors.message}</div>
              )}
            </div>

            {/* Submit Status */}
            {submitStatus && (
              <div
                className={`alert ${
                  submitStatus.type === "success"
                    ? "alert-success"
                    : "alert-danger"
                } mb-3`}
              >
                {submitStatus.message}
              </div>
            )}

            {/* CTA Button */}
            <div className="form-group mb0">
              <button
                type="submit"
                className="btn btn-thm"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    {t("sending")}
                  </>
                ) : (
                  t("send")
                )}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
