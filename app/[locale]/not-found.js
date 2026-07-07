import NotFoundContent from "@/app/components/motorkekal/NotFoundContent";

// Boundary for programmatic notFound() calls (e.g. an invalid motorcycle
// slug). Unknown URLs are handled by the [...not_found] catch-all instead.
const NotFound = () => <NotFoundContent />;

export default NotFound;
