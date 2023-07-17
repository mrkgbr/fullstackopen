/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { Input } from "./Input";

const Form = ({
  handleNameChange,
  handleNumberChange,
  handleSubmit,
  newName,
  newNumber,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        name:{" "}
        <Input
          value={newName}
          type={"text"}
          placeholder={"John Doe..."}
          handleChange={handleNameChange}
        />
      </div>
      <div>
        number:{" "}
        <Input
          value={newNumber}
          type={"text"}
          placeholder={"..."}
          handleChange={handleNumberChange}
        />
        <p>Correct number formats: 12-1234567 or 123-12345678</p>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default Form;
