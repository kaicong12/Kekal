"use client";
import menuItems from "@/data/menuItems";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MainMenu = () => {
  const path = usePathname();

  return (
    <>
      {menuItems.map((menuItem, index) => (
        <li key={index}>
          <Link
            href={menuItem.subMenu[0].path}
            className={path === menuItem.subMenu[0].path ? "active" : ""}
          >
            <span className="title">{menuItem.label}</span>
          </Link>
        </li>
      ))}
    </>
  );
};

export default MainMenu;
