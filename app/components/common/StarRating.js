// Simple 5-star rating using Font Awesome icons (already loaded project-wide).

const StarRating = ({ rating = 5, size }) => {
  const rounded = Math.round(rating);
  return (
    <span
      className="star-rating"
      aria-label={`${rating} out of 5 stars`}
      style={{ color: "#fbbf24", fontSize: size }}
    >
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className={i <= rounded ? "fas fa-star" : "far fa-star"}
          style={{ marginRight: 2 }}
        />
      ))}
    </span>
  );
};

export default StarRating;
