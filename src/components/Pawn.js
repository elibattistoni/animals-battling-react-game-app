import classes from "./Pawn.module.css";
import { pawns } from "../utils/config";

function Pawn({ type, player = "machine", movePawn, toDisable }) {
  let styles = `${classes.pawn} ${classes[player]} ${
    toDisable ? classes.disabled : ""
  }`;

  let disableButton = true;

  if (player === "human" && !toDisable) {
    disableButton = false;
  }

  return (
    <button
      className={styles}
      onClick={() => movePawn(type)}
      disabled={disableButton}
    >
      {pawns[type]}
    </button>
  );
}

export default Pawn;
