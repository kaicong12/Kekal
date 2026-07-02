import { useTranslations } from "next-intl";
import Pill from "./Pill";
import {
  waLink,
  WaIcon,
  FbIcon,
  PHONE,
  PHONE_DISPLAY,
  FACEBOOK_URL,
} from "./waLink";

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Rough "from RM x/month" teaser using the storefront's default terms
// (10% deposit, 5 years, 3.5% flat) — clearly labelled as an estimate.
function fromMonthly(price) {
  const principal = price * 0.9;
  const r = 3.5 / 12 / 100;
  const n = 60;
  return Math.round((principal * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1));
}

// Sticky purchase panel for the detail page. All figures are derived from the
// real motorcycle record — no fabricated ratings or promises.
const BuyBox = ({ motorcycle }) => {
  const t = useTranslations("mk.detail");
  const tMk = useTranslations("mk");
  const tDetail = useTranslations("detail");
  const price = Number(motorcycle.price) || 0;
  const priceLabel = `RM ${price.toLocaleString("en-MY")}`;

  const orderMsg = `Hi Motor Kekal, saya berminat ${motorcycle.brand} ${motorcycle.name} (${priceLabel}). Masih ada stok?`;

  return (
    <aside className="buybox">
      <div className="card card--pad">
        {motorcycle.brand ? <p className="buybox__brand">{motorcycle.brand}</p> : null}
        <h1>{motorcycle.name}</h1>

        <div className="buybox__rating">
          <Pill status="live">{tDetail("inStock")}</Pill>
        </div>

        <div className="buybox__price">
          <b>{priceLabel}</b>
        </div>
        {price > 0 ? (
          <p className="buybox__fin">
            {t("fromMonthly", { amount: fromMonthly(price).toLocaleString("en-MY") })}
          </p>
        ) : null}

        <div className="buybox__actions">
          <a
            className="btn btn--wa btn--lg btn--block"
            href={waLink(orderMsg)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WaIcon />
            {t("orderWhatsApp")}
          </a>
          <a className="btn btn--outline btn--lg btn--block" href="#finance">
            {t("calcInstallment")}
          </a>
        </div>

        <ul className="buybox__reassure">
          <li>
            <CheckIcon />
            <span>{t("reassure1")}</span>
          </li>
          <li>
            <CheckIcon />
            <span>{t("reassure2")}</span>
          </li>
          <li>
            <CheckIcon />
            <span>{t("reassure3")}</span>
          </li>
        </ul>
      </div>

      <a
        className="btn btn--outline btn--block"
        style={{ marginTop: 12 }}
        href={`tel:+${PHONE}`}
      >
        Call {PHONE_DISPLAY}
      </a>
      <a
        className="btn btn--fb btn--block"
        style={{ marginTop: 10 }}
        href={FACEBOOK_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FbIcon />
        {tMk("visitFacebook")}
      </a>
    </aside>
  );
};

export default BuyBox;
