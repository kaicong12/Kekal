const ListGridFilter = ({ label, sortOptions, selectedSortIdx, onFilterOptionChange}) => {

  const selectOptions = sortOptions.map((option, index) => (
    <option key={index} value={index}>{option}</option>
  ));

  return (
    <div className="listing_filter_row db-767">
      <div className="col-md-8">
        <div className="page_control_shorting right_area text-end tac-xsd">
          <ul style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
            <li className="list-inline-item short_by_text listone">{label}</li>
            <li className="list-inline-item listwo">
              <select 
                className="form-select show-tick" 
                onChange={onFilterOptionChange}
                value={sortOptions[selectedSortIdx]}
                style={{ width: '300px' }}
              >{selectOptions}</select>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ListGridFilter;
