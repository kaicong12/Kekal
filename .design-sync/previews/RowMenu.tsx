import * as React from "react";
import { RowMenu } from "@kekal/ui";

const wrap: React.CSSProperties = {
  padding: 20,
  paddingBottom: 120,
  display: "flex",
  justifyContent: "flex-end",
};

const noop = () => {};

export const Open = () => (
  <div style={wrap}>
    <RowMenu defaultOpen onEdit={noop} onDelete={noop} />
  </div>
);

export const Closed = () => (
  <div style={{ padding: 20, display: "flex", justifyContent: "flex-end" }}>
    <RowMenu onEdit={noop} onDelete={noop} />
  </div>
);
