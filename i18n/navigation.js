import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// Pathnames are shared across locales; only the locale prefix differs.
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
