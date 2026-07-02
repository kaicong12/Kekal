import * as React from "react";
import { StatusPill } from "@kekal/ui";

const row: React.CSSProperties = {
  display: "flex",
  gap: 10,
  alignItems: "center",
  flexWrap: "wrap",
  padding: 20,
};

export const AllStatuses = () => (
  <div style={row}>
    <StatusPill status="live" />
    <StatusPill status="scheduled" />
    <StatusPill status="draft" />
    <StatusPill status="ended" />
  </div>
);

export const CustomLabel = () => (
  <div style={row}>
    <StatusPill status="live" label="Live now" />
    <StatusPill status="scheduled" label="Starts 1 Jul" />
    <StatusPill status="ended" label="Expired" />
  </div>
);
