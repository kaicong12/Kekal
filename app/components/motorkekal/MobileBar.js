import { useTranslations } from "next-intl";
import { waLink, WaIcon, PHONE } from "./waLink";

// Sticky bottom action bar shown on mobile across the redesigned pages.
const MobileBar = ({ waMessage }) => {
  const t = useTranslations("stickyCta");
  return (
    <div className="mobile-bar">
      <a className="btn btn--outline" href={`tel:+${PHONE}`}>
        {t("call")}
      </a>
      <a
        className="btn btn--wa"
        href={waLink(waMessage || "Hi Motor Kekal, saya nak tanya pasal motosikal.")}
        target="_blank"
        rel="noopener noreferrer"
      >
        <WaIcon />
        {t("whatsapp")}
      </a>
    </div>
  );
};

export default MobileBar;
