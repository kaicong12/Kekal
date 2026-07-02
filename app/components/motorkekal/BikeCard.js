import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { toMotorcycleSlug } from "@/utils/slug";
import Pill from "./Pill";

// A single motorcycle card in the design's bike-grid. Driven by real
// motorcycle records from the database.
const BikeCard = ({ motorcycle, tag }) => {
  const t = useTranslations("mk");

  const spec = motorcycle.engineCapacity
    ? `${motorcycle.engineCapacity}cc${motorcycle.engine ? ` · ${motorcycle.engine}` : ""}`
    : motorcycle.engine || "";

  return (
    <article className="card card--hover bike-card">
      <Link
        href={`/motorcycle/${toMotorcycleSlug(motorcycle)}`}
        aria-label={motorcycle.name}
      >
        <div className="bike-card__media">
          {motorcycle.imageUrl ? (
            <Image
              width={320}
              height={240}
              src={motorcycle.imageUrl}
              alt={motorcycle.name}
            />
          ) : null}
          {tag ? <span className="bike-card__tag">{tag}</span> : null}
        </div>
        <div className="bike-card__body">
          {motorcycle.brand ? (
            <p className="bike-card__brand">{motorcycle.brand}</p>
          ) : null}
          <h3 className="bike-card__name">{motorcycle.name}</h3>
          {spec ? <p className="bike-card__spec">{spec}</p> : null}
          <div className="bike-card__foot">
            <div className="bike-card__price">
              <b>RM {motorcycle.price?.toLocaleString()}</b>
            </div>
            <Pill status="live">{t("inStock")}</Pill>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BikeCard;
