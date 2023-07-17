const Notification = ({ message }) => {
  const errorStyle = {
    color: "red",
    backgroundColor: "lightgrey",
    fontSize: 20,
    borderStyle: "solid",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  };
  const normalStyle = {
    color: "green",
    backgroundColor: "lightgreen",
    fontSize: 20,
    borderStyle: "solid",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  };
  if (message === null) {
    return null;
  }

  const style = message.type === "error" ? errorStyle : normalStyle;

  return <div style={style}>{message.text}</div>;
};

export { Notification };
