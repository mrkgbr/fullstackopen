import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const anecdotesLength = anecdotes.length;
  const emptyVotes = Array(anecdotesLength).fill(0);

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState([...emptyVotes]);
  const [highestVote, setHighestVote] = useState(0);
  const [topAnecdote, setTopAnecdote] = useState(0);

  const Button = ({ handleClick, text }) => {
    return <button onClick={handleClick}>{text}</button>;
  };

  const random = () => {
    const randomNumber = Math.random() * anecdotes.length;
    const roundedNumber = Math.floor(randomNumber);
    return roundedNumber;
  };

  const nextAnecdote = () => {
    const index = random();
    setSelected(index);
  };

  const vote = () => {
    const copy = [...votes];
    const currentVote = copy[selected];
    const updatedVote = currentVote + 1;
    copy[selected] = updatedVote;
    setVotes(copy);
    if (updatedVote > highestVote) {
      setHighestVote(updatedVote);
      setTopAnecdote(selected);
    }
  };

  return (
    <>
      <h1>Anecdote of the day</h1>

      <div>{anecdotes[selected]}</div>
      <div>has {votes[selected]} votes </div>
      <Button handleClick={vote} text="vote" />
      <Button handleClick={nextAnecdote} text="next anecdote" />

      <h1>Anecdote with most votes</h1>
      <div>{anecdotes[topAnecdote]}</div>
      <div>has {votes[topAnecdote]} votes </div>
    </>
  );
};

export default App;
