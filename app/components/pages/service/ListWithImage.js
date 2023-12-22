import Image from "next/image";

const ListWithImage = () => {
    const serviceItems = [
        { text: "General Motorcycle Repair", link: "#" },
        { text: "Preventative Motorcycle Maintenance", link: "#" },
        { text: "Insurance Claim Assistance", link: "#" },
        { text: "Battery Maintenance and Replacement", link: "#" },
        { text: "Performance Upgrades", link: "#" },
        { text: "Customizations and Modifications", link: "#" },
    ];

    return (
        <div className="row">
            <div className="col-lg-6 col-xl-5">
                <div className="service_include">
                    <h3 className="title">Premium Motorcycle Care and Expertise</h3>
                    <p className="para">
                    At Perniagaan Motor Kekal, we specialize in providing top-notch services for all types of motorcycles. Our experienced technicians are passionate about motorcycles and committed to ensuring your ride is always in excellent condition.
                    </p>
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="si_list">
                                <ul className="mb0 order_list list-style-check-circle check_theme_color">
                                    {serviceItems
                                        .slice(0, 5)
                                        .map((item, index) => (
                                            <li key={index}>
                                                <a href={item.link}>
                                                    {item.text}
                                                </a>
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        </div>
                        {/* End .col */}

                        <div className="col-lg-5">
                            <div className="si_list">
                                <ul className="mb0 order_list list-style-check-circle check_theme_color">
                                    {serviceItems
                                        .slice(5, 10)
                                        .map((item, index) => (
                                            <li key={index}>
                                                <a href={item.link}>
                                                    {item.text}
                                                </a>
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        </div>
                        {/* End .col */}
                    </div>
                    {/* End .row */}
                </div>
                {/* End service_include */}
            </div>
            {/* End col-6 */}

            <div className="col-lg-6 col-xl-6 offset-xl-1">
                <div className="service_thumb">
                    <Image
                        width={636}
                        height={667}
                        layout="responsive"
                        src="/images/service/1.jpg"
                        alt="1.jpg"
                    />
                </div>
            </div>
            {/* End col-6 */}
        </div>
    );
};

export default ListWithImage;
