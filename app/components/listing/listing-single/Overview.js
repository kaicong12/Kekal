const Overview = ({ productSpecification }) => {
  if (!productSpecification) return null;

  return (
    <ul className="list-group">
      {Object.entries(productSpecification)
        .sort()
        .flatMap(([specName, specValue]) => {
          if (typeof specValue === "object" && specValue !== null) {
            return Object.entries(specValue)
              .sort()
              .map(([nestedName, nestedValue]) => (
                <li
                  className="list-group-item d-flex justify-content-between align-items-start"
                  key={`${specName}-${nestedName}`}
                >
                  <div className="me-auto">
                    <div className="day">{nestedName}</div>
                  </div>
                  <span className="schedule">{String(nestedValue)}</span>
                </li>
              ));
          }
          return (
            <li
              className="list-group-item d-flex justify-content-between align-items-start"
              key={specName}
            >
              <div className="me-auto">
                <div className="day">{specName}</div>
              </div>
              <span className="schedule">{String(specValue)}</span>
            </li>
          );
        })}
    </ul>
  );
};

export default Overview;
