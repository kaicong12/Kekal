"use client";
import { useState, useEffect, useCallback } from "react";
import { ConfigProvider } from "antd";
import {
  AppstoreOutlined,
  CarOutlined,
  TagOutlined,
  MailOutlined,
  StarOutlined,
  SettingOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { useAuth } from "../auth/AuthProvider";
import { auth } from "@/utils/firebase";
import MotorcycleManagement from "./motorcycle/MotorcycleManagement";
import PromotionManagement from "./promotions/PromotionManagement";
import styles from "./admin.module.css";

const antdTheme = {
  token: {
    colorPrimary: "#f2622e",
    colorInfo: "#f2622e",
    borderRadius: 10,
    controlHeight: 40,
    fontFamily: "var(--font-display, Inter, system-ui, sans-serif)",
  },
};

const NAV = [
  { key: "dashboard", label: "Dashboard", icon: <AppstoreOutlined />, disabled: true },
  { key: "motorcycles", label: "Listings", icon: <CarOutlined /> },
  { key: "promotions", label: "Promotions", icon: <TagOutlined /> },
  { key: "enquiries", label: "Enquiries", icon: <MailOutlined />, disabled: true },
  { key: "reviews", label: "Reviews", icon: <StarOutlined />, disabled: true },
  { section: "System" },
  { key: "settings", label: "Settings", icon: <SettingOutlined />, disabled: true },
];

// Bottom nav (mobile) — a compact subset of the sidebar.
const MOBILE_NAV = ["dashboard", "motorcycles", "promotions", "enquiries"];

const COMPONENTS = {
  motorcycles: <MotorcycleManagement />,
  promotions: <PromotionManagement />,
};

const AdminDashboard = () => {
  const { user, signOut } = useAuth();
  const [selected, setSelected] = useState("motorcycles");
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [counts, setCounts] = useState({ motorcycles: null, promotions: null });

  const fetchCounts = useCallback(async () => {
    try {
      const res = await fetch("/api/motorcycles?pageSize=1");
      const data = await res.json();
      setCounts((c) => ({ ...c, motorcycles: data.total ?? null }));
    } catch {
      /* badge is non-critical */
    }
    try {
      const token = await auth.currentUser?.getIdToken();
      const res = await fetch("/api/promotions?all=true", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setCounts((c) => ({ ...c, promotions: data.promotions?.length ?? null }));
    } catch {
      /* badge is non-critical */
    }
  }, []);

  useEffect(() => {
    fetchCounts();
  }, [fetchCounts]);

  const badgeFor = (key) =>
    key === "motorcycles" ? counts.motorcycles : key === "promotions" ? counts.promotions : null;

  const initials = (user?.displayName || user?.email || "A")
    .split(/[\s@.]/)
    .filter(Boolean)
    .slice(0, 2)
    .map((s) => s[0]?.toUpperCase())
    .join("");

  const renderNavItem = (item) => {
    if (item.section) {
      return (
        <div key={item.section} className={styles.navLabel}>
          {item.section}
        </div>
      );
    }
    const isActive = selected === item.key;
    const badge = badgeFor(item.key);
    return (
      <button
        key={item.key}
        type="button"
        disabled={item.disabled}
        title={item.disabled ? "Coming soon" : undefined}
        className={`${styles.navItem} ${isActive ? styles.navItemActive : ""} ${
          item.disabled ? styles.navItemDisabled : ""
        }`}
        onClick={() => !item.disabled && setSelected(item.key)}
      >
        <span className={styles.navIcon}>{item.icon}</span>
        <span className={styles.navText}>{item.label}</span>
        {badge != null && <span className={styles.navBadge}>{badge}</span>}
      </button>
    );
  };

  return (
    <ConfigProvider theme={antdTheme}>
      <div className={styles.shell}>
        {/* Sidebar (desktop) */}
        <aside className={styles.sidebar}>
          <div className={styles.brand}>
            <div className={styles.brandMark}>K</div>
            <div>
              <div className={styles.brandName}>Kekal</div>
              <div className={styles.brandRole}>Admin</div>
            </div>
          </div>

          <nav className={styles.nav}>{NAV.map(renderNavItem)}</nav>

          <div className={styles.userCard}>
            <div className={styles.userAvatar}>
              {user?.photoURL ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={user.photoURL} alt="" />
              ) : (
                initials || "A"
              )}
            </div>
            <div style={{ minWidth: 0 }}>
              <div className={styles.userName}>
                {user?.displayName || user?.email?.split("@")[0] || "Admin"}
              </div>
              <div className={styles.userRole}>Owner</div>
            </div>
            <div style={{ marginLeft: "auto", position: "relative" }}>
              <button
                type="button"
                className={styles.userMenuBtn}
                aria-label="Account menu"
                onClick={() => setUserMenuOpen((v) => !v)}
              >
                <MoreOutlined />
              </button>
              {userMenuOpen && (
                <div className={styles.rowMenu} style={{ bottom: "100%", top: "auto", right: 0 }}>
                  <button
                    type="button"
                    className={styles.rowMenuItem}
                    onClick={() => {
                      setUserMenuOpen(false);
                      signOut();
                    }}
                  >
                    Sign out
                  </button>
                </div>
              )}
            </div>
          </div>
        </aside>

        {/* Main content — the active section renders its own top bar */}
        <main className={styles.main}>{COMPONENTS[selected]}</main>

        {/* Bottom nav (mobile) */}
        <nav className={styles.bottomNav}>
          {MOBILE_NAV.map((key) => {
            const item = NAV.find((n) => n.key === key);
            if (!item) return null;
            const isActive = selected === key;
            return (
              <button
                key={key}
                type="button"
                disabled={item.disabled}
                className={`${styles.bottomNavItem} ${
                  isActive ? styles.bottomNavItemActive : ""
                }`}
                onClick={() => !item.disabled && setSelected(key)}
                style={item.disabled ? { opacity: 0.45 } : undefined}
              >
                <span className={styles.bottomNavIcon}>{item.icon}</span>
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>
    </ConfigProvider>
  );
};

export default AdminDashboard;
