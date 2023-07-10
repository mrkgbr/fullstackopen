import { useState } from "react";
import Form from "./components/Form";
import Numbers from "./components/Numbers";
import Title from "./components/Title";
import { Filter } from "./components/Filter";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [filteredList, setFilteredList] = useState(persons);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    const newFilter = event.target.value;
    setFilter(newFilter);
    const newFilteredList = filterItems(newFilter);
    setFilteredList(newFilteredList);
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
      number: newNumber,
    };
    const newPersons = persons.concat(newObject);
    setPersons(newPersons);
    setFilteredList(newPersons);
    setNewName("");
    setNewNumber("");
  };

  const filterItems = (text) => {
    return persons.filter((el) =>
      el.name.toLowerCase().includes(text.toLowerCase())
    );
  };

  return (
    <div>
      <Title text="Phonebook" tag="h2" />
      <Filter value={filter} handleChange={handleFilterChange} />
      <Title text="add a new" />
      <Form
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        handleSubmit={handleSubmit}
        newName={newName}
        newNumber={newNumber}
      />
      <Title text="Numbers" />
      <Numbers persons={filteredList} />
    </div>
  );
};

export default App;
