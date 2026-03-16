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

    const whatsappMessage = `Hello! My name is ${formData.name}.
${formData.message}

Contact Details:
- Phone: ${formData.phone}
- Email: ${formData.email}

Thank you!`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappNumber = "60127126128";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <form onSubmit={handleWhatsAppSubmit}>
      <div className="mb-3">
        <input
          className="form-control"
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          name="message"
<<<<<<< HEAD
          rows={6}
          style={{ minHeight: "120px" }}
=======
          rows={4}
>>>>>>> 0e109c5 ([CHORE]: Remove unused SCSS/CSS and reorganize scripts (#19))
          value={formData.message}
          onChange={handleInputChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-whatsapp w-100">
        <span className="flaticon-whatsapp me-2" />
        WhatsApp
      </button>
    </form>
  );
};

export default ContactSeller;
