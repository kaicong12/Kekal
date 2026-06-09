"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";

const ContactSeller = () => {
  const t = useTranslations("detail");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: t("csDefaultMessage"),
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
          placeholder={t("csNamePlaceholder")}
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
          placeholder={t("csPhonePlaceholder")}
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
          placeholder={t("csEmailPlaceholder")}
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          name="message"
          rows={6}
          style={{ minHeight: "120px" }}
          value={formData.message}
          onChange={handleInputChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-whatsapp w-100">
        <span className="flaticon-whatsapp me-2" />
        {t("whatsapp")}
      </button>
    </form>
  );
};

export default ContactSeller;
