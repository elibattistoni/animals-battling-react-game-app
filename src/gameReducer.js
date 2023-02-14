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
      message: "Play!",
      finished: false,
      gameWinner: null,
    };
  }

  if (action.type === "HUMAN_MOVE") {
    return { ...state, ...{ isHumanPlaying: true, moveHuman: action.value } };
  }

  if (action.type === "MACHINE_MOVE") {
    return {
      ...state,
      ...{ isMachinePlaying: true, moveMachine: action.value },
    };
  }

  if (action.type === "GET_WINNER_ROUND") {
    const winner = determineWinner(state.moveHuman, state.moveMachine);
    if (winner === 0) {
      return {
        ...state,
        ...{
          isHumanPlaying: false,
          isMachinePlaying: false,
          moveHuman: null,
          moveMachine: null,
          movesCount: state.movesCount + 1,
          message: "No one wins this round!",
        },
      };
    } else if (winner === 11) {
      return {
        ...state,
        ...{
          isHumanPlaying: false,
          isMachinePlaying: false,
          moveHuman: null,
          moveMachine: null,
          movesCount: state.movesCount + 1,
          scoreMachine: state.scoreMachine + 1,
          scoreHuman: state.scoreHuman - 1,
          message: "Machine wins this round!",
        },
      };
    } else if (winner === 22) {
      return {
        ...state,
        ...{
          isHumanPlaying: false,
          isMachinePlaying: false,
          moveHuman: null,
          moveMachine: null,
          movesCount: state.movesCount + 1,
          scoreHuman: state.scoreHuman + 1,
          scoreMachine: state.scoreMachine - 1,
          message: "Human wins this round!",
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
