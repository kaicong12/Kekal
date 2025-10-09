"use client";
import { createContext, useContext, useEffect, useState } from "react";
import {
  signInWithPopup,
  signOut as firebaseSignOut,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, googleProvider, db } from "../../../utils/firebase";

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);
  const [authorizedEmails, setAuthorizedEmails] = useState([]);

  // Fetch authorized emails from Firestore
  const fetchAuthorizedEmails = async () => {
    try {
      const docRef = doc(db, "config", "emailConfig");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        // Assuming the document contains an array field called 'emails'
        const emails = data.authorizedReceiptEmails || [];
        console.log({ emails });
        setAuthorizedEmails(emails);
        return emails;
      } else {
        console.log("No authorized emails document found");
        return [];
      }
    } catch (error) {
      console.error("Error fetching authorized emails:", error);
      return [];
    }
  };

  // Check if user email is authorized
  const checkAuthorization = (userEmail, emailsList) => {
    return emailsList.includes(userEmail);
  };

  // Sign in with Google
  const signInWithGoogle = async () => {
    try {
      setLoading(true);
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Fetch authorized emails if not already loaded
      let emails = authorizedEmails;
      if (emails.length === 0) {
        emails = await fetchAuthorizedEmails();
      }

      const isUserAuthorized = checkAuthorization(user.email, emails);

      if (!isUserAuthorized) {
        // User is not authorized, sign them out
        await firebaseSignOut(auth);
        throw new Error("UNAUTHORIZED");
      }

      return { success: true };
    } catch (error) {
      console.error("Sign in error:", error);
      if (error.message === "UNAUTHORIZED") {
        return { success: false, error: "UNAUTHORIZED" };
      }
      return { success: false, error: "SIGNIN_ERROR" };
    } finally {
      setLoading(false);
    }
  };

  // Sign out
  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  // Listen to auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setLoading(true);

      if (firebaseUser) {
        // User is signed in
        setUser(firebaseUser);
        setIsAuthenticated(true);

        // Always fetch fresh authorized emails for authorization check
        const emails = await fetchAuthorizedEmails();

        const isUserAuthorized = checkAuthorization(firebaseUser.email, emails);
        setIsAuthorized(isUserAuthorized);

        if (!isUserAuthorized) {
          // If user is not authorized, sign them out
          await firebaseSignOut(auth);
        }
      } else {
        // User is signed out
        setUser(null);
        setIsAuthenticated(false);
        setIsAuthorized(false);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isAuthorized,
        loading,
        signInWithGoogle,
        signOut,
        authorizedEmails,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
