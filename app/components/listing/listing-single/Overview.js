"use client";
import { useState } from "react";

const SECTION_ORDER = ["General", "Performance", "Chassis"];

const HIDDEN_KEYS = ["color available", "colour available", "color", "colour"];

const SpecTable = ({ specs }) => {
  if (!specs || typeof specs !== "object") return null;
  return (
    <ul className="list-group">
      {Object.entries(specs)
        .filter(([key]) => !HIDDEN_KEYS.includes(key.toLowerCase()))
        .sort()
        .map(([key, value]) => (
          <li
            className="list-group-item spec-row"
            key={key}
          >
            <span className="spec-label">{key}</span>
            <span className="spec-value">{String(value)}</span>
          </li>
        ))}
    </ul>
  );
};

const Overview = ({ productSpecification }) => {
  const [activeTab, setActiveTab] = useState(sections[0]);
  
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
