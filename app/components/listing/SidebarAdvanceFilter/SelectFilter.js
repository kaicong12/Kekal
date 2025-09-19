import { useState, useEffect } from "react";
import { fetchUniqueBrandSet } from "@/utils/db";

const SelectFilter = ({ onFilterChange }) => {
  const [selectedValues, setSelectedValues] = useState({});
  const [brandOptions, setBrandOptions] = useState([]);

  useEffect(() => {
    const fetchBrands = async () => {
      const uniqueBrandSet = await fetchUniqueBrandSet();
      setBrandOptions(Array.from(uniqueBrandSet));
    };
    fetchBrands();
  }, []);

  const selectOptions = [
    {
      label: "Condition",
      key: "condition",
      options: ["New", "Used", "Certified Pre-Owned"],
    },
    {
      label: "Select Makes",
      key: "brand",
      options: brandOptions,
    },
    {
      label: "Select Type",
      key: "type",
      options: ["Scooter", "Sport", "Cruiser", "Touring", "Off-Road"],
    },
    {
      label: "Year",
      key: "year",
      options: ["2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017"],
    },
  ];

  const handleSelectChange = (key, value) => {
    const newSelectedValues = {
      ...selectedValues,
      [key]: value === `Select ${key}` ? "" : value,
    };
    setSelectedValues(newSelectedValues);

    if (onFilterChange) {
      onFilterChange(newSelectedValues);
    }
  };

  return (
    <>
      {selectOptions.map((option, index) => (
        <li key={index}>
          <div className="search_option_two">
            <div className="candidate_revew_select">
              <div className="dropdown bootstrap-select w100 show-tick">
                <select
                  className="form-select dropdown-toggle w100 show-tick"
                  value={selectedValues[option.key] || option.label}
                  onChange={(e) =>
                    handleSelectChange(option.key, e.target.value)
                  }
                >
                  <option value="">{option.label}</option>
                  {option.options.map((value, optionIndex) => (
                    <option key={optionIndex} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </li>
      ))}
    </>
  );
};

export default SelectFilter;
