import * as React from "react";

export type StatusKind = "live" | "scheduled" | "draft" | "ended";

export interface StatusPillProps {
  /** Which status family drives the color (dot + tint). */
  status: StatusKind;
  /** Text shown inside the pill. Defaults to the capitalized status. */
  label?: React.ReactNode;
}

const DEFAULT_LABEL: Record<StatusKind, string> = {
  live: "Live",
  scheduled: "Scheduled",
  draft: "Draft",
  ended: "Ended",
};

/**
 * Small status chip — a soft tinted background with a colored dot. Used across
 * admin lists and edit headers to signal item state.
 */
export function StatusPill({ status, label }: StatusPillProps) {
  return (
    <span className={`kk-pill kk-pill--${status}`}>
      <span className="kk-pill__dot" />
      {label ?? DEFAULT_LABEL[status]}
    </span>
  );
}
