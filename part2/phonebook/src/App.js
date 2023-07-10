import { useState, useEffect } from "react";
import Form from "./components/Form";
import Numbers from "./components/Numbers";
import Title from "./components/Title";
import { Filter } from "./components/Filter";
import axios from "axios";
import numberService from "./services/numbers";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    console.log("effect");
    // axios.get("http://localhost:3001/persons").then((response) => {
    //   console.log("promise fulfilled");
    //   const data = response.data;
    //   setPersons(data);
    //   setFilteredList(data);
    // });

    numberService.getAll().then((initialNumbers) => {
      setPersons(initialNumbers);
      setFilteredList(initialNumbers);
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

  const handleUpdate = (checkName) => {
    const number = persons.find((number) => number.id === checkName.id);
    const changedNumber = { ...number, number: newNumber };
    numberService.update(checkName.id, changedNumber).then((returnedNumber) => {
      const newPersons = persons.map((number) =>
        number.id !== checkName.id ? number : returnedNumber
      );
      setPersons(newPersons);
      setFilteredList(newPersons);
      setNewName("");
      setNewNumber("");
    });
  };

  const handleAdd = () => {
    const newObject = {
      name: newName,
      number: newNumber,
    };

    numberService.create(newObject).then((returnedNumber) => {
      const newPersons = persons.concat(returnedNumber);
      setPersons(newPersons);
      setFilteredList(newPersons);
      setNewName("");
      setNewNumber("");
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const checkName = persons.find(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );

    if (checkName) {
      if (
        window.confirm(
          `${checkName.name} is already added to phonebook, replace old number with a new?`
        )
      ) {
        handleUpdate(checkName);
        return;
      } else {
        return;
      }
    }

    handleAdd();
  };

  const handleRemove = (name, id) => {
    if (window.confirm(`Delete ${name}?`)) {
      numberService
        .remove(id)
        .then((returnedNumber) => {
          const newPersons = returnedNumber;
          setPersons(newPersons);
          setFilteredList(newPersons);
        })
        .catch((error) => {
          alert(`the note '${name}' was already deleted from server`);
        });
    }
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
      <Numbers persons={filteredList} handleRemove={handleRemove} />
    </div>
  );
};

export default App;
