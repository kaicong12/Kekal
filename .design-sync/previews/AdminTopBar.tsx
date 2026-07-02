import * as React from "react";
import { useState } from "react";
import { AdminTopBar } from "@kekal/ui";

const frame: React.CSSProperties = {
  border: "1px solid var(--kk-border, #ece9e4)",
  borderRadius: 14,
  overflow: "hidden",
  background: "var(--kk-bg, #f6f4f1)",
};

const noop = () => {};

export const WithAction = () => {
  const [q, setQ] = useState("");
  return (
    <div style={frame}>
      <AdminTopBar
        title="Promotions"
        searchPlaceholder="Search offers..."
        searchValue={q}
        onSearchChange={setQ}
        actionLabel="New offer"
        onAction={noop}
      />
    </div>
  );
};

export const TitleOnly = () => (
  <div style={frame}>
    <AdminTopBar title="Listings" searchPlaceholder="Search bikes..." searchValue="" onSearchChange={noop} />
  </div>
);
