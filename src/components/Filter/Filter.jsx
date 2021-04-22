import './Filter.scss';

const Filter = ({ value, onChange }) => (
  <label className="Filter__label">
    Find contacts by name
    <input type="text" value={value} className="Filter__input" onChange={onChange} />
  </label>
);

export default Filter;