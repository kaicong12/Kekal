const emailService = require("./emailService");

/**
 * Contact Form Email Functions
 * Handles contact form submissions with admin notification and client confirmation
 */

/**
 * Send contact form submission to admin
 * @param {Object} formData - Contact form data
 * @returns {Promise<Object>} - Email sending result
 */
async function sendContactFormToAdmin(formData) {
  const { name, email, phone, topic, message } = formData;
  const adminEmail = process.env.ADMIN_EMAIL || "kaicong12@gmail.com";

  const htmlTemplate = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background-color: #007bff; color: white; padding: 20px; text-align: center;">
        <h1 style="margin: 0;">New Contact Form Submission</h1>
      </div>
      <div style="background-color: #f9f9f9; padding: 30px;">
        <h2 style="color: #333; margin-top: 0;">Contact Details</h2>
        <div style="background-color: white; padding: 20px; border-radius: 5px; margin-bottom: 20px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555; width: 100px;">Name:</td>
              <td style="padding: 8px 0;">${name || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #007bff;">${
    email || "Not provided"
  }</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Phone:</td>
              <td style="padding: 8px 0;">${phone || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Topic:</td>
              <td style="padding: 8px 0;">${topic || "General Inquiry"}</td>
            </tr>
          </table>
        </div>
        
        <h3 style="color: #333;">Message:</h3>
        <div style="background-color: white; padding: 20px; border-radius: 5px; border-left: 4px solid #007bff;">
          ${message}
        </div>
        
        <div style="margin-top: 30px; padding: 15px; background-color: #e9ecef; border-radius: 5px;">
          <p style="margin: 0; font-size: 14px; color: #666;">
            <strong>Action Required:</strong> Please respond to this inquiry within 24 hours.
            You can reply directly to <a href="mailto:${email}" style="color: #007bff;">${email}</a>
          </p>
        </div>
      </div>
    </div>
  `;

  return await emailService.sendEmail(
    adminEmail,
    htmlTemplate,
    `New Contact Form: ${topic || "General Inquiry"} - ${name || "Anonymous"}`
  );
}

/**
 * Send confirmation email to client
 * @param {Object} formData - Contact form data
 * @returns {Promise<Object>} - Email sending result
 */
async function sendContactFormConfirmation(formData) {
  const { name, email, topic, message } = formData;

  const htmlTemplate = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background-color: #28a745; color: white; padding: 20px; text-align: center;">
        <h1 style="margin: 0;">Message Received!</h1>
      </div>
      <div style="background-color: #f9f9f9; padding: 30px;">
        <h2 style="color: #333; margin-top: 0;">Thank you for contacting Kekal</h2>
        
        ${name ? `<p>Dear ${name},</p>` : "<p>Hello,</p>"}
        
        <p>We have successfully received your message and appreciate you reaching out to us. Our team will review your inquiry and get back to you as soon as possible.</p>
        
        <div style="background-color: white; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <h3 style="color: #007bff; margin-top: 0;">Your Message Summary:</h3>
          <p><strong>Topic:</strong> ${topic || "General Inquiry"}</p>
          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 3px; border-left: 3px solid #007bff;">
            ${message}
          </div>
        </div>
        
        <div style="background-color: #e7f3ff; padding: 20px; border-radius: 5px; border: 1px solid #b3d9ff;">
          <h4 style="color: #0056b3; margin-top: 0;">What happens next?</h4>
          <ul style="color: #333; margin: 0; padding-left: 20px;">
            <li>Our team will review your message within 24 hours</li>
            <li>We'll respond to your inquiry via email</li>
            <li>For urgent matters, feel free to call us directly</li>
          </ul>
        </div>
        
        <div style="margin-top: 30px; text-align: center;">
          <p style="color: #666; margin: 0;">
            Have questions about our motorcycles? We're here to help!<br>
            Visit our website: <a href="https://kekal.com" style="color: #007bff;">kekal.com</a>
          </p>
        </div>
      </div>
    </div>
  `;

  return await emailService.sendEmail(
    email,
    htmlTemplate,
    "Thank you for contacting Kekal - We've received your message"
  );
}

/**
 * Process complete contact form submission (send to admin + confirmation to client)
 * @param {Object} formData - Contact form data
 * @returns {Promise<Object>} - Combined results
 */
async function processContactFormSubmission(formData) {
  try {
    // Send to admin
    const adminResult = await sendContactFormToAdmin(formData);

    // Send confirmation to client
    const clientResult = await sendContactFormConfirmation(formData);

    return {
      success: adminResult.success && clientResult.success,
      adminEmail: adminResult,
      clientEmail: clientResult,
      message:
        adminResult.success && clientResult.success
          ? "Contact form processed successfully - admin notified and client confirmation sent"
          : "Some emails failed to send",
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
      message: "Failed to process contact form submission",
    };
  }
}

module.exports = {
  sendContactFormToAdmin,
  sendContactFormConfirmation,
  processContactFormSubmission,
};
