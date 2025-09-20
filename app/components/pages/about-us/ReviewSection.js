"use client";
import { useState } from "react";

const ReviewSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 5,
    title: "",
    review: "",
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

  const handleRatingChange = (rating) => {
    setFormData((prev) => ({
      ...prev,
      rating,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/email/review", {
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
          message: "Thank you for your review! We appreciate your feedback.",
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          rating: 5,
          title: "",
          review: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Failed to submit review. Please try again.",
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

  const StarRating = ({ rating, onRatingChange, disabled = false }) => {
    return (
      <div className="star-rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            className={`star ${star <= rating ? "active" : ""}`}
            onClick={() => !disabled && onRatingChange(star)}
            disabled={disabled}
            style={{
              background: "none",
              border: "none",
              fontSize: "24px",
              color: star <= rating ? "#ffc107" : "#e4e5e9",
              cursor: disabled ? "default" : "pointer",
              padding: "0 2px",
            }}
          >
            ★
          </button>
        ))}
      </div>
    );
  };

  return (
    <section className="review-section pt90 pb90">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="main-title text-center mb50">
              <h2>Share Your Experience</h2>
              <p className="text">
                We value your feedback! Share your experience with Kekal to help
                other customers and help us improve our services.
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="review-form-wrapper">
              <form onSubmit={handleSubmit} className="review-form">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group mb20">
                      <label htmlFor="name" className="form-label">
                        Name (Optional)
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group mb20">
                      <label htmlFor="email" className="form-label">
                        Email (Optional)
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="your-email@gmail.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                      />
                      <small className="form-text text-muted">
                        We&apos;ll send you a confirmation if provided
                      </small>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group mb20">
                      <label className="form-label">Rating *</label>
                      <div className="rating-wrapper">
                        <StarRating
                          rating={formData.rating}
                          onRatingChange={handleRatingChange}
                          disabled={isSubmitting}
                        />
                        <span className="rating-text ml10">
                          ({formData.rating}/5)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group mb20">
                      <label htmlFor="title" className="form-label">
                        Review Title (Optional)
                      </label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        className="form-control"
                        placeholder="Brief title for your review"
                        value={formData.title}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group mb30">
                  <label htmlFor="review" className="form-label">
                    Your Review *
                  </label>
                  <textarea
                    id="review"
                    name="review"
                    className="form-control"
                    rows="5"
                    placeholder="Share your experience with Kekal. What did you like? How was our service?"
                    value={formData.review}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                {submitStatus && (
                  <div
                    className={`alert ${
                      submitStatus.type === "success"
                        ? "alert-success"
                        : "alert-danger"
                    } mb20`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-thm"
                    disabled={isSubmitting || !formData.review.trim()}
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
                      "Submit Review"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .review-section {
          background-color: #f8f9fa;
        }
        .review-form-wrapper {
          background: white;
          padding: 40px;
          border-radius: 10px;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        }
        .form-label {
          font-weight: 600;
          color: #333;
          margin-bottom: 8px;
        }
        .rating-wrapper {
          display: flex;
          align-items: center;
        }
        .rating-text {
          color: #666;
          font-size: 14px;
        }
        .star-rating {
          display: flex;
          gap: 2px;
        }
        .star:hover {
          color: #ffc107 !important;
        }
        .form-control:focus {
          border-color: #007bff;
          box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
        }
        .btn-thm {
          background-color: #007bff;
          border-color: #007bff;
          padding: 12px 30px;
          font-weight: 600;
        }
        .btn-thm:hover {
          background-color: #0056b3;
          border-color: #0056b3;
        }
        .btn-thm:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
      `}</style>
    </section>
  );
};

export default ReviewSection;
