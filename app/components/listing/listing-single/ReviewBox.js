"use client";
import { useState } from "react";

const ReviewBox = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    review: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

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
    setMessage("");

    try {
      const response = await fetch("/api/email/review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          rating: 5, // Default rating since no rating input in the form
          title: "Customer Review",
          review: formData.review,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Review submitted successfully!");
        setFormData({ name: "", email: "", review: "" });
      } else {
        setMessage(data.error || "Failed to submit review. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="user_review_form">
      <div className="bsp_reveiw_wrt">
        <h4 className="mt10">Write a Review</h4>
        <form className="comments_form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>
            {/* End .col-md-6 */}

            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>
            {/* End .col-md-6 */}

            <div className="col-md-12">
              <div className="form-group">
                <textarea
                  name="review"
                  className="form-control"
                  rows={9}
                  placeholder="Message"
                  value={formData.review}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>
            {/* End .col-md-12 */}

            {message && (
              <div className="col-md-12">
                <div
                  className={`alert ${
                    message.includes("successfully")
                      ? "alert-success"
                      : "alert-danger"
                  }`}
                >
                  {message}
                </div>
              </div>
            )}

            <div className="col-md-12">
              <button
                type="submit"
                className="btn btn-thm"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Your Review"}
              </button>
            </div>
            {/* End .col-md-12 */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewBox;
