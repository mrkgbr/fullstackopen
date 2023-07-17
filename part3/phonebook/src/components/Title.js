const Title = ({ text, tag }) => {
  if (tag === "h2") {
    return <h2>{text}</h2>;
  }
  return <h3>{text}</h3>;
};

export default Title;
