const nodemailer = require("nodemailer");

/**
 * Email Service Configuration
 * Configure your email provider settings here
 */
class EmailService {
  constructor() {
    this.transporter = null;
    this.initializeTransporter();
  }

  /**
   * Initialize the email transporter
   * You can configure this for different email providers (Gmail, Outlook, SendGrid, etc.)
   */
  initializeTransporter() {
    // Example configuration for Gmail
    this.transporter = nodemailer.createTransport({
      service: "gmail", // or 'outlook', 'yahoo', etc.
      port: 465,
      secure: true,
      auth: {
        type: "OAuth2",
        user: process.env.EMAIL_USER,
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
      },
    });
  }

  /**
   * Send a basic email
   * @param {string} recipientEmail - The recipient's email address
   * @param {string} messageBody - The email message body (can be HTML or plain text)
   * @param {string} subject - Email subject (optional, defaults to a generic subject)
   * @param {string} senderEmail - Sender email (optional, uses default from config)
   * @returns {Promise<Object>} - Email sending result
   */
  async sendEmail(
    recipientEmail,
    messageBody,
    subject = "Message from Kekal",
    senderEmail = null
  ) {
    try {
      const mailOptions = {
        from: senderEmail || process.env.EMAIL_USER || "noreply@kekal.com",
        to: recipientEmail,
        subject: subject,
        html: messageBody, // Supports HTML content
        text: this.stripHtml(messageBody), // Fallback plain text
      };

      const result = await this.transporter.sendMail(mailOptions);

      return {
        success: true,
        messageId: result.messageId,
        response: result.response,
      };
    } catch (error) {
      console.error("Email sending failed:", error);
      return {
        success: false,
        error: error.message,
      };
    }
  }

  /**
   * Verify email configuration
   * @returns {Promise<boolean>} - Configuration verification result
   */
  async verifyConfiguration() {
    try {
      await this.transporter.verify();
      console.log("Email configuration is valid");
      return true;
    } catch (error) {
      console.error("Email configuration error:", error);
      return false;
    }
  }

  /**
   * Strip HTML tags from text (utility function)
   * @param {string} html - HTML string
   * @returns {string} - Plain text
   */
  stripHtml(html) {
    return html.replace(/<[^>]*>/g, "");
  }
}

// Create and export a singleton instance
const emailService = new EmailService();

module.exports = emailService;
