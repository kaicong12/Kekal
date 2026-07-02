import * as React from "react";
import { Thumb } from "@kekal/ui";

const row: React.CSSProperties = {
  display: "flex",
  gap: 12,
  alignItems: "center",
  padding: 20,
};

const IMG =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='104' height='80'>
       <rect width='104' height='80' fill='#f2622e'/>
       <rect x='14' y='30' width='76' height='30' rx='6' fill='#fff' opacity='0.9'/>
     </svg>`
  );

export const WithImage = () => (
  <div style={row}>
    <Thumb src={IMG} alt="Yamaha Y15ZR" />
  </div>
);

export const Placeholder = () => (
  <div style={row}>
    <Thumb src={null} alt="no image" />
  </div>
);
