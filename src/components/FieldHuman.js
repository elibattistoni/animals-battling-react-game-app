import { pawns } from "../utils/config";
import classes from "./FieldHuman.module.css";
import { ReactComponent as Ankylosaurus } from "./ankylosaurus.svg";
import { ReactComponent as Allosaurus } from "./allosaurus.svg";
import { ReactComponent as Diplodocus } from "./diplodocus.svg";
import { useEffect, useState } from "react";

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
    default:
      svgImage = <div>IMAGE NOT FOUND</div>;
      break;
  }

  return svgImage;
}

function FieldHuman({ isHumanPlaying, moveHuman, roundWinner }) {
  const [stateWinner, setStateWinner] = useState(null);

  let stylesPawn = `playground-pawn ${classes["pawn-container"]} ${
    !isHumanPlaying ? "hidden" : ""
  }`;
  let stylesLabel = `${classes.label} ${!isHumanPlaying ? "hidden" : ""}`;

  useEffect(() => {
    setStateWinner(roundWinner);
  }, [roundWinner]);

  if (stateWinner === 11) {
    stylesPawn += `${classes.defeated}`;
    stylesLabel = "hidden";
  }

  return (
    <div className={stylesPawn}>
      <HumanPawn moveHuman={moveHuman} />
      <span className={stylesLabel}>{pawns[moveHuman]}</span>
    </div>
  );
}

export default FieldHuman;
