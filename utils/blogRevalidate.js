import { revalidatePath } from "next/cache";

// Blog pages are cached for an hour, so a save has to push the change out or it
// won't surface for that long. Revalidating the route pattern rather than each
// slug covers renames and deletions too.
const BLOG_SURFACES = [
  "/[locale]/blog",
  "/[locale]/blog/[slug]",
  "/[locale]/blog/category/[category]",
];

export function revalidateBlogSurfaces() {
  for (const path of BLOG_SURFACES) {
    try {
      revalidatePath(path, "page");
    } catch (error) {
      // A bad path shouldn't fail the write that already succeeded.
      console.error(`Failed to revalidate ${path}:`, error);
    }
  }

  try {
    revalidatePath("/sitemap.xml");
  } catch (error) {
    console.error("Failed to revalidate /sitemap.xml:", error);
  }
}
