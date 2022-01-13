import tictactoe_Reducer from "./tictactoe_state/reducer";
import { createStore } from "redux";

const store = createStore(tictactoe_Reducer);

export default store;
