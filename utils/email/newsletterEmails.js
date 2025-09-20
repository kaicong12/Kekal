const emailService = require("./emailService");

/**
 * Newsletter Email Functions
 * Handles newsletter subscriptions with admin notification and client confirmation
 */

/**
 * Send newsletter subscription to admin
 * @param {Object} subscriptionData - Newsletter subscription data
 * @returns {Promise<Object>} - Email sending result
 */
async function sendNewsletterSubscriptionToAdmin(subscriptionData) {
  const { email, source } = subscriptionData;
  const adminEmail = process.env.ADMIN_EMAIL || "kaicong12@gmail.com";

  const htmlTemplate = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background-color: #6f42c1; color: white; padding: 20px; text-align: center;">
        <h1 style="margin: 0;">New Newsletter Subscription</h1>
      </div>
      <div style="background-color: #f9f9f9; padding: 30px;">
        <h2 style="color: #333; margin-top: 0;">Subscription Details</h2>
        <div style="background-color: white; padding: 20px; border-radius: 5px; margin-bottom: 20px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555; width: 120px;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #6f42c1;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Source:</td>
              <td style="padding: 8px 0;">${source || "Website Footer"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Date:</td>
              <td style="padding: 8px 0;">${new Date().toLocaleDateString()}</td>
            </tr>
          </table>
        </div>
        
        <div style="margin-top: 30px; padding: 15px; background-color: #e7e3ff; border-radius: 5px; border: 1px solid #d1c4e9;">
          <p style="margin: 0; font-size: 14px; color: #4a148c;">
            <strong>Action Required:</strong> Add this email to your newsletter mailing list.
            <br>Consider sending a welcome email with your latest updates and offers.
          </p>
        </div>
        
        <div style="margin-top: 20px; text-align: center;">
          <p style="color: #666; margin: 0; font-size: 14px;">
            This subscriber is interested in receiving updates about motorcycles, services, and special offers.
          </p>
        </div>
      </div>
    </div>
  `;

  return await emailService.sendEmail(
    adminEmail,
    htmlTemplate,
    `New Newsletter Subscription - ${email}`
  );
}

/**
 * Send newsletter subscription confirmation to client
 * @param {Object} subscriptionData - Newsletter subscription data
 * @returns {Promise<Object>} - Email sending result
 */
async function sendNewsletterConfirmation(subscriptionData) {
  const { email } = subscriptionData;

  const htmlTemplate = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background-color: #28a745; color: white; padding: 20px; text-align: center;">
        <h1 style="margin: 0;">Welcome to Kekal Newsletter!</h1>
      </div>
      <div style="background-color: #f9f9f9; padding: 30px;">
        <h2 style="color: #333; margin-top: 0;">Thank you for subscribing</h2>
        
        <p>Hello,</p>
        
        <p>Thank you for subscribing to the Kekal newsletter! You'll now receive the latest updates about our motorcycles, services, special offers, and industry news directly in your inbox.</p>
        
        <div style="background-color: white; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <h3 style="color: #6f42c1; margin-top: 0;">What to expect:</h3>
          <ul style="color: #333; margin: 0; padding-left: 20px;">
            <li>Latest motorcycle arrivals and featured bikes</li>
            <li>Service tips and maintenance advice</li>
            <li>Exclusive offers and promotions</li>
            <li>Industry news and updates</li>
            <li>Event announcements and workshops</li>
          </ul>
        </div>
        
        <div style="background-color: #d1ecf1; padding: 20px; border-radius: 5px; border: 1px solid #bee5eb;">
          <h4 style="color: #0c5460; margin-top: 0;">Stay Connected</h4>
          <p style="color: #0c5460; margin: 0;">
            Follow us on social media for daily updates and behind-the-scenes content.
            Visit our showroom at 5, Jalan Seroja 49, Taman Johor Bahru for personalized service.
          </p>
        </div>
        
        <div style="margin-top: 30px; text-align: center;">
          <p style="color: #666; margin: 0; font-size: 14px;">
            You can unsubscribe at any time by replying to any newsletter email.<br>
            Visit our website: <a href="https://kekal.com" style="color: #6f42c1;">kekal.com</a>
          </p>
        </div>
      </div>
    </div>
  `;

  return await emailService.sendEmail(
    email,
    htmlTemplate,
    "Welcome to Kekal Newsletter - Stay updated with the latest!"
  );
}

/**
 * Process complete newsletter subscription (send to admin + confirmation to client)
 * @param {Object} subscriptionData - Newsletter subscription data
 * @returns {Promise<Object>} - Combined results
 */
async function processNewsletterSubscription(subscriptionData) {
  try {
    // Send to admin
    const adminResult = await sendNewsletterSubscriptionToAdmin(
      subscriptionData
    );

    // Send confirmation to client
    const clientResult = await sendNewsletterConfirmation(subscriptionData);

    return {
      success: adminResult.success && clientResult.success,
      adminEmail: adminResult,
      clientEmail: clientResult,
      message:
        adminResult.success && clientResult.success
          ? "Newsletter subscription processed successfully - admin notified and client confirmation sent"
          : "Some emails failed to send",
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
      message: "Failed to process newsletter subscription",
    };
  }
}

module.exports = {
  sendNewsletterSubscriptionToAdmin,
  sendNewsletterConfirmation,
  processNewsletterSubscription,
};
