import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { toMotorcycleSlug } from "@/utils/slug";

const CarItems = ({ motorcycles }) => {
  const t = useTranslations("listing");
  return (
    <>
      {motorcycles.map((motorcycle) => (
        <div className="col-sm-6 col-lg-4" key={motorcycle.id}>
          <Link
            href={`/motorcycle/${toMotorcycleSlug(motorcycle)}`}
            className="text-decoration-none"
          >
            <div className="car-listing" style={{ cursor: "pointer" }}>
              <div className="thumb">
                <Image
                  width={284}
                  height={183}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  priority
                  src={motorcycle.imageUrl}
                  alt={motorcycle.name}
                />
              </div>
              <div className="details">
                <h6 className="card-title">{motorcycle.name}</h6>
                <div className="spec-grid">
                  <div className="spec-item">
                    <span className="spec-label">{t("engine")}</span>
                    <span className="spec-value">
                      {motorcycle.engineCapacity
                        ? `${motorcycle.engineCapacity}cc${motorcycle.engine ? ` ${motorcycle.engine}` : ""}`
                        : motorcycle.engine || "-"}
                    </span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">{t("price")}</span>
                    <span className="spec-value">RM {motorcycle.price?.toLocaleString()}</span>
                  </div>
                </div>
                <div className="view-details-btn">{t("viewDetails")}</div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default CarItems;
