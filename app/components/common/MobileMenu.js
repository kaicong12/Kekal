"use client";
// import menuItems from "@/data/menuItems";
// import { isParentActive } from "@/utils/isMenuActive";
import Image from "next/image";
import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { ProSidebarProvider, Sidebar, Menu, MenuItem } from "react-pro-sidebar";

const MobileMenu = () => {
  const path = usePathname();
  const t = useTranslations("nav");
  const tHeader = useTranslations("headerTop");

  const socialLinks = [
    {
      name: "Facebook",
      icon: "fab fa-facebook-f",
      link: "https://www.facebook.com/PerniagaanMotorKekal/",
    },
    {
      name: "Google",
      icon: "fab fa-google",
      link: "https://share.google/OohDB8ee58dGsIflS",
    },
    {
      name: "WhatsApp",
      icon: "fab fa-whatsapp",
      link: "https://wa.me/60127126128",
    },
  ];

  const contactInfo = [
    {
      icon: "flaticon-map",
      text: "5 Jalan Seroja 49, Taman Johor Bahru, 81100 Johor Bahru",
    },
    {
      icon: "flaticon-phone-call",
      text: "+60127126128",
    },
    {
      icon: "flaticon-clock",
      text: tHeader("mobileHours"),
    },
  ];

  const menuItems = [
    { label: t("listings"), path: "/listing" },
    { label: t("promotions"), path: "/promotions" },
    { label: t("ourServices"), path: "/service" },
    { label: t("contact"), path: "/contact" },
    { label: t("aboutUs"), path: "/about-us" },
    { label: t("faq"), path: "/faq" },
  ];

  return (
    <>
      <div className="stylehome1 h0">
        <div className="mobile-menu">
          <div className="header stylehome1">
            <div className="mobile_menu_bar">
              <a
                className="menubar"
                data-bs-toggle="offcanvas"
                data-bs-target="#mobileMenu"
                aria-controls="mobileMenu"
              >
                <small>{t("menu")}</small>
                <span />
              </a>
            </div>
            {/* End mobile_menu_bar */}

            <div className="mobile_menu_main_logo">
              <Image
                width={140}
                height={45}
                priority
                src="/images/logoBlack.svg"
                alt="Perniagaan Motor Kekal logo"
              />
            </div>
            {/* End .mobile_menu_main_logo */}
          </div>
        </div>
        {/* /.mobile-menu */}
      </div>
      {/* End mobile menu header */}

      {/* start mobile sidebar menu */}
      <div
        className="offcanvas offcanvas-end mobile_menu-canvas"
        tabIndex="-1"
        id="mobileMenu"
        aria-labelledby="mobileMenuLabel"
        data-bs-scroll="true"
      >
        <div className="offcanvas-body">
          <div className="pro-header">
            <Link href="/">
              <Image
                width={140}
                height={45}
                priority
                src="/images/logoBlack.svg"
                alt="Perniagaan Motor Kekal logo"
              />
            </Link>
            <div
              className="fix-icon"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <i className="fa-solid fa-circle-xmark"></i>
            </div>
          </div>
          {/* End pro-header */}

          {/* mobile menu items start */}
          <ProSidebarProvider>
            <Sidebar
              width="100%"
              backgroundColor="#0A2357"
              className="my-custom-class"
            >
              <Menu>
                {menuItems.map((item, index) => (
                  <MenuItem
                    key={index}
                    className={item.path === path ? "active" : ""}
                    component={<Link href={item.path} />}
                  >
                    {item.label}
                  </MenuItem>
                ))}
              </Menu>
            </Sidebar>
          </ProSidebarProvider>
          {/* mobile menu items end */}

          <div className="pro-footer mm-add-listing">
            <div className="border-none">
              <div className="mmenu-contact-info">
                {contactInfo.map((info, index) => (
                  <span className="phone-num" key={index}>
                    <i className={info.icon} /> <a href="#">{info.text}</a>
                  </span>
                ))}
              </div>

              <div className="social-links">
                {socialLinks.map((link, index) => (
                  <a href={link.link} key={index}>
                    <span className={link.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          {/* End mm-add-listng */}
        </div>
        {/* End offcanvas-body */}
      </div>
      {/* End mobile sidebar menu */}
    </>
  );
};

export default MobileMenu;
