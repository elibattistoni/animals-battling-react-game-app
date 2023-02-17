import classes from "./PawnButton.module.css";
import { pawns } from "../../utils/config";
import { ReactComponent as Ankylosaurus } from "./ankylosaurus.svg";
import { ReactComponent as Allosaurus } from "./allosaurus.svg";
import { ReactComponent as Diplodocus } from "./diplodocus.svg";

function PawnButton({ type, player = "machine", movePawn, toDisable }) {
  let styles = `${classes.pawn} ${classes[player]} ${
    toDisable ? classes.disabled : ""
  }`;

  let disableButton = true;
  if (player === "human" && !toDisable) {
    disableButton = false;
  }

  let svgImage;
  switch (type) {
    case 1:
      svgImage = (
        <Allosaurus
          className={`${classes.dyno} ${
            player === "human" ? classes["dyno-human"] : classes["dyno-machine"]
          }`}
        />
      );
      break;
    case 2:
      svgImage = (
        <Ankylosaurus
          className={`${classes.dyno} ${
            player === "human" ? classes["dyno-human"] : classes["dyno-machine"]
          }`}
        />
      );
      break;
    case 3:
      svgImage = (
        <Diplodocus
          className={`${classes.dyno} ${
            player === "human" ? classes["dyno-human"] : classes["dyno-machine"]
          }`}
        />
      );
      break;
    default:
      svgImage = null;
      break;
  }

  return (
    <button
      className={styles}
      onClick={() => movePawn(type)}
      disabled={disableButton}
    >
      {svgImage}
      {pawns[type]}
    </button>
  );
}

export default PawnButton;
