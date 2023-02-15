import { useEffect, useReducer } from "react";
import { initialState, actionReducer } from "./gameReducer";
import Header from "./components/Header";
import ScoresSection from "./components/ScoresSection";
import PlaygroundSection from "./components/PlaygroundSection";
import FooterSection from "./components/FooterSection";
import { getMachineWeightedDraw } from "./utils/gameUtils";

function App() {
  const [state, dispatchAction] = useReducer(actionReducer, initialState);
  const {
    scoreHuman,
    scoreMachine,
    isHumanPlaying,
    isMachinePlaying,
    moveHuman,
    moveMachine,
    finished,
    gameWinner,
    message,
  } = state;

  useEffect(() => {
    if (!state.preferenceMachine) {
      dispatchAction({ type: "RESET_GAME" });
    }
  }, []);

  useEffect(() => {
    if (state.movesCount === 5) {
      dispatchAction({
        type: "FINISH_GAME",
      });
    }
  }, [state.movesCount]);

  function resetHandler() {
    dispatchAction({ type: "RESET_GAME" });
  }

  function clickPawnHandler(pawnType) {
    dispatchAction({ type: "HUMAN_MOVE", value: pawnType });
    setTimeout(() => {
      const randomPawn = getMachineWeightedDraw(state.preferenceMachine);
      dispatchAction({ type: "MACHINE_MOVE", value: randomPawn });

      setTimeout(() => {
        dispatchAction({ type: "GET_WINNER_ROUND" });
      }, 2000);
    }, 2000);
  }

  return (
    <>
      <Header resetGame={resetHandler} />
      <main className="players-table">
        <ScoresSection
          finished={finished}
          scoreHuman={scoreHuman}
          scoreMachine={scoreMachine}
        />
        <PlaygroundSection
          isHumanPlaying={isHumanPlaying}
          isMachinePlaying={isMachinePlaying}
          moveHuman={moveHuman}
          moveMachine={moveMachine}
          message={message}
          finished={finished}
          movePawn={clickPawnHandler}
        />
        <FooterSection gameWinner={gameWinner} finished={finished} />
      </main>
    </>
  );
}

export default App;
