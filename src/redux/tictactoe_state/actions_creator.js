import { ADD_MOVES } from "./types";

export const add_moves = (move) => {
  return {
    type: ADD_MOVES,
    payload: move,
  };
};
