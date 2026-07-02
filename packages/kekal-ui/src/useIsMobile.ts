import { useEffect, useState } from "react";

/**
 * Returns true when the viewport is at or below `breakpoint` (default 860px) —
 * the width at which the admin shell swaps tables for stacked cards.
 */
export function useIsMobile(breakpoint = 860): boolean {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [breakpoint]);
  return isMobile;
}
