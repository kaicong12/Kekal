"use client";
import { useState } from "react";
import {
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
import Footer from "./Footer";
import DefaultHeader from "./DefaultHeader";
import HeaderTop from "./HeaderTop";
import MobileMenu from "./MobileMenu";

const { Title, Text } = Typography;

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

  // Loading state
  if (loading) {
    return (
      <div className="wrapper">
        <HeaderTop />
        <DefaultHeader />
        <MobileMenu />

        <div
          style={{
            minHeight: "70vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#f5f5f5",
          }}
        >
          <Spin
            size="large"
            indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />}
          />
        </div>

        <Footer />
      </div>
    );
  }

  // Not authenticated state
  if (!isAuthenticated) {
    return (
      <div className="wrapper">
        <HeaderTop />
        <DefaultHeader />
        <MobileMenu />

        <section className="inner_page_breadcrumb">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="breadcrumb_content">
                  <h2 className="breadcrumb_title">{pageTitle}</h2>
                  <p className="subtitle">{pageSubtitle}</p>
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/#">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      <a href="#">{pageTitle}</a>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div style={{ padding: "80px 0", background: "#f5f5f5" }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-4">
                <Card
                  style={{
                    textAlign: "center",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  }}
                  bodyStyle={{ padding: "40px 32px" }}
                >
                  <Space
                    direction="vertical"
                    size="large"
                    style={{ width: "100%" }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: "48px",
                          color: "#faad14",
                          marginBottom: "16px",
                        }}
                      >
                        📋
                      </div>
                      <Title level={3} style={{ marginBottom: "8px" }}>
                        {systemName}
                      </Title>
                      <Text type="secondary">
                        Please sign in with your authorized Google account to
                        access the {systemName.toLowerCase()}.
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

                    <Text type="secondary" style={{ fontSize: "12px" }}>
                      Only authorized accounts can access this system.
                    </Text>
                  </Space>
                </Card>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  // Authenticated but not authorized
  if (isAuthenticated && !isAuthorized) {
    return (
      <div className="wrapper">
        <HeaderTop />
        <DefaultHeader />
        <MobileMenu />

        <section className="inner_page_breadcrumb">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="breadcrumb_content">
                  <h2 className="breadcrumb_title">Access Denied</h2>
                  <p className="subtitle">Unauthorized Access</p>
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/#">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      <a href="#">Access Denied</a>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div style={{ padding: "80px 0", background: "#f5f5f5" }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-6">
                <Result
                  icon={<UserDeleteOutlined style={{ color: "#ff4d4f" }} />}
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
                    style={{
                      background: "#f6f6f6",
                      border: "none",
                      marginTop: "24px",
                    }}
                  >
                    <Text type="secondary" style={{ fontSize: "12px" }}>
                      <strong>Note:</strong> Only pre-authorized email addresses
                      can access the {systemName.toLowerCase()}. If you believe
                      you should have access, please contact the system
                      administrator.
                    </Text>
                  </Card>
                </Result>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  // This should not happen in normal flow, but return null as fallback
  return null;
}
