import { setMachinePreference, determineWinner } from "./utils/gameUtils";

export const initialState = {
  isHumanPlaying: false,
  isMachinePlaying: false,
  scoreHuman: 0,
  scoreMachine: 0,
  preferenceMachine: null,
  moveHuman: null,
  moveMachine: null,
  movesCount: 0,
  roundWinner: null,
  message: "Play!",
  finished: false,
  gameWinner: null,
};

export function actionReducer(state, action) {
  if (action.type === "RESET_GAME") {
    return {
      isHumanPlaying: false,
      isMachinePlaying: false,
      scoreHuman: 0,
      scoreMachine: 0,
      preferenceMachine: setMachinePreference(),
      moveHuman: null,
      moveMachine: null,
      movesCount: 0,
      roundWinner: null,
      message: "Play!",
      finished: false,
      gameWinner: null,
    };
  }

  if (action.type === "HUMAN_MOVE") {
    return {
      ...state,
      ...{ isHumanPlaying: true, moveHuman: action.value, message: null },
    };
  }

  if (action.type === "MACHINE_MOVE") {
    return {
      ...state,
      ...{ isMachinePlaying: true, moveMachine: action.value },
    };
  }

  if (action.type === "GET_WINNER") {
    const winner = determineWinner(state.moveHuman, state.moveMachine);
    return {
      ...state,
      ...{
        roundWinner: winner,
      },
    };
  }

  if (action.type === "END_ROUND") {
    const sharedState = {
      isHumanPlaying: false,
      isMachinePlaying: false,
      moveHuman: null,
      moveMachine: null,
      roundWinner: null,
    };
    if (state.roundWinner === 99) {
      return {
        ...state,
        ...sharedState,
        ...{
          message: "No one wins the round!",
          movesCount: state.movesCount + 1,
        },
      };
    } else if (state.roundWinner === 11) {
      return {
        ...state,
        ...sharedState,
        ...{
          message: "Machine wins the round!",
          movesCount: state.movesCount + 1,
          scoreMachine: state.scoreMachine + 1,
          scoreHuman: state.scoreHuman - 1,
        },
      };
    } else if (state.roundWinner === 22) {
      return {
        ...state,
        ...sharedState,
        ...{
          message: "Human wins the round!",
          movesCount: state.movesCount + 1,
          scoreHuman: state.scoreHuman + 1,
          scoreMachine: state.scoreMachine - 1,
        },
      };
    }
  }

  if (action.type === "FINISH_GAME") {
    let gameWinner;
    let messageWinner = "The winner is: ";
    if (state.scoreHuman > state.scoreMachine) {
      gameWinner = "human";
    } else if (state.scoreHuman < state.scoreMachine) {
      gameWinner = "machine";
    } else {
      gameWinner = "no one";
    }
    messageWinner = messageWinner + gameWinner.toUpperCase();

    return {
      ...state,
      ...{
        gameWinner: gameWinner,
        isHumanPlaying: false,
        isMachinePlaying: false,
        message: messageWinner,
        finished: true,
      },
    };
  }
}
