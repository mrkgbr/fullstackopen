import PropTypes from "prop-types";

const Country = ({ country }) => {
  const languages = Object.values(country.languages);
  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>capital {country.capital[0]}</p>
      <p>area {country.area}</p>
      <h3>languages:</h3>
      <ul>
        {languages.map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img src={country.flags.png} style={{ width: 200 }} />
    </div>
  );
};

Country.propTypes = {
  country: PropTypes.object,
};

const Filtered = ({ filtered, handleClick }) => {
  if (!filtered) return;
  if (filtered.length > 10)
    return <p>Too many matches, specify another filter</p>;
  if (filtered.length === 0) return <p>No matches, specify another filter</p>;
  if (filtered.length === 1) return <Country country={filtered[0]} />;
  return (
    <div>
      {filtered.map((country) => (
        <p key={country.name.common}>
          {country.name.common}{" "}
          <button onClick={() => handleClick(country.name.common)}>show</button>
        </p>
      ))}
    </div>
  );
};

Filtered.propTypes = {
  filtered: PropTypes.array,
  handleClick: PropTypes.func,
};

export { Filtered };
