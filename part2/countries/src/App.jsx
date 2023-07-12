import { useState, useEffect } from "react";
import countriesService from "./services/countries";

import "./App.css";
import { Input } from "./components/Input";
import { Filtered } from "./components/Filtered";

function App() {
  const [filter, setFilter] = useState("");
  const [countries, setCountries] = useState(null);
  const [filtered, setFiltered] = useState(null);

  // INITIALIZE APP
  useEffect(() => {
    countriesService.getAll().then((initialCountries) => {
      setCountries(initialCountries);
    });
  }, []);

  // Create a filtered list of countries the countries when filter changes
  useEffect(() => {
    if (!countries) return;
    if (filter === "") {
      setFiltered(null);
      return;
    }
    console.log("set list");
    const list = countries.filter((country) =>
      country.name.common.toLowerCase().includes(filter.toLowerCase())
    );
    setFiltered(list);
  }, [filter, countries]);

  const handleFilterChange = (event) => {
    const newFilter = event.target.value;
    setFilter(newFilter);
  };

  const handleShow = (country) => {
    const newFilter = country;
    setFilter(newFilter);
  };

  if (!countries) return null;
  return (
    <>
      find countries{" "}
      <Input type="text" value={filter} handleChange={handleFilterChange} />
      <Filtered filtered={filtered} handleClick={handleShow} />
    </>
  );
}

export default App;
