import { AuthProvider } from "@/app/components/auth/AuthProvider";

export const metadata = { robots: { index: false, follow: false } };

// Only /admin consumes useAuth, so it's scoped here.
export default function AdminLayout({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}
