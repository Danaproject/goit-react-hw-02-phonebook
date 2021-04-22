import './Filter.scss';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
  <label className="Filter__label">
    &#x1F50D; Search contacts by name
    <input type="text" value={value} className="Filter__input" onChange={onChange} />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;