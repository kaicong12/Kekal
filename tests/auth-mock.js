// @ts-check
/**
 * Mocks Firebase Auth for admin panel E2E tests.
 * Injects a script before page load that overrides the AuthProvider's
 * Firebase auth state to simulate a logged-in authorized user.
 */

async function mockAdminAuth(page) {
  await page.addInitScript(() => {
    // Override Firebase's onAuthStateChanged to immediately return a mock user
    window.__E2E_MOCK_AUTH__ = {
      user: {
        uid: "e2e-test-user-id",
        email: "e2e-test@motorkekal.com",
        displayName: "E2E Test Admin",
        photoURL: null,
        getIdToken: () => Promise.resolve("mock-firebase-id-token"),
      },
      authorized: true,
    };
  });

  // Intercept Firestore calls for email config to return our test email
  await page.route("**/firestore.googleapis.com/**", async (route) => {
    const url = route.request().url();
    if (url.includes("emailConfig")) {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({
          fields: {
            authorizedReceiptEmails: {
              arrayValue: {
                values: [{ stringValue: "e2e-test@motorkekal.com" }],
              },
            },
          },
        }),
      });
    } else {
      await route.continue();
    }
  });

  // Intercept the Firebase Auth REST API to mock sign-in state
  await page.route("**/identitytoolkit.googleapis.com/**", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({
        users: [
          {
            localId: "e2e-test-user-id",
            email: "e2e-test@motorkekal.com",
            displayName: "E2E Test Admin",
          },
        ],
      }),
    });
  });

  // Intercept API calls that need auth token
  await page.route("**/api/motorcycles*", async (route) => {
    const request = route.request();
    if (request.method() === "GET") {
      await route.continue();
    } else {
      // For POST/PUT/DELETE, continue but the backend won't validate in test
      await route.continue();
    }
  });
}

module.exports = { mockAdminAuth };
