"use client";
import { useState } from "react";
import styles from "./Form.module.css";

const Form = () => {
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
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim() && !formData.phone.trim()) {
      newErrors.contact = "Either email or phone number is required";
    }

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
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
            message: "Thank you for your message! We'll get back to you soon.",
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
            message:
              result.error || "Failed to send message. Please try again.",
          });
        }
      } catch (error) {
        setSubmitStatus({
          type: "error",
          message: "Network error. Please check your connection and try again.",
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
        <p className="text-muted">
          Have questions about our motorcycles? We&apos;re here to help! Reach
          out to us for inquiries about our bikes, services, or anything else
          you need.
        </p>
      </div>

      <form className="contact_form" onSubmit={handleSubmit}>
        <div className="row">
          {/* Name Field */}
          <div className="col-md-12">
            <div className="form-group">
              <label className="form-label">Name*</label>
              <input
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
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
              <label className="form-label">Email</label>
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
              <label className="form-label">Phone</label>
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
              <label className="form-label">Topic</label>
              <select
                className="form-control"
                name="topic"
                value={formData.topic}
                onChange={handleInputChange}
              >
                <option value="">Select a topic (optional)</option>
                <option value="order-support">Order Support</option>
                <option value="dealer-inquiry">Dealer Inquiry</option>
                <option value="sell-your-bike">Sell Your Bike</option>
                <option value="service-inquiry">Service Inquiry</option>
                <option value="general-inquiry">General Inquiry</option>
              </select>
            </div>
          </div>

          {/* Message Field */}
          <div className="col-md-12">
            <div className="form-group">
              <label className="form-label">Message*</label>
              <textarea
                name="message"
                className={`form-control ${errors.message ? "is-invalid" : ""}`}
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us how we can help you..."
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
                    Sending...
                  </>
                ) : (
                  "Send Message"
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
