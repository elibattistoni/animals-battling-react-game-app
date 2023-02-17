import { pawns } from "../utils/config";
import classes from "./Field.module.css";
import Pawn from "./Pawn";
import { useEffect, useState } from "react";

function Loader() {
  return <span className={classes.loader}>...</span>;
}

function FieldMachine({
  isMachinePlaying,
  moveMachine,
  isHumanPlaying,
  roundWinner,
}) {
  const [stateWinner, setStateWinner] = useState(null);

  //! define the styles
  let stylesPawn = `${!isHumanPlaying ? "hidden" : ""}`;
  let stylesLabel = `${classes["label-machine"]}`;

  useEffect(() => {
    setStateWinner(roundWinner);
  }, [roundWinner]);

  if (stateWinner === 22) {
    stylesPawn += `${classes["defeated-machine"]}`;
    stylesLabel = `${classes["fade-out"]}`;
  }

  if (stateWinner === 99) {
    stylesPawn += `${classes["fade-out"]}`;
    stylesLabel = `${classes["fade-out"]}`;
  }

  //! define content of the playground
  let contentMachineField;
  if (isMachinePlaying) {
    contentMachineField = (
      <div className={classes["pawn-container"]}>
        <Pawn move={moveMachine} player="machine" />
        <span className={stylesLabel}>{pawns[moveMachine]}</span>
      </div>
    );
    stylesPawn = `${stylesPawn} ${classes["playground-pawn"]}`;
  } else {
    stylesPawn = `${stylesPawn} ${isHumanPlaying ? classes.suspense : ""}`;
    contentMachineField = <Loader />;
  }

  return <div className={stylesPawn}>{contentMachineField}</div>;
}

export default FieldMachine;
