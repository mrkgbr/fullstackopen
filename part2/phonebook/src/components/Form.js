const Input = ({ type, text, value, handleChange }) => {
  return (
    <input
      value={value}
      type={type}
      placeholder={text}
      onChange={handleChange}
    />
  );
};

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
          text={"John Doe..."}
          handleChange={handleNameChange}
        />
      </div>
      <div>
        number:{" "}
        <Input
          value={newNumber}
          type={"text"}
          text={"00-00-0000000"}
          handleChange={handleNumberChange}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default Form;
