"use client";
import { createContext, useEffect, useReducer } from "react";
import { reducer, initialState } from "./reducer";
const context = createContext();
export const initializer = (initialValue = initialState) => {
  if (typeof window !== "undefined")
    return JSON.parse(localStorage.getItem("user")) || initialValue;

  return initialValue;
};
export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState, initializer);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state));
  }, [state]);

  return (
    <context.Provider value={{ state, dispatch }}>{children}</context.Provider>
  );
};

export default context;
