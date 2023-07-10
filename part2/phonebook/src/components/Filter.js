import { Input } from "./Input";

const Filter = ({ value, handleChange }) => {
  return (
    <div>
      filter shown with:{" "}
      <Input
        type="text"
        value={value}
        handleChange={handleChange}
        placeholder="Search..."
      />
    </div>
  );
};

export { Filter };
