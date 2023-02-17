import FieldMachine from "./FieldMachine";
import FieldHuman from "./FieldHuman";
import MessagePlayground from "./MessagePlayground";
import PawnButton from "../pawns/PawnButton";

function PlaygroundSection({
  isHumanPlaying,
  isMachinePlaying,
  moveHuman,
  moveMachine,
  message,
  finished,
  movePawn,
  roundWinner,
}) {
  let contentPlayground;

  if (message && !isHumanPlaying && !isMachinePlaying) {
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
          roundWinner={roundWinner}
        />
        <FieldHuman
          isHumanPlaying={isHumanPlaying}
          moveHuman={moveHuman}
          roundWinner={roundWinner}
        />
      </div>
    );
  }
  return (
    <section className="grid play-box">
      <div className="player-machine">
        <PawnButton type={1} />
        <PawnButton type={2} />
        <PawnButton type={3} />
      </div>
      <div className="playground-out">
        <div className="playground-in">{contentPlayground}</div>
      </div>
      <div className="player-human">
        <PawnButton
          type={1}
          player="human"
          movePawn={movePawn}
          toDisable={isHumanPlaying || finished}
        />
        <PawnButton
          type={2}
          player="human"
          movePawn={movePawn}
          toDisable={isHumanPlaying || finished}
        />
        <PawnButton
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
