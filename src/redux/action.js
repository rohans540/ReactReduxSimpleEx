import { INC, DEC, RESET } from "./constants";

export default function inCounter() {
  return {
    type: INC
  };
}

export function deCounter() {
  return {
    type: DEC
  };
}

export function resetCounter() {
  return {
    type: RESET
  };
}
