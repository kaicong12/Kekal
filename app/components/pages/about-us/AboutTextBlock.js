import Image from "next/image";
import Link from "next/link";

const AboutTextBlock = () => {
  return (
    <>
      <div className="col-lg-6">
        <div className="about_thumb mb30-md">
          <Image
            width={636}
            height={667}
            priority
            style={{ objectFit: "cover" }}
            className="thumb1"
            src="/images/about/1.jpg"
            alt="1.jpg"
          />
          <Image
            width={365}
            height={238}
            priority
            style={{ objectFit: "cover" }}
            className="img-fluid thumb2"
            src="/images/about/2.jpg"
            alt="2.jpg"
          />
        </div>
      </div>
      {/* End .col */}
      <div className="col-lg-5 offset-lg-1">
        <div className="about_content">
          <h2 className="title">Welcome To Perniagaan Motor Kekal</h2>
          <p className="mb30">
            Perniagaan Motor Kekal is a renowned business based in Johor Bahru, Malaysia, celebrated for its dedication and passion for motorcycles. This business has been an integral part of the motorcycle community in <strong>Johor</strong> since its incorporation on <strong>July 13, 1992</strong>.
          </p>
          <p className="mb50">
            Perniagaan Motor Kekal operates as dealers, retailers, distributors, and repairers of various kinds of motorcycles, as well as auto spare parts and accessories. The business is particularly noted for its commitment to providing quality services and products, contributing to its status as a valued and reputable entity in the Johor motor industry​
          </p>
          <Link
            href="https://wa.me/60127126128?text=I'm%20interested%20in%20learning%20more%20about%20your%20services" // Replace 'yourphonenumber' with your actual phone number
            className="btn btn-thm about-btn"
            target="_blank"
          >
            Contact Us
          </Link>
        </div>
      </div>
      {/* End .col */}
    </>
  );
};

export default AboutTextBlock;
