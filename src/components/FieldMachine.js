import { pawns } from "../utils/config";
import classes from "./FieldMachine.module.css";
import { ReactComponent as Ankylosaurus } from "./ankylosaurus.svg";
import { ReactComponent as Allosaurus } from "./allosaurus.svg";
import { ReactComponent as Diplodocus } from "./diplodocus.svg";
import { useEffect, useState } from "react";

function Loader() {
  return <span className={classes.loader}>...</span>;
}

function MachinePawn({ moveMachine }) {
  let svgImage;
  switch (moveMachine) {
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

function FieldMachine({
  isMachinePlaying,
  moveMachine,
  isHumanPlaying,
  roundWinner,
}) {
  const [stateWinner, setStateWinner] = useState(null);

  //! define the styles
  let stylesPawn = `${!isHumanPlaying ? "hidden" : ""}`;
  let stylesLabel = `${classes.label}`;

  useEffect(() => {
    setStateWinner(roundWinner);
  }, [roundWinner]);

  if (stateWinner === 22) {
    stylesPawn += `${classes.defeated}`;
    stylesLabel = "hidden";
  }

  //! define content of the playground
  let contentMachineField;
  if (isMachinePlaying) {
    contentMachineField = (
      <div className={classes["pawn-container"]}>
        <MachinePawn moveMachine={moveMachine} />
        <span className={stylesLabel}>{pawns[moveMachine]}</span>
      </div>
    );
    stylesPawn = `${stylesPawn} playground-pawn`;
  } else {
    stylesPawn = `${stylesPawn} ${isHumanPlaying ? classes.suspense : ""}`;
    contentMachineField = <Loader />;
  }

  return <div className={stylesPawn}>{contentMachineField}</div>;
}

export default FieldMachine;
