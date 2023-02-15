import classes from "./FieldHuman.module.css";

import { pawns } from "../utils/config";
import { ReactComponent as Ankylosaurus } from "./ankylosaurus.svg";
import { ReactComponent as Allosaurus } from "./allosaurus.svg";
import { ReactComponent as Diplodocus } from "./diplodocus.svg";

function HumanPawn({ moveHuman }) {
  let svgImage;
  switch (moveHuman) {
    case 1:
      svgImage = <Allosaurus className={classes.dyno} />;
      break;
    case 2:
      svgImage = <Ankylosaurus className={classes.dyno} />;
      break;
    case 3:
      svgImage = <Diplodocus className={classes.dyno} />;
      break;
  }

  return svgImage;
}

function FieldHuman({ isHumanPlaying, moveHuman }) {
  const styles = `playground-pawn ${!isHumanPlaying ? "hidden" : ""} ${
    classes["pawn-container"]
  }`;

  return (
    <div className={styles}>
      <HumanPawn moveHuman={moveHuman} />
      <span className={classes.label}>{pawns[moveHuman]}</span>
    </div>
  );
}

export default FieldHuman;
