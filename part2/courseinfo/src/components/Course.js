// APP
const Courses = ({ courses }) => {
  return (
    <>
      {courses.map((course) => (
        <Course course={course} />
      ))}
    </>
  );
};

// COMPONENTS
const Title = () => {
  return <h1>Web Development curriculum</h1>;
};

const Course = ({ course }) => {
  return (
    <>
      <Title />
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
};

const Header = ({ name }) => {
  return <h2>{name}</h2>;
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  );
};

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};

const Total = ({ parts }) => {
  const total = parts.reduce(
    (accumulator, currentValue) => accumulator + currentValue.exercises,
    0
  );
  return <h3>total of {total} exercises</h3>;
};

export default Courses;
