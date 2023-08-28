import Image from "next/image";
import Link from "next/link";

const CarType = () => {
  const listings = [
    {
      imgSrc: "/images/listing/YamahaLogo.png",
      title: "Yamaha",
      numListings: "12 Listings",
      colClasses: "col-md-6 col-lg-4",
      delay: "100",
    },
    {
      imgSrc: "/images/listing/HondaLogo.png",
      title: "Honda",
      numListings: "59 Listings",
      colClasses: "col-md-6",
      delay: "200",
    },
    {
      imgSrc: "/images/listing/suzukiLogo.png",
      title: "Suzuki",
      numListings: "8912 Listings",
      colClasses: "col-md-6",
      delay: "300",
    },
    {
      imgSrc: "/images/listing/SYMLogo.png",
      title: "SUV",
      numListings: "775 Listings",
      colClasses: "col-md-6 col-lg-4",
      delay: "400",
    }
  ];

  return (
    <>
      {listings.map((listing, index) => (
        <div
          key={index}
          className={listing.colClasses}
          data-aos="fade"
          data-aos-delay={listing.delay}
        >
          <div className="explore_city">
            <div className="thumb">
              <Image
                width={450}
                height={303}
                style={{
                  objectFit: "contain",
                }}
                priority
                src={listing.imgSrc}
                alt={listing.title}
              />
            </div>
            <div className="details">
              <h4 className="title">
                <Link href="/listing-v1">{listing.title}</Link>
              </h4>
              <p>{listing.numListings}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CarType;
