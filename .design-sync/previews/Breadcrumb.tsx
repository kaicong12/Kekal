import * as React from "react";
import { Breadcrumb } from "@kekal/ui";

const wrap: React.CSSProperties = { padding: 20 };

export const TwoLevels = () => (
  <div style={wrap}>
    <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Promotions" }]} />
  </div>
);

export const ThreeLevels = () => (
  <div style={wrap}>
    <Breadcrumb
      items={[
        { label: "Home", href: "/" },
        { label: "Motorcycles", href: "/listing" },
        { label: "Yamaha Y15ZR V2" },
      ]}
    />
  </div>
);
