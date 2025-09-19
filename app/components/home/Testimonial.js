import Image from "next/image";

const Testimonial = () => {
  const testimonialsData = [
    {
      id: "1",
      name: "Rajesh Kumar",
      role: "Professional Rider",
      imageSrc: "/images/testimonial/1.jpg",
      quote:
        "As a professional delivery rider, I depend on my motorcycle daily. This shop has kept my Honda Wave running perfectly for over 3 years. Their maintenance service is exceptional and they always use genuine parts. The team understands the demands of commercial riding!",
    },
    {
      id: "2",
      name: "Chen Siew Fong",
      role: "Motorcycle Collector",
      imageSrc: "/images/testimonial/2.jpg",
      quote:
        "I own several vintage motorcycles and finding the right parts can be challenging. This shop has an incredible network and always manages to source exactly what I need. Their expertise with classic bikes is unmatched - they've restored my 1985 Kawasaki Ninja to perfection!",
    },
    {
      id: "3",
      name: "Sharifah Amina",
      role: "Adventure Rider",
      imageSrc: "/images/testimonial/3.jpg",
      quote:
        "Before my long-distance touring trips, I always bring my BMW GS here for a complete check-up. Their attention to detail gives me confidence on the road. They've equipped my bike with the best touring accessories and their advice on gear selection is invaluable for adventure riding!",
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
