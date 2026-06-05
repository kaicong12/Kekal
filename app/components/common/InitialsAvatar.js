// Deterministic, faceless avatar for review authors: a colored circle with the
// reviewer's initials. Avoids fake stock-photo faces and re-hosting Google
// profile photos, while staying visually consistent across testimonials.

const PALETTE = [
  "#1d4ed8",
  "#0f766e",
  "#b45309",
  "#9333ea",
  "#be123c",
  "#15803d",
  "#0369a1",
  "#c2410c",
];

function colorFor(seed) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  }
  return PALETTE[hash % PALETTE.length];
}

const InitialsAvatar = ({ name, initials, size = 70, style }) => {
  const label = initials || (name ? name.trim().charAt(0).toUpperCase() : "?");
  return (
    <span
      aria-label={name}
      title={name}
      style={{
        width: size,
        height: size,
        flex: "0 0 auto",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        background: colorFor(name || label),
        color: "#fff",
        fontWeight: 700,
        fontSize: Math.round(size * 0.36),
        lineHeight: 1,
        letterSpacing: "0.5px",
        userSelect: "none",
        ...style,
      }}
    >
      {label}
    </span>
  );
};

export default InitialsAvatar;
