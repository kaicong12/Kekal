import InitialsAvatar from "@/app/components/common/InitialsAvatar";
import StarRating from "@/app/components/common/StarRating";
import reviewsData from "@/app/data/testimonials.json";

const Testimonial = () => {
  const testimonialsData = reviewsData.reviews;

  return (
    <>
      <div
        className="home2_testimonial_tabs"
        data-aos="fade-in"
        data-aos-delay="100"
      >
        <div className="tab-content" id="pills-tabContent2">
          {testimonialsData.map((testimonial, i) => (
            <div
              key={i}
              className={`tab-pane fade ${i === 0 ? "show active" : ""}`}
              id={`pills-${i}`}
              role="tabpanel"
              aria-labelledby={`pills-${i}-tab`}
            >
              <div className="testimonial_post_home2 text-center">
                <div className="details">
                  <div className="mb15">
                    <StarRating rating={testimonial.rating} />
                  </div>
                  <p lang={testimonial.languageCode}>{testimonial.text}</p>
                  <a
                    href={testimonial.reviewUri || reviewsData.googleMapsUri}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      fontSize: 13,
                      color: "#6b7280",
                    }}
                  >
                    <span className="fab fa-google" /> Posted on Google
                    {testimonial.relativeTime
                      ? ` · ${testimonial.relativeTime}`
                      : ""}
                  </a>
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
          {testimonialsData.map((testimonial, i) => (
            <li className="nav-item" role="presentation" key={i}>
              <a
                className={`nav-link ${i === 0 ? "active" : ""}`}
                id={`pills-${i}-tab`}
                data-bs-toggle="pill"
                href={`#pills-${i}`}
                role="tab"
                aria-controls={`pills-${i}`}
                aria-selected={i === 0 ? "true" : "false"}
              >
                <div
                  className="thumb d-inline-flex"
                  style={{ alignItems: "center", gap: 16, textAlign: "left" }}
                >
                  <InitialsAvatar
                    name={testimonial.author}
                    initials={testimonial.initials}
                  />
                  <h4 className="title" style={{ margin: 0 }}>
                    {testimonial.author}
                    <span style={{ display: "block", marginTop: 4 }}>
                      <small>{testimonial.relativeTime}</small>
                    </span>
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
