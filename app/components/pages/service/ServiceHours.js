import { useTranslations } from "next-intl";

const ServiceHours = () => {
  const t = useTranslations("serviceHours");
  const days = [
    { day: t("sunday"), schedule: "9:00 - 19:00" },
    { day: t("monday"), schedule: "9:00 - 19:00" },
    { day: t("tuesday"), schedule: "9:00 - 19:00" },
    { day: t("wednesday"), schedule: "9:00 - 19:00" },
    { day: t("thursday"), schedule: "9:00 - 19:00" },
    { day: t("friday"), schedule: t("closed") },
    { day: t("saturday"), schedule: "9:00 - 19:00" },
  ];

  return (
    <ul className="list-group">
      {days.map((item, index) => (
        <li
          key={index}
          className="list-group-item d-flex justify-content-between align-items-start"
        >
          <div className="me-auto">
            <div className="day">{item.day}</div>
          </div>
          <span className="schedule">{item.schedule}</span>
        </li>
      ))}
    </ul>
  );
};

export default ServiceHours;
