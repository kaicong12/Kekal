"use client";
import { useState } from "react";

const FooterItems = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

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
        setMessage("Successfully subscribed to newsletter!");
        setEmail("");
      } else {
        setMessage(data.error || "Failed to subscribe. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="row">
      <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3">
        <div className="footer_about_widget home2">
          <h5 className="title">SHOWROOM</h5>
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
          <h5 className="title">NEED HELP</h5>
          <div className="footer_phone">+60127126128</div>
          <p>motorkekal@gmail.com</p>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3">
        <div className="footer_contact_widget home2">
          <h5 className="title">OPENING HOURS</h5>
          <p>
            Monday – Sunday: 09:00AM – 07:00PM
            <br />
            Friday: Closed
          </p>
        </div>
      </div>
      {/* End .col */}

      <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
        <div className="footer_contact_widget home2">
          <h5 className="title">KEEP IN TOUCH</h5>
          <form
            className="footer_mailchimp_form"
            onSubmit={handleNewsletterSubmit}
          >
            <div className="wrapper">
              <div className="col-auto">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isSubmitting}
                />
                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "..." : "GO"}
                </button>
              </div>
            </div>
          </form>
          {message && (
            <p
              className={
                message.includes("Successfully")
                  ? "text-success"
                  : "text-danger"
              }
            >
              {message}
            </p>
          )}
          <p>Get latest updates and offers.</p>
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default FooterItems;
