const Filter = ({ value, onChange }) => (
  <label className="Filter__label">
    Find contacts by name
    <input type="text" value={value} className="Filter" onChange={onChange} />
  </label>
);

export default Filter;