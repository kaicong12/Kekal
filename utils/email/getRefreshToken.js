const https = require("https");
const crypto = require("crypto");
const querystring = require("querystring");
const dotenv = require("dotenv");

dotenv.config();

// Access scopes for two non-Sign-In scopes: Read-only Drive activity and Google Calendar.
const scope = ["https://mail.google.com/"];

// Generate a secure random state value.
const state = crypto.randomBytes(32).toString("hex");

const postData = querystring.stringify({
  client_id: process.env.GOOGLE_CLIENT_ID,
  redirect_uri: "https://www.motorkekal.com",
  scope,
  state,
  access_type: "offline",
  include_granted_scopes: true,
  response_type: "code",
});

// Build the authorization URL
const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?${postData}`;

console.log("Visit this URL to authorize the application:");
console.log(authUrl);
console.log(
  "\nAfter authorization, you'll be redirected to your redirect_uri with a 'code' parameter."
);
console.log("Use that code to exchange for tokens.");

// Function to exchange authorization code for tokens
function exchangeCodeForTokens(authCode) {
  const tokenData = querystring.stringify({
    client_id: process.env.GOOGLE_CLIENT_ID,
    client_secret: process.env.GOOGLE_CLIENT_SECRET,
    code: authCode,
    grant_type: "authorization_code",
    redirect_uri: "https://www.motorkekal.com",
  });

  const tokenOptions = {
    hostname: "oauth2.googleapis.com",
    path: "/token",
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Content-Length": Buffer.byteLength(tokenData),
    },
  };

  const tokenReq = https.request(tokenOptions, (res) => {
    let data = "";
    res.on("data", (chunk) => {
      data += chunk;
    });
    res.on("end", () => {
      const tokens = JSON.parse(data);
      if (tokens.refresh_token) {
        console.log("\nRefresh token obtained:");
        console.log(tokens.refresh_token);
        console.log("\nAccess token:");
        console.log(tokens.access_token);
        console.log(
          "\nSave the refresh token in your environment variables as GOOGLE_REFRESH_TOKEN"
        );
      } else {
        console.log("Error getting tokens:", tokens);
      }
    });
  });

  tokenReq.on("error", (err) => {
    console.error("Error exchanging code for tokens:", err);
  });

  tokenReq.write(tokenData);
  tokenReq.end();
}

// Function to refresh access token using refresh token
function refreshAccessToken(refreshToken) {
  const refreshData = querystring.stringify({
    client_id: process.env.GOOGLE_CLIENT_ID,
    client_secret: process.env.GOOGLE_CLIENT_SECRET,
    refresh_token: refreshToken,
    grant_type: "refresh_token",
  });

  const refreshOptions = {
    hostname: "oauth2.googleapis.com",
    path: "/token",
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Content-Length": Buffer.byteLength(refreshData),
    },
  };

  return new Promise((resolve, reject) => {
    const refreshReq = https.request(refreshOptions, (res) => {
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        try {
          const tokens = JSON.parse(data);
          if (tokens.access_token) {
            resolve(tokens.access_token);
          } else {
            reject(new Error("Failed to refresh token: " + data));
          }
        } catch (err) {
          reject(err);
        }
      });
    });

    refreshReq.on("error", (err) => {
      reject(err);
    });

    refreshReq.write(refreshData);
    refreshReq.end();
  });
}

// Export functions for use in other modules
module.exports = {
  exchangeCodeForTokens,
  refreshAccessToken,
  authUrl,
};

// If running this file directly, show the authorization URL
if (require.main === module) {
  console.log("=== Google OAuth Setup ===");
  console.log(
    "1. Make sure you have GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET in your environment"
  );
  console.log("2. Visit the URL below to get an authorization code");
  console.log("3. Run: node getRefreshToken.js <authorization_code>");
  console.log("");

  const authCode = process.argv[2];
  if (authCode) {
    console.log("Exchanging authorization code for tokens...");
    exchangeCodeForTokens(authCode);
  } else {
    console.log("Authorization URL:");
    console.log(authUrl);
  }
}
