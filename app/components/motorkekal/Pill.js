// Static status pill matching the design system's kk-pill markup.
// status: "live" | "scheduled"
const Pill = ({ status = "live", children }) => (
  <span className={`mk-pill mk-pill--${status}`}>
    <span className="mk-pill__dot" />
    {children}
  </span>
);

export default Pill;
