import FieldMachine from "./FieldMachine";
import FieldHuman from "./FieldHuman";
import MessagePlayground from "./MessagePlayground";
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
    // ! show message if no one is playing
    contentPlayground = <MessagePlayground message={message} />;
  } else {
    //! show pawns depending on who is playing
    contentPlayground = (
      <div className="grid grid__two-cols board">
        <FieldMachine
          isMachinePlaying={isMachinePlaying}
          moveMachine={moveMachine}
          isHumanPlaying={isHumanPlaying}
        />
        <FieldHuman isHumanPlaying={isHumanPlaying} moveHuman={moveHuman} />
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
