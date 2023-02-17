import classes from "./MessagePlayground.module.css";

function MessagePlayground({ message }) {
  return (
    <div className={classes.message}>
      <span>{message}</span>
    </div>
  );
}

export default MessagePlayground;
