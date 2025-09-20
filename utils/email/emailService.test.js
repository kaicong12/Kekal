/**
 * Test New Email Functions
 * Tests for contact form and service request email functions
 */

require("dotenv").config();
const { processContactFormSubmission } = require("./contactFormEmails");
const { processServiceRequest } = require("./scheduleServiceEmails");
const emailService = require("./emailService");

/**
 * Test contact form submission (sends to admin + confirmation to client)
 */
async function testContactFormSubmission() {
  console.log("🧪 Testing contact form submission...");

  const formData = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+60 12 345 6789",
    topic: "Motorcycle Inquiry",
    message:
      "Hi, I'm interested in learning more about your Honda CBR600RR. Is it still available? I would like to schedule a viewing if possible. Thank you!",
  };

  try {
    const result = await processContactFormSubmission(formData);

    if (result.success) {
      console.log("✅ Contact form submission test PASSED");
      console.log("   Admin email sent:", result.adminEmail.success);
      console.log("   Client confirmation sent:", result.clientEmail.success);
    } else {
      console.log("❌ Contact form submission test FAILED:", result.message);
      if (result.adminEmail)
        console.log("   Admin email:", result.adminEmail.success ? "✅" : "❌");
      if (result.clientEmail)
        console.log(
          "   Client email:",
          result.clientEmail.success ? "✅" : "❌"
        );
    }

    return result.success;
  } catch (error) {
    console.error("❌ Contact form submission test ERROR:", error.message);
    return false;
  }
}

/**
 * Test service request submission (sends to admin + confirmation to client)
 */
async function testServiceRequestSubmission() {
  console.log("🧪 Testing service request submission...");

  const serviceData = {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "+60 12 987 6543",
    bestTime: "Weekday mornings (9 AM - 12 PM)",
    message:
      "I need a full service for my motorcycle. It's been making some unusual noises and I think it needs an oil change and brake inspection. Please let me know your availability.",
  };

  try {
    const result = await processServiceRequest(serviceData);

    if (result.success) {
      console.log("✅ Service request submission test PASSED");
      console.log("   Admin email sent:", result.adminEmail.success);
      console.log("   Client confirmation sent:", result.clientEmail.success);
    } else {
      console.log("❌ Service request submission test FAILED:", result.message);
      if (result.adminEmail)
        console.log("   Admin email:", result.adminEmail.success ? "✅" : "❌");
      if (result.clientEmail)
        console.log(
          "   Client email:",
          result.clientEmail.success ? "✅" : "❌"
        );
    }

    return result.success;
  } catch (error) {
    console.error("❌ Service request submission test ERROR:", error.message);
    return false;
  }
}

/**
 * Test with minimal data (edge case)
 */
async function testMinimalContactForm() {
  console.log("🧪 Testing contact form with minimal data...");

  const formData = {
    email: "minimal@example.com",
    message: "Just a quick test message.",
  };

  try {
    const result = await processContactFormSubmission(formData);

    if (result.success) {
      console.log("✅ Minimal contact form test PASSED");
    } else {
      console.log("❌ Minimal contact form test FAILED:", result.message);
    }

    return result.success;
  } catch (error) {
    console.error("❌ Minimal contact form test ERROR:", error.message);
    return false;
  }
}

/**
 * Test with minimal service data (edge case)
 */
async function testMinimalServiceRequest() {
  console.log("🧪 Testing service request with minimal data...");

  const serviceData = {
    email: "minimal.service@example.com",
  };

  try {
    const result = await processServiceRequest(serviceData);

    if (result.success) {
      console.log("✅ Minimal service request test PASSED");
    } else {
      console.log("❌ Minimal service request test FAILED:", result.message);
    }

    return result.success;
  } catch (error) {
    console.error("❌ Minimal service request test ERROR:", error.message);
    return false;
  }
}

/**
 * Run all new email function tests
 */
async function runNewEmailTests() {
  console.log("🚀 Starting New Email Functions Tests...\n");

  const results = {
    configuration: false,
    contactForm: false,
    serviceRequest: false,
    minimalContact: false,
    minimalService: false,
  };

  // Test configuration first
  console.log("🧪 Testing email configuration...");
  try {
    results.configuration = await emailService.verifyConfiguration();
    if (results.configuration) {
      console.log("✅ Email configuration test PASSED");
    } else {
      console.log("❌ Email configuration test FAILED");
    }
  } catch (error) {
    console.error("❌ Email configuration test ERROR:", error.message);
  }
  console.log("");

  if (!results.configuration) {
    console.log(
      "⚠️  Email configuration failed. Please check your .env.local file."
    );
    console.log("   Make sure you have EMAIL_USER and EMAIL_PASSWORD set.");
    return;
  }

  // Run main tests
  results.contactForm = await testContactFormSubmission();
  console.log("");

  results.serviceRequest = await testServiceRequestSubmission();
  console.log("");

  // Run edge case tests
  results.minimalContact = await testMinimalContactForm();
  console.log("");

  results.minimalService = await testMinimalServiceRequest();
  console.log("");

  // Summary
  console.log("📊 New Email Functions Test Results:");
  console.log("===================================");
  console.log(
    `Configuration: ${results.configuration ? "✅ PASS" : "❌ FAIL"}`
  );
  console.log(`Contact Form: ${results.contactForm ? "✅ PASS" : "❌ FAIL"}`);
  console.log(
    `Service Request: ${results.serviceRequest ? "✅ PASS" : "❌ FAIL"}`
  );
  console.log(
    `Minimal Contact: ${results.minimalContact ? "✅ PASS" : "❌ FAIL"}`
  );
  console.log(
    `Minimal Service: ${results.minimalService ? "✅ PASS" : "❌ FAIL"}`
  );

  const passedTests = Object.values(results).filter(Boolean).length;
  const totalTests = Object.keys(results).length;

  console.log(`\n🎯 Overall: ${passedTests}/${totalTests} tests passed`);

  if (passedTests === totalTests) {
    console.log("🎉 All new email function tests passed!");
    console.log("\n📧 Your email system is ready for:");
    console.log(
      "   • Contact form submissions (admin notification + client confirmation)"
    );
    console.log(
      "   • Service requests (admin notification + client confirmation)"
    );
    console.log(
      "   • All emails will be sent to: " +
        (process.env.ADMIN_EMAIL || "kaicong12@gmail.com")
    );
  } else {
    console.log(
      "⚠️  Some tests failed. Please check the configuration and try again."
    );
  }
}

// Export functions for individual testing
module.exports = {
  testContactFormSubmission,
  testServiceRequestSubmission,
  testMinimalContactForm,
  testMinimalServiceRequest,
  runNewEmailTests,
};

// Run tests if this file is executed directly
if (require.main === module) {
  runNewEmailTests().catch(console.error);
}
