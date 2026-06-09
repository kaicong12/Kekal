import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// Locale-aware navigation helpers. Pathnames are shared across locales
// (only the locale prefix differs), so we use the shared-pathnames variant.
export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing);
