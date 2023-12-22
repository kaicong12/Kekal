import Image from "next/image";
import Link from "next/link";

const CarItems = ({ motorcycles }) => {
  return (
    <>
      {motorcycles.map((motorcycle) => (
        <div className="col-sm-6 col-lg-4 col-xl-3" key={motorcycle.id}>
          <div className="car-listing">
            <div className="thumb">
              {motorcycle.featured ? (
                <>
                  <div className="tag">FEATURED</div>
                </>
              ) : undefined}
              {!motorcycle.featured ? (
                <>
                  <div className="tag blue">SPECIAL</div>
                </>
              ) : undefined}

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
                alt={motorcycle.model}
              />

              <div className="thmb_cntnt3">
                <ul className="mb0">
                  <li className="list-inline-item">
                    <a href="#">
                      <span className="flaticon-shuffle-arrows" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <span className="flaticon-heart" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="details">
              <div className="wrapper">
                <h5 className="price">${motorcycle.price}</h5>
                <h6 className="title">
                  <Link href={`/listing-single-v1/${motorcycle.id}`}>{motorcycle.model}</Link>
                </h6>
              </div>
              {/* End wrapper */}

              <div className="listing_footer">
                <ul className="mb0">
                  <li className="list-inline-item">
                    <span className="flaticon-sedan-car-model me-2" />
                    {motorcycle.engine}
                  </li>
                  <li className="list-inline-item">
                    <span className="flaticon-coin me-2" />
                    {motorcycle.price}
                  </li>
                  <li className="list-inline-item">
                    <span className="flaticon-gear me-2" />
                    {motorcycle.gear}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CarItems;
