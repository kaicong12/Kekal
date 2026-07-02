import * as React from "react";
import { MobileCard, StatusPill, Thumb } from "@kekal/ui";

const wrap: React.CSSProperties = {
  maxWidth: 380,
  display: "flex",
  flexDirection: "column",
  gap: 10,
  padding: 20,
  background: "var(--kk-bg, #f6f4f1)",
};

const noop = () => {};

const IMG = (color: string) =>
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='104' height='80'><rect width='104' height='80' fill='${color}'/></svg>`
  );

export const PromotionCard = () => (
  <div style={wrap}>
    <MobileCard
      thumb={<Thumb src={IMG("#f2622e")} alt="Yamaha" />}
      pill={<StatusPill status="live" />}
      title="RM 500 off any Yamaha"
      meta="26 Jun → 03 Jul"
      onClick={noop}
      onEdit={noop}
      onDelete={noop}
    />
    <MobileCard
      thumb={<Thumb src={null} />}
      pill={<StatusPill status="scheduled" />}
      title="0% interest, 12 months"
      meta="Not scheduled"
      onClick={noop}
      onEdit={noop}
      onDelete={noop}
    />
  </div>
);

export const ListingCard = () => (
  <div style={wrap}>
    <MobileCard
      thumb={<Thumb src={IMG("#17181c")} alt="KTM RC 390" />}
      pill={<span style={{ fontWeight: 700 }}>RM 27,500</span>}
      title="KTM RC 390"
      meta="373cc · 2015 · RC 390"
      onClick={noop}
      onEdit={noop}
      onDelete={noop}
    />
  </div>
);
