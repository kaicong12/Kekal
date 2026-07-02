"use client";
import { useState } from "react";
import {
  ConfigProvider,
  Spin,
  Result,
  Button,
  Card,
  Typography,
  Space,
  notification,
} from "antd";
import {
  GoogleOutlined,
  UserDeleteOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { useAuth } from "../auth/AuthProvider";

const { Title, Text } = Typography;

// Mirrors the admin dashboard theme so the sign-in gate matches the app shell
// (orange accent, Space Grotesk) — never the public storefront chrome.
const antdTheme = {
  token: {
    colorPrimary: "#f2622e",
    colorInfo: "#f2622e",
    borderRadius: 10,
    controlHeight: 40,
    fontFamily: "var(--font-display, Inter, system-ui, sans-serif)",
  },
};

const pageStyle = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 22,
  padding: 24,
  background: "#f6f4f1",
  fontFamily: "var(--font-display, Inter, system-ui, sans-serif)",
};

const cardStyle = {
  width: "100%",
  maxWidth: 440,
  borderRadius: 16,
  border: "1px solid #ece9e4",
  boxShadow: "0 18px 44px -30px rgba(23,24,28,0.45)",
};

const LockIcon = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="4" y="10" width="16" height="10" rx="2" />
    <path d="M8 10V7a4 4 0 018 0v3" strokeLinecap="round" />
  </svg>
);

export default function UnauthorizedAccess({
  pageTitle = "Admin Access",
  pageSubtitle = "System Access Required",
  systemName = "Admin System",
}) {
  const {
    user,
    isAuthenticated,
    isAuthorized,
    loading,
    signInWithGoogle,
    signOut,
  } = useAuth();
  const [signingIn, setSigningIn] = useState(false);

  const handleSignIn = async () => {
    setSigningIn(true);
    try {
      const result = await signInWithGoogle();

      if (!result.success) {
        if (result.error === "UNAUTHORIZED") {
          notification.error({
            message: "Access Denied",
            description: `You are not authorized to access the ${systemName.toLowerCase()}. Please contact the administrator for access.`,
            duration: 5,
            placement: "topRight",
          });
        } else {
          notification.error({
            message: "Sign In Failed",
            description: "An error occurred during sign in. Please try again.",
            duration: 5,
            placement: "topRight",
          });
        }
      }
    } catch (error) {
      console.error("Sign in failed:", error);
      notification.error({
        message: "Sign In Error",
        description: "An unexpected error occurred. Please try again.",
        duration: 5,
        placement: "topRight",
      });
    } finally {
      setSigningIn(false);
    }
  };

  const brand = (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          fontFamily: "var(--font-display, Inter, system-ui, sans-serif)",
          fontWeight: 700,
          fontSize: 16,
          letterSpacing: "-0.02em",
          color: "#17181c",
        }}
      >
        Perniagaan Motor Kekal
      </div>
      <div style={{ fontSize: 12.5, color: "#6b7280", marginTop: 2 }}>
        {systemName}
      </div>
    </div>
  );

  let content;

  if (loading) {
    content = (
      <Spin
        indicator={<LoadingOutlined style={{ fontSize: 44, color: "#f2622e" }} spin />}
      />
    );
  } else if (!isAuthenticated) {
    content = (
      <>
        {brand}
        <Card style={cardStyle} bodyStyle={{ padding: "40px 32px" }}>
          <Space direction="vertical" size="large" style={{ width: "100%" }}>
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 13,
                  background: "#fdeadf",
                  color: "#f2622e",
                  display: "grid",
                  placeItems: "center",
                  margin: "0 auto 16px",
                }}
              >
                <LockIcon />
              </div>
              <Title level={3} style={{ marginBottom: 8 }}>
                {pageTitle}
              </Title>
              <Text type="secondary">
                Please sign in with your authorized Google account to access the{" "}
                {systemName.toLowerCase()}.
              </Text>
            </div>

            <Button
              type="primary"
              size="large"
              icon={<GoogleOutlined />}
              loading={signingIn}
              onClick={handleSignIn}
              style={{ width: "100%", height: "48px" }}
            >
              {signingIn ? "Signing in..." : "Sign in with Google"}
            </Button>

            <Text type="secondary" style={{ fontSize: "12px", textAlign: "center", display: "block" }}>
              Only authorized accounts can access this system.
            </Text>
          </Space>
        </Card>
      </>
    );
  } else if (isAuthenticated && !isAuthorized) {
    content = (
      <>
        {brand}
        <Card style={cardStyle} bodyStyle={{ padding: "24px 24px 32px" }}>
          <Result
            status="error"
            icon={<UserDeleteOutlined style={{ color: "#d1503c" }} />}
            title="Access Denied"
            subTitle={`Your email address (${
              user?.email
            }) is not authorized to access the ${systemName.toLowerCase()}. Please contact the administrator for access.`}
            extra={[
              <Button key="signout" onClick={signOut}>
                Sign Out
              </Button>,
            ]}
          >
            <Card
              size="small"
              style={{ background: "#f6f4f1", border: "none", marginTop: "8px" }}
            >
              <Text type="secondary" style={{ fontSize: "12px" }}>
                <strong>Note:</strong> Only pre-authorized email addresses can
                access the {systemName.toLowerCase()}. If you believe you should
                have access, please contact the system administrator.
              </Text>
            </Card>
          </Result>
        </Card>
      </>
    );
  } else {
    content = null;
  }

  return (
    <ConfigProvider theme={antdTheme}>
      <div style={pageStyle}>{content}</div>
    </ConfigProvider>
  );
}
