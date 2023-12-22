const ServiceHours = () => {
  const days = [
    { day: "Sunday", schedule: "9:00 - 19:00" },
    { day: "Monday", schedule: "9:00 - 19:00" },
    { day: "Tuesday", schedule: "9:00 - 19:00" },
    { day: "Wednesday", schedule: "9:00 - 19:00" },
    { day: "Thursday", schedule: "9:00 - 19:00" },
    { day: "Friday", schedule: "Closed" },
    { day: "Saturday", schedule: "9:00 - 19:00" },
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
