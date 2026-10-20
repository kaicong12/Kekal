import { revalidatePath } from "next/cache";

const CATALOG_SURFACES = [
  "/[locale]/motorcycle/[slug]",
  "/[locale]/motorcycles",
  "/[locale]/listing",
  "/[locale]/promotions",
  "/[locale]/brands/[brand]",
  "/[locale]/home",
  "/[locale]",
];

export function revalidateCatalogSurfaces() {
  for (const path of CATALOG_SURFACES) {
    try {
      revalidatePath(path, "page");
    } catch (error) {
      console.error(`Failed to revalidate ${path}:`, error);
    }
  }

  try {
    revalidatePath("/sitemap.xml");
  } catch (error) {
    console.error("Failed to revalidate /sitemap.xml:", error);
  }
}
