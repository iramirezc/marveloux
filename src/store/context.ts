import { createContext } from "react";
import { initialState } from "./state";
import type { Action } from "./actions";

export const AppContext = createContext(initialState);

export const AppDispatchContext = createContext<React.Dispatch<Action>>(
  () => {}
);
