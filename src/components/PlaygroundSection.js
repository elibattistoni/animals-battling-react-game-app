import { pawns } from "../utils/config";
import Pawn from "./Pawn";

function PlaygroundSection({
  isHumanPlaying,
  isMachinePlaying,
  moveHuman,
  moveMachine,
  message,
  finished,
  movePawn,
}) {
  let contentPlayground;
  if (!isHumanPlaying && !isMachinePlaying) {
    contentPlayground = (
      <div className="message">
        <span>{message}</span>
      </div>
    );
  } else {
    const stylesMachine = `${
      !isMachinePlaying && isHumanPlaying
        ? "suspense"
        : "playground-pawn-machine"
    } ${!isHumanPlaying ? "hidden" : ""}`;

    const stylesHuman = `playground-pawn-human ${
      !isHumanPlaying ? "hidden" : ""
    }`;

    contentPlayground = (
      <div className="grid grid__two-cols board">
        <div className={stylesMachine}>
          {isMachinePlaying ? (
            pawns[moveMachine]
          ) : (
            <span className="loader">...</span>
          )}
        </div>
        <div className={stylesHuman}>{pawns[moveHuman]}</div>
      </div>
    );
  }

  return (
    <section className="grid play-box">
      <div className="player-machine">
        <Pawn type={1} />
        <Pawn type={2} />
        <Pawn type={3} />
      </div>
      <div className="playground-out">
        <div className="playground-in">{contentPlayground}</div>
      </div>
      <div className="player-human">
        <Pawn
          type={1}
          player="human"
          movePawn={movePawn}
          toDisable={isHumanPlaying || finished}
        />
        <Pawn
          type={2}
          player="human"
          movePawn={movePawn}
          toDisable={isHumanPlaying || finished}
        />
        <Pawn
          type={3}
          player="human"
          movePawn={movePawn}
          toDisable={isHumanPlaying || finished}
        />
      </div>
    </section>
  );
}

export default PlaygroundSection;
