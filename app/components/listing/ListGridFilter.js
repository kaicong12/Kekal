import { useMemo } from 'react';
import Select from 'react-select';

const ListGridFilter = ({ label, options, selectedOption, onOptionChange }) => {
  const customStyles = {
    control: (provided) => ({
      ...provided,
      textAlign: 'center',
      width: '300px',
    }),
  };

  const reactSelectValue = useMemo(() => {
    if (!selectedOption) {
      return null
    }

    return {
      value: selectedOption,
      label: selectedOption
    }
  }, [selectedOption])

  return (
    <div className="listing_filter_row db-767">
      <div className="col-md-8">
        <div className="page_control_shorting right_area text-end tac-xsd">
          <ul
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
              paddingRight: "20px"
            }}
          >
            <li className="list-inline-item short_by_text listone">{label}</li>
            <li className="list-inline-item listwo">
              <Select
                value={reactSelectValue}
                onChange={onOptionChange}
                options={options}
                className="basic-single"
                classNamePrefix="select"
                isClearable={false} // Prevent clearing the selection (no cross icon)
                styles={customStyles}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ListGridFilter;
