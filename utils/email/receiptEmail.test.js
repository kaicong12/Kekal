const { generateReceiptEmailHTML } = require('./receiptEmails');
const fs = require('fs');

describe('generateReceiptEmailHTML', () => {
  it('should generate correct HTML for given transaction data', () => {
    const transactionData = {
      transactionId: 'TX123456',
      date: '2024-06-15',
      customerName: 'John Doe',
      items: [
        { name: 'Item 1', quantity: 2, price: 10.0 },
        { name: 'Item 2', quantity: 1, price: 20.0 },
      ],
      totalAmount: 40.0,
    };

    const html = generateReceiptEmailHTML(transactionData);
    const filePath = "./output.html";
    fs.writeFileSync(filePath, html);
  });
});