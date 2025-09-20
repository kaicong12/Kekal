"use client";
import { useState } from "react";

const ContactSeller = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message:
      "I am interested in a price quote on this vehicle. Please contact me at your earliest convenience with your best price for this vehicle.",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    // Format the message for WhatsApp
    const whatsappMessage = `Hello! My name is ${formData.name}.
      ${formData.message}

      Contact Details:
      - Phone: ${formData.phone}
      - Email: ${formData.email}

      Thank you!
    `;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // WhatsApp number (60127126128)
    const whatsappNumber = "60127126128";

    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank");
  };

  return (
    <form onSubmit={handleWhatsAppSubmit}>
      <div className="row">
        <div className="col-lg-12">
          <div className="mb-3">
            <input
              className="form-control form_control"
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-lg-12">
          <div className="mb-3">
            <input
              className="form-control form_control"
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-lg-12">
          <div className="mb-3">
            <input
              className="form-control form_control"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-md-12">
          <div className="mb-3">
            <textarea
              className="form-control"
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-md-12">
          <button type="submit" className="btn btn-block btn-whatsapp mb0">
            <span className="flaticon-whatsapp mr10 text-white" />
            WhatsApp
          </button>
        </div>
        {/* End .col-12 */}
      </div>
      {/* End .row */}
    </form>
  );
};

export default ContactSeller;
