const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  const Header = (props) => {
    return <h1>{props.name}</h1>;
  };

  const Part = (props) => {
    return (
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    );
  };

  const Content = (props) => {
    return (
      <>
        {props.parts.map((value, index) => (
          <Part part={value} key={index} />
        ))}
      </>
    );
  };

  const Total = (props) => {
    const sum = props.total.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.exercises;
    }, 0);
    return <p>Number of exercises {sum}</p>;
  };

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total total={course.parts} />
    </div>
  );
};

export default App;
