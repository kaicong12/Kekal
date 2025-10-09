const emailService = require("./emailService");

/**
 * Send receipt email to customer
 * @param {Object} receiptData - Receipt data object
 * @param {string} receiptData.to - Customer email
 * @param {string} receiptData.customerName - Customer name
 * @param {string} receiptData.receiptNumber - Receipt number
 * @param {string} receiptData.receiptDate - Receipt date
 * @param {string} receiptData.total - Total amount
 * @param {string} receiptData.receiptImage - Base64 encoded receipt image
 * @returns {Promise<Object>} - Email sending result
 */
async function sendReceiptEmail({
  to,
  customerName,
  receiptNumber,
  receiptDate,
  total,
  receiptImage,
}) {
  try {
    const subject = `Receipt ${receiptNumber} - Perniagaan Motor Kekal`;

    const htmlTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Receipt ${receiptNumber}</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background: linear-gradient(135deg, #faad14, #ffa940);
            color: #1f2937;
            padding: 20px;
            text-align: center;
            border-radius: 8px 8px 0 0;
        }
        .header h1 {
            margin: 0;
            font-size: 28px;
        }
        .header p {
            margin: 5px 0 0 0;
            font-size: 16px;
        }
        .content {
            background: #ffffff;
            padding: 30px;
            border: 1px solid #e5e5e5;
            border-top: none;
        }
        .receipt-info {
            background: #f9f9f9;
            padding: 20px;
            border-radius: 6px;
            margin: 20px 0;
        }
        .receipt-info h3 {
            margin-top: 0;
            color: #faad14;
        }
        .receipt-info p {
            margin: 8px 0;
        }
        .receipt-info strong {
            color: #1f2937;
        }
        .receipt-image {
            text-align: center;
            margin: 30px 0;
        }
        .receipt-image img {
            max-width: 100%;
            border: 1px solid #e5e5e5;
            border-radius: 6px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .footer {
            background: #1f2937;
            color: #ffffff;
            padding: 20px;
            text-align: center;
            border-radius: 0 0 8px 8px;
        }
        .footer p {
            margin: 5px 0;
            font-size: 14px;
        }
        .footer .company-info {
            font-size: 12px;
            color: #cccccc;
            margin-top: 15px;
        }
        .thank-you {
            color: #faad14;
            font-size: 18px;
            font-weight: bold;
            text-align: center;
            margin: 25px 0;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>永恒摩托贸易公司</h1>
        <p>Perniagaan Motor Kekal</p>
    </div>
    
    <div class="content">
        <h2>Dear ${customerName},</h2>
        
        <p>Thank you for your purchase! Your receipt is ready and attached below.</p>
        
        <div class="receipt-info">
            <h3>Receipt Details</h3>
            <p><strong>Receipt Number:</strong> ${receiptNumber}</p>
            <p><strong>Date:</strong> ${receiptDate}</p>
            <p><strong>Total Amount:</strong> RM ${total}</p>
        </div>
        
        <div class="receipt-image">
            <img src="${receiptImage}" alt="Receipt ${receiptNumber}" />
        </div>
        
        <div class="thank-you">
            Thank you for choosing Perniagaan Motor Kekal!
        </div>
        
        <p>If you have any questions about your purchase, please don't hesitate to contact us.</p>
        
        <p>Best regards,<br>
        <strong>Perniagaan Motor Kekal Team</strong></p>
    </div>
    
    <div class="footer">
        <p><strong>Perniagaan Motor Kekal | 永恒摩托贸易公司</strong></p>
        <p>Your One Stop Motorcycle Dealer in Johor Bahru</p>
        <div class="company-info">
            <p>No. 123, Jalan Dato Sulaiman, Taman Abad, 80250 Johor Bahru, Johor</p>
            <p>Tel: +60 7-123 4567 | Email: info@motorkekal.com</p>
            <p>Ride with Confidence, Ride with Us. Serving Johor Bahru's Riders for Over 30 Years.</p>
        </div>
    </div>
</body>
</html>
    `;

    const result = await emailService.sendEmail(to, htmlTemplate, subject);

    return result;
  } catch (error) {
    console.error("Error sending receipt email:", error);
    return {
      success: false,
      error: error.message || "Failed to send receipt email",
    };
  }
}

module.exports = {
  sendReceiptEmail,
};
