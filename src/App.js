import { useEffect, useReducer } from "react";
import { initialState, actionReducer } from "./gameReducer";
import Header from "./components/header/Header";
import ScoresSection from "./components/playground/ScoresSection";
import PlaygroundSection from "./components/playground/PlaygroundSection";
import FooterSection from "./components/footer/FooterSection";
import { getMachineWeightedDraw } from "./utils/gameUtils";

function App() {
  const [state, dispatchAction] = useReducer(actionReducer, initialState);
  const {
    isHumanPlaying,
    isMachinePlaying,
    scoreHuman,
    scoreMachine,
    preferenceMachine,
    moveHuman,
    moveMachine,
    movesCount,
    roundWinner,
    message,
    finished,
    gameWinner,
  } = state;

  function resetHandler() {
    dispatchAction({ type: "RESET_GAME" });
  }

  function clickPawnHandler(pawnType) {
    //console.log("CLICK HUMAN MOVE");
    dispatchAction({ type: "HUMAN_MOVE", value: pawnType });
    //! this sets:
    //! 1) moveHuman to a truthy value
    //! 2) isHumanPlaying to true
    //! 3) message to a falsy value
  }

  useEffect(() => {
    if (!preferenceMachine) {
      dispatchAction({ type: "RESET_GAME" });
    }
  }, [preferenceMachine]);

  useEffect(() => {
    if (moveHuman) {
      //! when moveHuman changes and is truthy, triggers this side effect
      const timeout = setTimeout(() => {
        //console.log("TIMEOUT 1 --> MOVING MACHINE");
        const randomPawn = getMachineWeightedDraw(preferenceMachine);
        dispatchAction({ type: "MACHINE_MOVE", value: randomPawn });
        //! this sets:
        //! 1) moveMachine to a truthy value
        //! 2) isMachinePlaying to true
      }, 1500);
      return () => {
        //console.log("TIMEOUT 1 --> CLEANUP");
        clearTimeout(timeout);
      };
    } else return;
  }, [moveHuman, preferenceMachine]);

  useEffect(() => {
    if (moveMachine) {
      //! this side effect is triggered when moveMachine changes and is truthy
      const timeout = setTimeout(() => {
        //console.log("TIMEOUT 2 --> GET WINNER");
        dispatchAction({ type: "GET_WINNER" });
        //! this sets:
        //! 1) roundWinner to a truthy value
      }, 2000);
      return () => {
        //console.log("TIMEOUT 2 --> CLEANUP");
        clearTimeout(timeout);
      };
    } else return;
  }, [moveMachine]);

  useEffect(() => {
    if (roundWinner) {
      //! this side effect is triggered when roundWinner changes and it is truthy
      const timeout = setTimeout(() => {
        //console.log("TIMEOUT 3 --> END ROUND");
        dispatchAction({ type: "END_ROUND" });
        //! this sets:
        //! 1) message to a truthy value (it was set to null with action HUMAN_MOVE)
        //! 2) isHumanPlaying and isMachinePlaying to false
        //! 3) moveHuman and moveMachine to a falsy value
        //! 4) movesCount is increased by 1
        //! 5) depending on roundWinner, the scoreHuman and scoreMachine is increased, decreased or is unchanged
      }, 1000);
      return () => {
        //console.log("TIMEOUT 3 --> CLEANUP");
        clearTimeout(timeout);
      };
    } else return;
  }, [roundWinner]);

  useEffect(() => {
    if (movesCount === 5) {
      dispatchAction({
        type: "FINISH_GAME",
      });
    }
  }, [movesCount]);

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
          roundWinner={roundWinner}
        />
        <FooterSection gameWinner={gameWinner} finished={finished} />
      </main>
    </>
  );
}

export default App;
