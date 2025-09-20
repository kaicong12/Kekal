import styles from "./Form.module.css";

const BusinessHours = () => {
  return (
    <div className={`business_hours ${styles.businessHours}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h4 className="mb20 text-center">Business Hours</h4>
          </div>
        </div>
        <div className="hours_list">
          <div className="row">
            <div className="col-md-6">
              <ul className="list-unstyled">
                <li>
                  <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM
                </li>
                <li>
                  <strong>Saturday:</strong> 9:00 AM - 5:00 PM
                </li>
                <li>
                  <strong>Sunday:</strong> 10:00 AM - 4:00 PM
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <div className="info-icon" style={{ display: "flex" }}>
                <i
                  className="fas fa-info-circle"
                  style={{ paddingRight: "10px", marginTop: "3px" }}
                ></i>
                <p className="text-muted">
                  We&apos;re closed on public holidays. For urgent matters,
                  please WhatsApp us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessHours;
