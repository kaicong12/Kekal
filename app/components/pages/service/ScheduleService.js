"use client";
import { useState } from "react";

const ScheduleService = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bestTime: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/email/schedule-service", {
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
          message:
            "Service request submitted successfully! We'll contact you soon to schedule your appointment.",
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          bestTime: "",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message:
            result.error ||
            "Failed to submit service request. Please try again.",
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
  };

  return (
    <form className="contact_form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-6">
          <div className="mb-4">
            <label className="form-label">Name *</label>
            <input
              className="form-control"
              required
              placeholder="Your Name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              disabled={isSubmitting}
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-md-6">
          <div className="mb-4">
            <label className="form-label">Email *</label>
            <input
              className="form-control email"
              required
              placeholder="your-email@gmail.com"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              disabled={isSubmitting}
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-md-6">
          <div className="mb-4">
            <label className="form-label">Phone</label>
            <input
              className="form-control"
              placeholder="+60 12 345 6789"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              disabled={isSubmitting}
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-md-6">
          <div className="mb-4">
            <label className="form-label">Best time to contact</label>
            <input
              className="form-control"
              placeholder="e.g., Morning, Afternoon, Evening"
              type="text"
              name="bestTime"
              value={formData.bestTime}
              onChange={handleInputChange}
              disabled={isSubmitting}
            />
          </div>
        </div>
        {/* End .col */}

        <div className="col-md-12">
          <div className="mb-4">
            <label className="form-label">Additional Details (Optional)</label>
            <textarea
              className="form-control"
              style={{ padding: "0.375rem 0.75rem" }}
              rows="4"
              placeholder="Tell us about your motorcycle, the service needed, or any specific requirements..."
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              disabled={isSubmitting}
            />
          </div>
        </div>
        {/* End .col */}

        {submitStatus && (
          <div className="col-md-12">
            <div
              className={`alert ${
                submitStatus.type === "success"
                  ? "alert-success"
                  : "alert-danger"
              } mb-4`}
            >
              {submitStatus.message}
            </div>
          </div>
        )}

        <div className="col-md-12">
          <div className="mb-0">
            <button
              type="submit"
              className="btn btn-thm"
              disabled={
                isSubmitting || !formData.name.trim() || !formData.email.trim()
              }
            >
              {isSubmitting ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Submitting...
                </>
              ) : (
                "Request Service"
              )}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ScheduleService;
