import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import { NextResponse } from "next/server";

let adminAuth;
let adminDb;

function getAdminServices() {
  if (adminAuth) return { adminAuth, adminDb };

  const app =
    getApps().length > 0
      ? getApps()[0]
      : initializeApp({
          credential: cert(
            JSON.parse(
              process.env.FIREBASE_SERVICE_ACCOUNT
                .replace(/\\n/g, "\n")
                .replace(/\\"/g, '"')
            )
          ),
        });

  adminAuth = getAuth(app);
  adminDb = getFirestore(app);
  return { adminAuth, adminDb };
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

  try {
    const token = authHeader.split("Bearer ")[1];
    const { adminAuth, adminDb } = getAdminServices();
    const decoded = await adminAuth.verifyIdToken(token);

    const doc = await adminDb.collection("config").doc("emailConfig").get();
    const authorizedEmails = doc.exists
      ? doc.data().authorizedReceiptEmails || []
      : [];

    if (!authorizedEmails.includes(decoded.email)) {
      return {
        error: NextResponse.json(
          { error: "Unauthorized" },
          { status: 403 }
        ),
      };
    }

    return { decoded };
  } catch {
    return {
      error: NextResponse.json(
        { error: "Invalid or expired token" },
        { status: 401 }
      ),
    };
  }
}
