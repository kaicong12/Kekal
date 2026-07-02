import SiteHeader from "@/app/components/motorkekal/SiteHeader";
import SiteFooter from "@/app/components/motorkekal/SiteFooter";
import MobileBar from "@/app/components/motorkekal/MobileBar";
import ListingsBody from "@/app/components/motorkekal/ListingsBody";

const ListingV1 = () => {
  return (
    <div className="mk-site">
      <SiteHeader />
      <ListingsBody />
      <SiteFooter />
      <MobileBar waMessage="Hi Motor Kekal, saya cari motosikal. Boleh bantu?" />
    </div>
  );
};

export default ListingV1;
