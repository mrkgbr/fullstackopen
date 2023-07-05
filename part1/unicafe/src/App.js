import { useState } from "react";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const StatisticLine = ({ text, value, unit }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>
        {value} {unit}
      </td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  if (all === 0) {
    return <p>No feedback given</p>;
  }
  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={all} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={positive} unit="%" />
      </tbody>
    </table>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [score, setScore] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  const increaseGood = () => {
    const newGood = good + 1;
    const newAll = all + 1;
    const newScore = score + 1;
    setGood(newGood);
    setAll(newAll);
    setScore(newScore);
    setAverage(newScore / newAll);
    setPositive((newGood / newAll) * 100);
  };

  const increaseNeutral = () => {
    const newAll = all + 1;
    setNeutral(neutral + 1);
    setAll(newAll);
    setAverage(score / newAll);
    setPositive((good / newAll) * 100);
  };

  const increaseBad = () => {
    const newAll = all + 1;
    const newScore = score - 1;
    setBad(bad + 1);
    setAll(newAll);
    setScore(newScore);
    setAverage(newScore / newAll);
    setPositive((good / newAll) * 100);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={increaseGood} text="good" />
      <Button handleClick={increaseNeutral} text="neutral" />
      <Button handleClick={increaseBad} text="bad" />
      <h1>statistics</h1>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </div>
  );
};

export default App;
