"use client";
import { useAuth } from "../../components/auth/AuthProvider";
import UnauthorizedAccess from "../../components/common/UnauthorizedAccess";
import AdminDashboard from "../../components/admin/AdminDashboard";

export default function AdminPage() {
  const { isAuthenticated, isAuthorized } = useAuth();

  // If not authenticated or not authorized, show the common unauthorized access component
  if (!isAuthenticated || !isAuthorized) {
    return (
      <UnauthorizedAccess
        pageTitle="Admin Panel"
        pageSubtitle="永恒摩托车易公司"
        systemName="Admin Panel"
      />
    );
  }

  // If authenticated and authorized, show the admin dashboard
  return <AdminDashboard />;
}
