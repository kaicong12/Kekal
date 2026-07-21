import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import SiteHeader from "@/app/components/motorkekal/SiteHeader";
import SiteFooter from "@/app/components/motorkekal/SiteFooter";
import MobileBar from "@/app/components/motorkekal/MobileBar";
import Breadcrumb from "@/app/components/motorkekal/Breadcrumb";
import { listMotorcyclesPg } from "@/utils/dbPg";
import { toMotorcycleSlug } from "@/utils/slug";
import { localeAlternates } from "@/utils/seoAlternates";

// Server-rendered HTML index of every motorcycle. Unlike the client-rendered
// /listing grid, the links here exist in the initial HTML, giving Googlebot a
// crawlable path to all detail pages (fixes "Discovered - currently not
// indexed" by making the pages discoverable, not just present in the sitemap).
export const revalidate = 86400; // 24 hours

export function generateMetadata({ params: { locale } }) {
  return {
    title: "All Motorcycles - Kedai Motor Johor Bahru | Perniagaan Motor Kekal",
    description:
      "Browse every motorcycle for sale at Perniagaan Motor Kekal, Johor Bahru — Yamaha, Honda, Kawasaki, KTM and more. New bikes with easy financing and in-house servicing.",
    keywords: [
      "all motorcycles johor bahru",
      "senarai motosikal",
      "kedai motor johor bahru",
      "motorcycle dealer johor",
      "beli motor jb",
    ],
    alternates: localeAlternates("/motorcycles", locale),
  };
}

export default async function MotorcyclesIndexPage({ params: { locale } }) {
  setRequestLocale(locale);
  const t = await getTranslations("mk.motorcyclesIndex");
  const tDetail = await getTranslations("detail");

  const motorcycles = await listMotorcyclesPg();

  // Group by brand for a scannable, well-structured index.
  const byBrand = new Map();
  for (const m of motorcycles) {
    const brand = m.brand || "Other";
    if (!byBrand.has(brand)) byBrand.set(brand, []);
    byBrand.get(brand).push(m);
  }
  const brands = [...byBrand.keys()].sort((a, b) => a.localeCompare(b));
  for (const list of byBrand.values()) {
    list.sort((a, b) => (a.name || "").localeCompare(b.name || ""));
  }

  return (
    <div className="mk-site">
      <SiteHeader />

      <main>
        <div className="wrap">
          <Breadcrumb
            items={[
              { label: tDetail("breadcrumbHome"), href: "/" },
              { label: t("heading") },
            ]}
          />
        </div>

        <section className="section wrap">
          <div className="section-head">
            <h1>{t("heading")}</h1>
            <p>{t("intro")}</p>
          </div>

          {brands.map((brand) => (
            <div key={brand} style={{ marginTop: 32 }}>
              <h2 style={{ fontSize: "clamp(20px,2.4vw,26px)" }}>{brand}</h2>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "14px 0 0",
                  display: "grid",
                  gap: "8px 24px",
                  gridTemplateColumns:
                    "repeat(auto-fill, minmax(240px, 1fr))",
                }}
              >
                {byBrand.get(brand).map((m) => (
                  <li key={m.id}>
                    <Link href={`/motorcycle/${toMotorcycleSlug(m)}`}>
                      {m.brand} {m.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </main>

      <SiteFooter />
      <MobileBar waMessage="Hi Motor Kekal, saya cari motosikal. Boleh bantu?" />
    </div>
  );
}
