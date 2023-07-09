import { useState } from "react";
import Form from "./components/Form";
import Numbers from "./components/Numbers";
import Title from "./components/Title";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const checkName = persons.find(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );
    if (checkName) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    const newObject = {
      name: newName,
    };
    setPersons(persons.concat(newObject));
    setNewName("");
  };

  return (
    <div>
      <Title />
      <Form
        handleNameChange={handleNameChange}
        handleSubmit={handleSubmit}
        newName={newName}
      />
      <Numbers persons={persons} />
    </div>
  );
};

export default App;
