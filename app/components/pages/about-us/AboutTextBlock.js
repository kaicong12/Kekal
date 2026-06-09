import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const AboutTextBlock = () => {
  const t = useTranslations("about");
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
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtb3RvcmN5Y2xlJTIwcmVwYWlyJTIwd29ya3Nob3B8ZW58MXx8fHwxNzU4Mjc1OTgxfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Motorcycle repair workshop"
          />
          <Image
            width={365}
            height={238}
            priority
            style={{ objectFit: "cover" }}
            className="img-fluid thumb2"
            src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtb3RvcmN5Y2xlJTIwc2hvcCUyMGRlYWxlcnNoaXB8ZW58MXx8fHwxNzU4Mjc1OTgxfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Motorcycle dealership showroom"
          />
        </div>
      </div>
      {/* End .col */}
      <div className="col-lg-5 offset-lg-1">
        <div className="about_content">
          <h2 className="title">{t("welcome")}</h2>
          <p className="mb30">{t("paragraph1")}</p>
          <p className="mb50">{t("paragraph2")}</p>
          <Link
            href="https://wa.me/60127126128?text=I'm%20interested%20in%20learning%20more%20about%20your%20services" // Replace 'yourphonenumber' with your actual phone number
            className="btn btn-thm about-btn"
            target="_blank"
          >
            {t("contactUs")}
          </Link>
        </div>
      </div>
      {/* End .col */}
    </>
  );
};

export default AboutTextBlock;
