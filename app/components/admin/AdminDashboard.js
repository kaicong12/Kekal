"use client";
import { useState, useEffect } from "react";
import { Avatar, Typography } from "antd";
import {
  UserOutlined,
  LogoutOutlined,
  CarOutlined,
  TagsOutlined,
} from "@ant-design/icons";
import { useAuth } from "../auth/AuthProvider";
import MotorcycleManagement from "./motorcycle/MotorcycleManagement";
import PromotionManagement from "./promotions/PromotionManagement";
import DefaultHeader from "../common/DefaultHeader";
import HeaderTop from "../common/HeaderTop";
import MobileMenu from "../common/MobileMenu";

const { Text } = Typography;

const AdminDashboard = () => {
  const { user, signOut } = useAuth();
  const [selectedMenuItem, setSelectedMenuItem] = useState("motorcycles");
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  if (isMobile === null) return null;

  const menuItems = [
    {
      key: "motorcycles",
      icon: <CarOutlined />,
      label: "Listings",
    },
    {
      key: "promotions",
      icon: <TagsOutlined />,
      label: "Promos",
    },
  ];

  const handleMenuClick = (key) => {
    setSelectedMenuItem(key);
  };

  const handleSignOut = async () => {
    await signOut();
  };

  const renderContent = () => {
    switch (selectedMenuItem) {
      case "motorcycles":
        return <MotorcycleManagement isMobile={isMobile} />;
      case "promotions":
        return <PromotionManagement isMobile={isMobile} />;
      default:
        return <MotorcycleManagement isMobile={isMobile} />;
    }
  };

  const sidebarContent = (
    <div style={styles.sidebarInner}>
      <div style={styles.logoSection}>
        <Text style={styles.sidebarTitle}>Admin</Text>
      </div>

      <nav style={styles.nav}>
        {menuItems.map((item) => {
          const isActive = selectedMenuItem === item.key;
          return (
            <button
              key={item.key}
              onClick={() => handleMenuClick(item.key)}
              style={{
                ...styles.navItem,
                ...(isActive ? styles.navItemActive : {}),
              }}
            >
              <span
                style={{
                  ...styles.navIcon,
                  ...(isActive ? styles.navIconActive : {}),
                }}
              >
                {item.icon}
              </span>
              <span style={styles.navLabel}>{item.label}</span>
              {isActive && <div style={styles.activeIndicator} />}
            </button>
          );
        })}
      </nav>

      <div style={styles.sidebarFooter}>
        <button onClick={handleSignOut} style={styles.navItem}>
          <span style={styles.navIcon}>
            <LogoutOutlined />
          </span>
          <span style={styles.navLabel}>Sign Out</span>
        </button>

        <div style={styles.userSection}>
          <Avatar
            size={36}
            src={user?.photoURL}
            icon={<UserOutlined />}
            style={{ flexShrink: 0 }}
          />
          <div style={styles.userInfo}>
            <Text style={styles.userName}>
              {user?.displayName || user?.email?.split("@")[0] || "Admin"}
            </Text>
            <Text style={styles.userEmail}>{user?.email}</Text>
          </div>
        </div>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <div style={styles.mobileLayout}>
        <DefaultHeader />
        <MobileMenu />
        <div style={styles.mobileContent}>{renderContent()}</div>

        <nav style={styles.bottomNav}>
          {menuItems.map((item) => {
            const isActive = selectedMenuItem === item.key;
            return (
              <button
                key={item.key}
                onClick={() => handleMenuClick(item.key)}
                style={{
                  ...styles.bottomNavItem,
                  ...(isActive ? styles.bottomNavItemActive : {}),
                }}
              >
                <span
                  style={{
                    fontSize: 20,
                    color: isActive ? "#f5c34b" : "#999",
                  }}
                >
                  {item.icon}
                </span>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? "#f5c34b" : "#999",
                  }}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>
      </div>
    );
  }

  return (
    <div>
      <HeaderTop />
      <DefaultHeader />
      <MobileMenu />
      <div className="container" style={{ paddingTop: 24, paddingBottom: 24 }}>
        <div style={styles.layout}>
          <aside style={styles.sidebar}>{sidebarContent}</aside>
          <main style={styles.main}>
            <div style={styles.content}>{renderContent()}</div>
          </main>
        </div>
      </div>
    </div>
  );
};

const styles = {
  layout: {
    display: "flex",
    minHeight: "80vh",
    background: "#f5f5f5",
  },
  sidebar: {
    width: 240,
    background: "#1a1a1a",
    position: "sticky",
    top: 0,
    alignSelf: "flex-start",
    minHeight: "calc(100vh - 120px)",
    display: "flex",
    flexDirection: "column",
  },
  sidebarInner: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    padding: "24px 0",
  },
  logoSection: {
    padding: "0 20px 24px",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
  },
  sidebarTitle: {
    color: "rgba(255,255,255,0.9)",
    fontSize: 18,
    fontWeight: 600,
    display: "block",
  },
  nav: {
    flex: 1,
    padding: "16px 12px",
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  navItem: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "10px 12px",
    borderRadius: 8,
    border: "none",
    background: "transparent",
    color: "rgba(255,255,255,0.6)",
    cursor: "pointer",
    width: "100%",
    textAlign: "left",
    fontSize: 14,
    fontWeight: 400,
    transition: "all 0.15s ease",
    position: "relative",
  },
  navItemActive: {
    background: "rgba(245, 195, 75, 0.12)",
    color: "#f5c34b",
    fontWeight: 500,
  },
  navIcon: {
    fontSize: 16,
    display: "flex",
    alignItems: "center",
    color: "rgba(255,255,255,0.5)",
  },
  navIconActive: {
    color: "#f5c34b",
  },
  navLabel: {
    lineHeight: 1,
  },
  activeIndicator: {
    position: "absolute",
    left: 0,
    top: "50%",
    transform: "translateY(-50%)",
    width: 3,
    height: 20,
    borderRadius: "0 3px 3px 0",
    background: "#f5c34b",
  },
  sidebarFooter: {
    padding: "16px 12px",
    borderTop: "1px solid rgba(255,255,255,0.08)",
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  userSection: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "8px 12px",
  },
  userInfo: {
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    minWidth: 0,
  },
  userName: {
    color: "rgba(255,255,255,0.9)",
    fontSize: 13,
    fontWeight: 500,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "block",
  },
  userEmail: {
    color: "rgba(255,255,255,0.4)",
    fontSize: 11,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "block",
  },
  main: {
    flex: 1,
    minHeight: "calc(100vh - 120px)",
    display: "flex",
    flexDirection: "column",
  },
  content: {
    padding: 24,
    flex: 1,
  },
  mobileLayout: {
    background: "#f8f8f8",
  },
  mobileContent: {
    padding: "16px 16px 80px",
    marginTop: 80,
  },
  bottomNav: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    background: "#fff",
    borderTop: "1px solid #eee",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "8px 0 12px",
    zIndex: 100,
  },
  bottomNavItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 2,
    border: "none",
    background: "transparent",
    cursor: "pointer",
    padding: "4px 16px",
  },
  bottomNavItemActive: {},
};

export default AdminDashboard;
