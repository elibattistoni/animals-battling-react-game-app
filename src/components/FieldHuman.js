import { pawns } from "../utils/config";
import classes from "./Field.module.css";
import Pawn from "./Pawn";
import { useEffect, useState } from "react";

function FieldHuman({ isHumanPlaying, moveHuman, roundWinner }) {
  const [stateWinner, setStateWinner] = useState(null);

  let stylesPawn = `${classes["playground-pawn"]} ${
    classes["pawn-container"]
  } ${!isHumanPlaying ? "hidden" : ""}`;
  let stylesLabel = `${classes["label-human"]} ${
    !isHumanPlaying ? "hidden" : ""
  }`;

  useEffect(() => {
    setStateWinner(roundWinner);
  }, [roundWinner]);

  if (stateWinner === 11) {
    stylesPawn += `${classes["defeated-human"]}`;
    stylesLabel = "hidden";
  }

  return (
    <div className={stylesPawn}>
      <Pawn move={moveHuman} player="human" />
      <span className={stylesLabel}>{pawns[moveHuman]}</span>
    </div>
  );
}

export default FieldHuman;
