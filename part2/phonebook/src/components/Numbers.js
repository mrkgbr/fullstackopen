const Numbers = ({ persons, handleRemove }) => {
  return (
    <>
      {persons.map((person) => (
        <p key={person.name}>
          {person.name} {person.number}{" "}
          <button onClick={() => handleRemove(person.name, person.id)}>
            delete
          </button>
        </p>
      ))}
    </>
  );
};

export default Numbers;
