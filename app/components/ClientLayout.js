"use client";
import Aos from "aos";
import { useEffect } from "react";
import ScrollToTop from "./common/ScrollTop";
import styled from "styled-components";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

if (typeof window !== "undefined") {
  import("bootstrap");
}

const StyledDiv = styled.div`
  margin: 0;
  padding: 0;
`;

export default function ClientLayout({ children }) {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);

  return (
    <StyledDiv>
      {children}
      <ScrollToTop />
      <Analytics />
      <SpeedInsights />
    </StyledDiv>
  );
}
