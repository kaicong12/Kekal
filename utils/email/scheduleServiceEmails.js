const emailService = require("./emailService");

/**
 * Schedule Service Email Functions
 * Handles service scheduling with admin notification and client confirmation
 */

/**
 * Send service request to admin
 * @param {Object} serviceData - Service request data
 * @returns {Promise<Object>} - Email sending result
 */
async function sendServiceRequestToAdmin(serviceData) {
  const { name, email, phone, bestTime, message } = serviceData;
  const adminEmail = process.env.ADMIN_EMAIL || "kaicong12@gmail.com";

  const htmlTemplate = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background-color: #17a2b8; color: white; padding: 20px; text-align: center;">
        <h1 style="margin: 0;">New Service Request</h1>
      </div>
      <div style="background-color: #f9f9f9; padding: 30px;">
        <h2 style="color: #333; margin-top: 0;">Service Request Details</h2>
        <div style="background-color: white; padding: 20px; border-radius: 5px; margin-bottom: 20px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555; width: 120px;">Customer Name:</td>
              <td style="padding: 8px 0;">${name || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #17a2b8;">${
    email || "Not provided"
  }</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Phone:</td>
              <td style="padding: 8px 0;">${phone || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Best Time:</td>
              <td style="padding: 8px 0;">${bestTime || "Not specified"}</td>
            </tr>
          </table>
        </div>
        
        ${
          message
            ? `
        <h3 style="color: #333;">Additional Details:</h3>
        <div style="background-color: white; padding: 20px; border-radius: 5px; border-left: 4px solid #17a2b8;">
          ${message}
        </div>
        `
            : ""
        }
        
        <div style="margin-top: 30px; padding: 15px; background-color: #d1ecf1; border-radius: 5px; border: 1px solid #bee5eb;">
          <p style="margin: 0; font-size: 14px; color: #0c5460;">
            <strong>Action Required:</strong> Please contact the customer to schedule their service appointment.
            <br>Best contact time: <strong>${
              bestTime || "Not specified"
            }</strong>
            <br>Reply to: <a href="mailto:${email}" style="color: #17a2b8;">${email}</a>
          </p>
        </div>
        
        <div style="margin-top: 20px; text-align: center;">
          <a href="mailto:${email}?subject=Re: Service Request - Kekal&body=Dear ${
    name || "Customer"
  },%0D%0A%0D%0AThank you for your service request. We would like to schedule your appointment.%0D%0A%0D%0ABest regards,%0D%0AKekal Team" 
             style="background-color: #17a2b8; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; display: inline-block;">
            Reply to Customer
          </a>
        </div>
      </div>
    </div>
  `;

  return await emailService.sendEmail(
    adminEmail,
    htmlTemplate,
    `New Service Request - ${name || "Anonymous Customer"}`
  );
}

/**
 * Send service request confirmation to client
 * @param {Object} serviceData - Service request data
 * @returns {Promise<Object>} - Email sending result
 */
async function sendServiceRequestConfirmation(serviceData) {
  const { name, email, bestTime, message } = serviceData;

  const htmlTemplate = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background-color: #28a745; color: white; padding: 20px; text-align: center;">
        <h1 style="margin: 0;">Service Request Received!</h1>
      </div>
      <div style="background-color: #f9f9f9; padding: 30px;">
        <h2 style="color: #333; margin-top: 0;">Thank you for choosing Kekal</h2>
        
        ${name ? `<p>Dear ${name},</p>` : "<p>Hello,</p>"}
        
        <p>We have successfully received your service request and appreciate you choosing Kekal for your motorcycle needs. Our service team will contact you soon to schedule your appointment.</p>
        
        <div style="background-color: white; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <h3 style="color: #17a2b8; margin-top: 0;">Your Service Request Summary:</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555; width: 120px;">Preferred Time:</td>
              <td style="padding: 8px 0;">${bestTime || "Not specified"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Contact Email:</td>
              <td style="padding: 8px 0;">${email}</td>
            </tr>
          </table>
          
          ${
            message
              ? `
          <div style="margin-top: 15px;">
            <p style="font-weight: bold; color: #555; margin-bottom: 8px;">Additional Details:</p>
            <div style="background-color: #f8f9fa; padding: 15px; border-radius: 3px; border-left: 3px solid #17a2b8;">
              ${message}
            </div>
          </div>
          `
              : ""
          }
        </div>
        
        <div style="background-color: #d4edda; padding: 20px; border-radius: 5px; border: 1px solid #c3e6cb;">
          <h4 style="color: #155724; margin-top: 0;">What happens next?</h4>
          <ul style="color: #155724; margin: 0; padding-left: 20px;">
            <li>Our service team will review your request within 4 hours</li>
            <li>We'll contact you to confirm the appointment details</li>
            <li>You'll receive a confirmation email with the scheduled time</li>
            <li>We'll send you a reminder 24 hours before your appointment</li>
          </ul>
        </div>
        
        <div style="background-color: #fff3cd; padding: 15px; border-radius: 5px; border: 1px solid #ffeaa7; margin-top: 20px;">
          <p style="margin: 0; color: #856404; font-size: 14px;">
            <strong>Need to make changes?</strong> Reply to this email or call us directly. 
            We're here to accommodate your schedule.
          </p>
        </div>
        
        <div style="margin-top: 30px; text-align: center;">
          <p style="color: #666; margin: 0;">
            Professional motorcycle service you can trust<br>
            Visit our website: <a href="https://kekal.com" style="color: #17a2b8;">kekal.com</a>
          </p>
        </div>
      </div>
    </div>
  `;

  return await emailService.sendEmail(
    email,
    htmlTemplate,
    "Service Request Confirmed - Kekal will contact you soon"
  );
}

/**
 * Process complete service request (send to admin + confirmation to client)
 * @param {Object} serviceData - Service request data
 * @returns {Promise<Object>} - Combined results
 */
async function processServiceRequest(serviceData) {
  try {
    // Send to admin
    const adminResult = await sendServiceRequestToAdmin(serviceData);

    // Send confirmation to client
    const clientResult = await sendServiceRequestConfirmation(serviceData);

    return {
      success: adminResult.success && clientResult.success,
      adminEmail: adminResult,
      clientEmail: clientResult,
      message:
        adminResult.success && clientResult.success
          ? "Service request processed successfully - admin notified and client confirmation sent"
          : "Some emails failed to send",
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
      message: "Failed to process service request",
    };
  }
}

module.exports = {
  sendServiceRequestToAdmin,
  sendServiceRequestConfirmation,
  processServiceRequest,
};
