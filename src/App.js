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
    winnerRound,
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
  }, [state.preferenceMachine]);

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
  }

  useEffect(() => {
    if (moveHuman) {
      const timeout = setTimeout(() => {
        console.log("TIMEOUT 1 --> HUMAN MOVED AND NOT NULL -- MOVING MACHINE");
        const randomPawn = getMachineWeightedDraw(state.preferenceMachine);
        dispatchAction({ type: "MACHINE_MOVE", value: randomPawn });
      }, 4000);
      return () => {
        console.log("TIMEOUT 1 --> CLEANUP");
        clearTimeout(timeout);
      };
    } else return;
  }, [moveHuman, state.preferenceMachine]);

  useEffect(() => {
    if (moveMachine) {
      const timeout = setTimeout(() => {
        console.log(
          "TIMEOUT 2 --> MACHINE MOVED AND NOT NULL -- GET WINNER ROUND"
        );
        dispatchAction({ type: "GET_WINNER_ROUND" });
      }, 4000);
      return () => {
        console.log("TIMEOUT 2 --> CLEANUP");
        clearTimeout(timeout);
      };
    } else return;
  }, [moveMachine]);

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
          winnerRound={winnerRound}
        />
        <FooterSection gameWinner={gameWinner} finished={finished} />
      </main>
    </>
  );
}

export default App;
