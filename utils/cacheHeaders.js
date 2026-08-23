const CDN_POLICY = "public, s-maxage=300, stale-while-revalidate=604800";

// Next strips a plain Cache-Control off `force-dynamic` handlers; the
// CDN-prefixed variants survive and are what Vercel's edge reads.
export const CATALOG_CACHE_HEADERS = {
  "Cache-Control": "public, max-age=0, must-revalidate",
  "CDN-Cache-Control": CDN_POLICY,
  "Vercel-CDN-Cache-Control": CDN_POLICY,
};
