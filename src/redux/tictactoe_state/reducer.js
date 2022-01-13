import { ADD_MOVES } from "./types";

const initialState = {
  playerOneMoves: [],
  playerTwoMoves: [],
  turnFlag: true,
  winner: false,
  draw: false,
};

const tictactoe_Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVES:
      if (state.turnFlag) {
        return {
          ...state,
          playerOneMoves: [...state.playerOneMoves, action.payload],
          turnFlag: !state.turnFlag,
        };
      } else {
        return {
          ...state,
          playerTwoMoves: [...state.playerTwoMoves, action.payload],
          turnFlag: !state.turnFlag,
        };
      }
    default:
      return state;
  }
};

export default tictactoe_Reducer;
