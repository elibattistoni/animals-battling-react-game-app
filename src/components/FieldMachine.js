import { pawns } from "../utils/config";
import classes from "./FieldMachine.module.css";
import { ReactComponent as Ankylosaurus } from "./ankylosaurus.svg";
import { ReactComponent as Allosaurus } from "./allosaurus.svg";
import { ReactComponent as Diplodocus } from "./diplodocus.svg";

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
  }

  return svgImage;
}

function FieldMachine({ isMachinePlaying, moveMachine, isHumanPlaying }) {
  //! define content of the playground
  let contentMachineField;

  //! define the styles
  let styles = `${!isHumanPlaying ? "hidden" : ""}`;

  if (isMachinePlaying) {
    contentMachineField = (
      <div className={classes["pawn-container"]}>
        <MachinePawn moveMachine={moveMachine} />
        <span className={classes.label}>{pawns[moveMachine]}</span>
      </div>
    );
    styles = `${styles} playground-pawn`;
  } else {
    styles = `${styles} ${isHumanPlaying ? classes.suspense : ""}`;
    contentMachineField = <Loader />;
  }

  return <div className={styles}>{contentMachineField}</div>;
}

export default FieldMachine;
