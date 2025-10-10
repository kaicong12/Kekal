"use client";
import { useState } from "react";
import { Menu, Avatar, Button, Typography, Dropdown } from "antd";
import {
  FileTextOutlined,
  UnorderedListOutlined,
  SettingOutlined,
  UserOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { useAuth } from "../auth/AuthProvider";
import CashSalesInterface from "../cash-sales/CashSalesInterface";
import ReceiptManagementInterface from "../receipt-management/ReceiptManagementInterface";
import Footer from "../common/Footer";
import DefaultHeader from "../common/DefaultHeader";
import HeaderTop from "../common/HeaderTop";
import MobileMenu from "../common/MobileMenu";

const { Title, Text } = Typography;

const AdminDashboard = () => {
  const { user, signOut } = useAuth();
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState("cash-sales");

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

  const userMenuItems = [
    {
      key: "settings",
      icon: <SettingOutlined />,
      label: "Settings",
      disabled: true,
    },
    {
      type: "divider",
    },
    {
      key: "signout",
      icon: <LogoutOutlined />,
      label: "Sign Out",
      onClick: handleSignOut,
    },
  ];

  const currentComponent = menuItems.find(
    (item) => item.key === selectedMenuItem
  )?.component;

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
      </section>

      <div className="row">
        {/* Sidebar */}
        <div
          className={`col-md-${collapsed ? "1" : "3"} col-lg-${
            collapsed ? "1" : "2"
          }`}
          style={{ transition: "all 0.3s ease" }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              minHeight: "70vh",
              position: "sticky",
              top: "20px",
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
              <div
                style={{
                  width: 40,
                  height: 40,
                  background: "#faad14",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 12px",
                  fontSize: "20px",
                }}
              >
                👤
              </div>
              {!collapsed && (
                <>
                  <Title
                    level={5}
                    style={{ margin: "8px 0 4px", color: "#333" }}
                  >
                    永恒摩托车易公司
                  </Title>
                  <Text type="secondary" style={{ fontSize: "12px" }}>
                    Admin Panel
                  </Text>
                </>
              )}
            </div>

            {/* Menu */}
            <Menu
              mode="inline"
              selectedKeys={[selectedMenuItem]}
              onClick={handleMenuClick}
              style={{
                border: "none",
                paddingTop: "16px",
              }}
              items={menuItems.map((item) => ({
                key: item.key,
                icon: item.icon,
                label: collapsed ? null : item.label,
                title: collapsed ? item.label : undefined,
              }))}
            />

            {/* User Info & Settings */}
            {!collapsed && (
              <div
                style={{
                  position: "absolute",
                  bottom: 24,
                  left: 16,
                  right: 16,
                }}
              >
                <Dropdown
                  menu={{
                    items: userMenuItems,
                  }}
                  trigger={["click"]}
                  placement="topRight"
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      cursor: "pointer",
                      padding: "12px",
                      borderRadius: "8px",
                      background: "#f8f9fa",
                      transition: "background-color 0.2s",
                      marginBottom: "16px",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#e9ecef";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#f8f9fa";
                    }}
                  >
                    <Avatar
                      size="small"
                      src={user?.photoURL}
                      icon={<UserOutlined />}
                    />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <Text
                        strong
                        style={{
                          fontSize: "12px",
                          display: "block",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {user?.displayName || user?.email}
                      </Text>
                    </div>
                  </div>
                </Dropdown>
              </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div
          className={`col-md-${collapsed ? "11" : "9"} col-lg-${
            collapsed ? "11" : "10"
          }`}
          style={{ transition: "all 0.3s ease" }}
        >
          {currentComponent}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AdminDashboard;
