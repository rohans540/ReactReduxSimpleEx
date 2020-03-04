import { INC, DEC, RESET } from "./constants";

const initialState = {
  counter: 0
};

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INC:
      return {
        ...state,
        counter: state.counter < 20 ? state.counter + 1 : 0
      };
    case DEC:
      return {
        ...state,
        counter: state.counter > -20 ? state.counter - 1 : 0
      };
    case RESET:
      return {
        ...state,
        counter: 0
      };
    default:
      return {
        ...state
      };
  }
}
