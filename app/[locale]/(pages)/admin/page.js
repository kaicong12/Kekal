"use client";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useAuth } from "@/app/components/auth/AuthProvider";
import UnauthorizedAccess from "@/app/components/common/UnauthorizedAccess";
import AdminDashboard from "@/app/components/admin/AdminDashboard";

export default function AdminPage() {
  const { isAuthenticated, isAuthorized, loading } = useAuth();

  // While Firebase resolves the auth state, show a clean admin-styled loader.
  // Without this guard the page falls through to UnauthorizedAccess, which
  // flashes the public storefront header/footer before auth settles.
  if (loading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f6f4f1",
        }}
      >
        <Spin
          indicator={
            <LoadingOutlined style={{ fontSize: 44, color: "#f2622e" }} spin />
          }
        />
      </div>
    );
  }

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
