import { Suspense } from "react";
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import SiteHeader from "@/app/components/motorkekal/SiteHeader";
import SiteFooter from "@/app/components/motorkekal/SiteFooter";
import MobileBar from "@/app/components/motorkekal/MobileBar";
import ListingsBody from "@/app/components/motorkekal/ListingsBody";

const ListingV1 = ({ params: { locale } }) => {
  setRequestLocale(locale);
  const t = useTranslations("mk");
  const tl = useTranslations("listing");

  return (
    <div className="mk-site">
      <SiteHeader />

      <main>
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <a href="/">{tl("breadcrumbHome")}</a>
            <span>›</span>
            {tl("breadcrumbCurrent")}
          </nav>
        </div>

        <section className="page-hero wrap">
          <p className="eyebrow">{t("listings.eyebrow")}</p>
          <h1>{tl("breadcrumbTitle")}</h1>
          <p>{t("listings.subtitle")}</p>
        </section>

        {/* ListingsBody reads useSearchParams(); without this boundary Next
            deopts the whole route into client-side rendering. */}
        <Suspense
          fallback={
            <section className="wrap" style={{ paddingBottom: 76 }}>
              <div className="mk-center" />
            </section>
          }
        >
          <ListingsBody />
        </Suspense>
      </main>

      <SiteFooter />
      <MobileBar waMessage="Hi Motor Kekal, saya cari motosikal. Boleh bantu?" />
    </div>
  );
};

export default ListingV1;
