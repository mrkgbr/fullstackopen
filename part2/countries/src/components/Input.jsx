import PropTypes from "prop-types";

const Input = ({ type, value, handleChange }) => {
  return <input type={type} value={value} onChange={handleChange} />;
};

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

export { Input };
