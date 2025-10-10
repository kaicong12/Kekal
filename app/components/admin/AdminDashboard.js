"use client";
import { useState, useEffect } from "react";
import { Menu, Avatar, Button, Typography, Dropdown, Drawer } from "antd";
import {
  FileTextOutlined,
  UnorderedListOutlined,
  SettingOutlined,
  UserOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { useAuth } from "../auth/AuthProvider";
import CashSalesInterface from "../cash-sales/CashSalesInterface";
import ReceiptManagementInterface from "../receipt-management/ReceiptManagementInterface";
import Footer from "../common/Footer";
import DefaultHeader from "../common/DefaultHeader";
import HeaderTop from "../common/HeaderTop";
import MobileMenu from "../common/MobileMenu";

const { Text } = Typography;

const AdminDashboard = () => {
  const { user, signOut } = useAuth();
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState("cash-sales");
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (mobile) {
        setCollapsed(true);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const menuItems = [
    {
      key: "cash-sales",
      icon: <FileTextOutlined />,
      label: "Create Receipt",
      component: <CashSalesInterface />,
    },
    {
      key: "receipt-management",
      icon: <UnorderedListOutlined />,
      label: "Receipt List",
      component: <ReceiptManagementInterface />,
    },
  ];

  const handleMenuClick = ({ key }) => {
    setSelectedMenuItem(key);
  };

  const handleSignOut = async () => {
    await signOut();
  };

  const handleMobileMenuClick = ({ key }) => {
    setSelectedMenuItem(key);
    setMobileMenuVisible(false);
  };

  const currentComponent = menuItems.find(
    (item) => item.key === selectedMenuItem
  )?.component;

  const renderSidebarContent = () => (
    <div
      style={{
        background: "#fff",
        borderRadius: isMobile ? "0" : "8px",
        boxShadow: isMobile ? "none" : "0 4px 12px rgba(0,0,0,0.1)",
        minHeight: isMobile ? "100vh" : "70vh",
        position: isMobile ? "relative" : "sticky",
        top: isMobile ? "0" : "20px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Sidebar Header */}
      <div
        style={{
          padding: "24px 16px",
          borderBottom: "1px solid #f0f0f0",
          textAlign: "center",
          position: "relative",
        }}
      >
        {!isMobile && (
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              position: "absolute",
              right: "8px",
              top: "8px",
              fontSize: "16px",
            }}
          />
        )}

        {/* User Profile Section */}
        <div style={{ marginBottom: "16px" }}>
          <Avatar
            size={collapsed && !isMobile ? 32 : 48}
            src={user?.photoURL}
            icon={<UserOutlined />}
            style={{ margin: "0 auto 8px" }}
          />
          {(!collapsed || isMobile) && (
            <>
              <Text
                strong
                style={{
                  display: "block",
                  fontSize: "14px",
                  color: "#333",
                  marginBottom: "4px",
                  wordBreak: "break-word",
                }}
              >
                {user?.displayName || user?.email?.split("@")[0] || "Admin"}
              </Text>
              <Text
                type="secondary"
                style={{
                  fontSize: "11px",
                  display: "block",
                  wordBreak: "break-word",
                }}
              >
                {user?.email}
              </Text>
            </>
          )}
        </div>
      </div>

      {/* Menu */}
      <div style={{ flex: 1, paddingTop: "16px" }}>
        <Menu
          mode="inline"
          selectedKeys={[selectedMenuItem]}
          onClick={isMobile ? handleMobileMenuClick : handleMenuClick}
          style={{
            border: "none",
          }}
          items={menuItems.map((item) => ({
            key: item.key,
            icon: item.icon,
            label: collapsed && !isMobile ? null : item.label,
            title: collapsed && !isMobile ? item.label : undefined,
          }))}
        />
      </div>

      {/* Sign Out Section */}
      <div
        style={{
          padding: "16px",
          borderTop: "1px solid #f0f0f0",
          marginTop: "auto",
        }}
      >
        <Button
          type="text"
          icon={<LogoutOutlined />}
          onClick={handleSignOut}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: collapsed && !isMobile ? "center" : "flex-start",
            padding: "8px 12px",
            borderRadius: "6px",
            color: "#666",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#f5f5f5";
            e.currentTarget.style.color = "#1890ff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "#666";
          }}
        >
          {(!collapsed || isMobile) && "Sign Out"}
        </Button>
      </div>
    </div>
  );

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
                <div>
                  <h2 className="breadcrumb_title">Admin Panel</h2>
                  <p className="subtitle">Admin Panel</p>
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/#">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      <a href="#">Admin</a>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admin mobile menu section - below hero/breadcrumb section */}
      {isMobile && (
        <section
          style={{
            background: "#f8f9fa",
            borderBottom: "1px solid #dee2e6",
            padding: "12px 0",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div style={{ textAlign: "center" }}>
                  <Button
                    type="primary"
                    icon={<MenuOutlined />}
                    onClick={() => setMobileMenuVisible(true)}
                    style={{
                      background: "#1890ff",
                      borderColor: "#1890ff",
                      borderRadius: "8px",
                      fontSize: "16px",
                      padding: "8px 24px",
                      height: "auto",
                      boxShadow: "0 2px 4px rgba(24, 144, 255, 0.2)",
                    }}
                  >
                    Admin Menu
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <div className="container-fluid">
        <div className="row" style={{ margin: "0 -15px" }}>
          {!isMobile && (
            <div
              className={`col-md-${collapsed ? "1" : "3"} col-lg-${
                collapsed ? "1" : "2"
              }`}
              style={{ transition: "all 0.3s ease", padding: "0 15px" }}
            >
              {renderSidebarContent()}
            </div>
          )}

          {/* Mobile Drawer */}
          {isMobile && (
            <Drawer
              title="Navigation"
              placement="left"
              onClose={() => setMobileMenuVisible(false)}
              open={mobileMenuVisible}
              bodyStyle={{ padding: 0 }}
              width={280}
            >
              {renderSidebarContent()}
            </Drawer>
          )}

          {/* Main Content */}
          <div
            className={
              isMobile
                ? "col-12"
                : `col-md-${collapsed ? "11" : "9"} col-lg-${
                    collapsed ? "11" : "10"
                  }`
            }
            style={{
              transition: "all 0.3s ease",
              padding: isMobile ? "0 15px" : "0 15px",
              marginTop: isMobile ? "20px" : "0",
            }}
          >
            {currentComponent}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AdminDashboard;
