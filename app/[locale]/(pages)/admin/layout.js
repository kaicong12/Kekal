import { AuthProvider } from "@/app/components/auth/AuthProvider";

// AuthProvider used to sit in the root ClientLayout, which pulled firebase/auth +
// firebase/firestore into every storefront page and fired a Firestore read for
// every anonymous visitor. Only /admin consumes useAuth, so it's scoped here.
export default function AdminLayout({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}
