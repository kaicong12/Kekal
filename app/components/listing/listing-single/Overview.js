const Overview = ({ productSpecification }) => {
  return (
    <ul className="list-group">
      {
        Object.entries(productSpecification).sort().map(([specName, specValue]) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-start"
            key={specName}
          >
            <div className="me-auto">
              <div className="day">{specName}</div>
            </div>
            <span className="schedule">{specValue}</span>
          </li>
        ))
      }
    </ul>
  );
};

export default Overview;
