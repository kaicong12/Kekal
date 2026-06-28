import { NextResponse } from "next/server";
import { createRemoteJWKSet, jwtVerify } from "jose";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/utils/firebase";

// Firebase ID tokens are standard RS256 JWTs signed by Google. We can verify
// them with Google's *public* keys — no service-account private key required.
// The private key is only needed to mint tokens / do privileged Admin writes,
// neither of which we do here.
const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;

// Google's public signing keys for Firebase ID tokens. createRemoteJWKSet
// fetches once and caches, refreshing automatically on key rotation.
const JWKS = createRemoteJWKSet(
  new URL(
    "https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com"
  )
);

// Same allowlist the client login flow reads (config/emailConfig in Firestore),
// fetched here with the client SDK — no Admin SDK needed.
async function getAuthorizedEmails() {
  const snap = await getDoc(doc(db, "config", "emailConfig"));
  return snap.exists() ? snap.data().authorizedReceiptEmails || [] : [];
}

export async function verifyAuthToken(request) {
  const authHeader = request.headers.get("Authorization");
  if (!authHeader?.startsWith("Bearer ")) {
    return {
      error: NextResponse.json(
        { error: "Missing or invalid Authorization header" },
        { status: 401 }
      ),
    };
  }

  const token = authHeader.split("Bearer ")[1];

  let decoded;
  try {
    const { payload } = await jwtVerify(token, JWKS, {
      issuer: `https://securetoken.google.com/${projectId}`,
      audience: projectId,
    });
    decoded = payload;
  } catch {
    return {
      error: NextResponse.json(
        { error: "Invalid or expired token" },
        { status: 401 }
      ),
    };
  }

  try {
    const authorizedEmails = await getAuthorizedEmails();
    if (!decoded.email || !authorizedEmails.includes(decoded.email)) {
      return {
        error: NextResponse.json({ error: "Unauthorized" }, { status: 403 }),
      };
    }
  } catch (error) {
    console.error("Failed to load authorized emails:", error);
    return {
      error: NextResponse.json(
        { error: "Failed to verify authorization" },
        { status: 500 }
      ),
    };
  }

  return { decoded };
}
