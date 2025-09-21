const emailService = require("./emailService");

/**
 * Review Email Functions
 * Handles customer review submissions with admin notification and client confirmation
 */

/**
 * Send review submission to admin
 * @param {Object} reviewData - Review form data
 * @returns {Promise<Object>} - Email sending result
 */
async function sendReviewToAdmin(reviewData) {
  const { name, email, title, review } = reviewData;
  const adminEmail = process.env.ADMIN_EMAIL || "kaicong12@gmail.com";

  const htmlTemplate = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background-color: #ffc107; color: #212529; padding: 20px; text-align: center;">
        <h1 style="margin: 0;">New Customer Review</h1>
      </div>
      <div style="background-color: #f9f9f9; padding: 30px;">
        <h2 style="color: #333; margin-top: 0;">Review Details</h2>
        <div style="background-color: white; padding: 20px; border-radius: 5px; margin-bottom: 20px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555; width: 100px;">Customer:</td>
              <td style="padding: 8px 0;">${name || "Anonymous"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #007bff;">${
    email || "Not provided"
  }</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Title:</td>
              <td style="padding: 8px 0;">${title || "No title provided"}</td>
            </tr>
          </table>
        </div>
        
        <h3 style="color: #333;">Review Content:</h3>
        <div style="background-color: white; padding: 20px; border-radius: 5px; border-left: 4px solid #ffc107;">
          ${review}
        </div>
        
        <div style="margin-top: 30px; padding: 15px; background-color: #fff3cd; border-radius: 5px; border: 1px solid #ffeaa7;">
          <p style="margin: 0; font-size: 14px; color: #856404;">
            <strong>Action Required:</strong> Please review this customer feedback and consider featuring it on your website.
            ${
              email
                ? `You can respond directly to <a href="mailto:${email}" style="color: #856404;">${email}</a>`
                : ""
            }
          </p>
        </div>
      </div>
    </div>
  `;

  return await emailService.sendEmail(
    adminEmail,
    htmlTemplate,
    `New Review: ${title || "Customer Feedback"} - ${
      name || "Anonymous"
    }`
  );
}

/**
 * Send review confirmation to client
 * @param {Object} reviewData - Review form data
 * @returns {Promise<Object>} - Email sending result
 */
async function sendReviewConfirmation(reviewData) {
  const { name, email, rating, title, review } = reviewData;

  const htmlTemplate = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background-color: #28a745; color: white; padding: 20px; text-align: center;">
        <h1 style="margin: 0;">Thank You for Your Review!</h1>
      </div>
      <div style="background-color: #f9f9f9; padding: 30px;">
        <h2 style="color: #333; margin-top: 0;">Your feedback matters to us</h2>
        
        ${name ? `<p>Dear ${name},</p>` : "<p>Hello,</p>"}
        
        <p>Thank you for taking the time to share your experience with Kekal. Your feedback helps us improve our services and assists other customers in making informed decisions.</p>
        
        <div style="background-color: white; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <h3 style="color: #ffc107; margin-top: 0;">Your Review Summary:</h3>
          <div style="margin-bottom: 15px;">
            <strong>Rating:</strong> 
            <span style="color: #ffc107; font-size: 18px; margin-left: 10px;">
              ${"★".repeat(rating)}${"☆".repeat(5 - rating)} (${rating}/5)
            </span>
          </div>
          ${title ? `<p><strong>Title:</strong> ${title}</p>` : ""}
          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 3px; border-left: 3px solid #ffc107;">
            ${review}
          </div>
        </div>
        
        <div style="background-color: #d4edda; padding: 20px; border-radius: 5px; border: 1px solid #c3e6cb;">
          <h4 style="color: #155724; margin-top: 0;">What happens next?</h4>
          <ul style="color: #155724; margin: 0; padding-left: 20px;">
            <li>Our team will review your feedback</li>
            <li>We may feature your review on our website (with your permission)</li>
            <li>We'll use your insights to improve our services</li>
            <li>You may receive a follow-up if we have questions</li>
          </ul>
        </div>
        
        <div style="margin-top: 30px; text-align: center;">
          <p style="color: #666; margin: 0;">
            Thank you for choosing Kekal for your motorcycle needs!<br>
            Visit our website: <a href="https://kekal.com" style="color: #007bff;">kekal.com</a>
          </p>
        </div>
      </div>
    </div>
  `;

  return await emailService.sendEmail(
    email,
    htmlTemplate,
    "Thank you for your review - Kekal appreciates your feedback"
  );
}

/**
 * Process complete review submission (send to admin + confirmation to client)
 * @param {Object} reviewData - Review form data
 * @returns {Promise<Object>} - Combined results
 */
async function processReviewSubmission(reviewData) {
  try {
    // Send to admin
    const adminResult = await sendReviewToAdmin(reviewData);

    // Send confirmation to client (only if email is provided)
    let clientResult = { success: true };
    if (reviewData.email) {
      clientResult = await sendReviewConfirmation(reviewData);
    }

    return {
      success: adminResult.success && clientResult.success,
      adminEmail: adminResult,
      clientEmail: clientResult,
      message:
        adminResult.success && clientResult.success
          ? "Review processed successfully - admin notified and client confirmation sent"
          : "Some emails failed to send",
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
      message: "Failed to process review submission",
    };
  }
}

module.exports = {
  sendReviewToAdmin,
  sendReviewConfirmation,
  processReviewSubmission,
};
