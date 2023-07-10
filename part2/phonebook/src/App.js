import { useState, useEffect } from "react";
import Form from "./components/Form";
import Numbers from "./components/Numbers";
import Title from "./components/Title";
import { Filter } from "./components/Filter";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("promise fulfilled");
      const data = response.data;
      setPersons(data);
      setFilteredList(data);
    });
  }, []);

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
