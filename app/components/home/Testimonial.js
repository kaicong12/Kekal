import Image from "next/image";
import { useTranslations } from "next-intl";

const Testimonial = () => {
  const t = useTranslations("testimonials");
  const testimonialsData = [
    {
      id: "1",
      name: "Rajesh Kumar",
      role: t("rider1Role"),
      imageSrc: "/images/testimonial/avatar-rk.svg",
      quote: t("rider1Quote"),
    },
    {
      id: "2",
      name: "Chen Siew Fong",
      role: t("rider2Role"),
      imageSrc: "/images/testimonial/avatar-cs.svg",
      quote: t("rider2Quote"),
    },
    {
      id: "3",
      name: "Sharifah Amina",
      role: t("rider3Role"),
      imageSrc: "/images/testimonial/avatar-sa.svg",
      quote: t("rider3Quote"),
    },
  ];

  return (
    <>
      <div
        className="home2_testimonial_tabs"
        data-aos="fade-in"
        data-aos-delay="100"
      >
        <div className="tab-content" id="pills-tabContent2">
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`tab-pane fade ${
                testimonial.id === "2" ? "show active" : ""
              }`}
              id={`pills-${testimonial.id}`}
              role="tabpanel"
              aria-labelledby={`pills-${testimonial.id}-tab`}
            >
              <div className="testimonial_post_home2 text-center">
                <div className="details">
                  <p>{testimonial.quote}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* End tab-conntet */}

        <ul
          className="nav justify-content-center mb-3"
          id="pills-tab2"
          role="tablist"
        >
          {testimonialsData.map((testimonial) => (
            <li className="nav-item" role="presentation" key={testimonial.id}>
              <a
                className={`nav-link ${testimonial.id === "2" ? "active" : ""}`}
                id={`pills-${testimonial.id}-tab`}
                data-bs-toggle="pill"
                href={`#pills-${testimonial.id}`}
                role="tab"
                aria-controls={`pills-${testimonial.id}`}
                aria-selected={testimonial.id === "2" ? "true" : "false"}
              >
                <div className="thumb d-inline-flex">
                  <Image
                    width={70}
                    height={70}
                    priority
                    className="rounded-circle"
                    src={testimonial.imageSrc}
                    alt={testimonial.name}
                  />
                  <h4 className="title">
                    {testimonial.name}
                    <br />
                    <small>{testimonial.role}</small>
                  </h4>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Testimonial;
