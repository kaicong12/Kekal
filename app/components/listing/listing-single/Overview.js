"use client";
import { useState } from "react";

const SECTION_ORDER = ["General", "Performance", "Chassis"];

const SpecTable = ({ specs }) => {
  if (!specs || typeof specs !== "object") return null;
  return (
    <ul className="list-group">
      {Object.entries(specs)
        .sort()
        .map(([key, value]) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-start"
            key={key}
          >
            <div className="me-auto">
              <div className="day">{key}</div>
            </div>
            <span className="schedule">{String(value)}</span>
          </li>
        ))}
    </ul>
  );
};

const Overview = ({ productSpecification }) => {
  if (!productSpecification) return null;

  const sections = SECTION_ORDER.filter(
    (s) =>
      productSpecification[s] &&
      typeof productSpecification[s] === "object"
  );

  // If no recognized sections, render flat list
  if (sections.length === 0) {
    return <SpecTable specs={productSpecification} />;
  }

  const [activeTab, setActiveTab] = useState(sections[0]);

  return (
    <div className="spec-tabs">
      <div className="spec-tabs-nav">
        {sections.map((section) => (
          <button
            key={section}
            className={`spec-tab-btn${activeTab === section ? " active" : ""}`}
            onClick={() => setActiveTab(section)}
            type="button"
          >
            {section}
          </button>
        ))}
      </div>
      <div className="spec-tabs-content">
        <SpecTable specs={productSpecification[activeTab]} />
      </div>
    </div>
  );
};

export default Overview;
