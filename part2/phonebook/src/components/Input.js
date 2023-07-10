const Input = ({ type, placeholder, value, handleChange }) => {
  return (
    <input
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export { Input };
