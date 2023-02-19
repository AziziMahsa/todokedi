import { useContext } from "react";
import * as actions from "./actions";
import context from "./context";

function useUser() {
  const { state, dispatch } = useContext(context);
  return Object.keys(actions).reduce(
    (cur, name) => {
      const now = actions[name];
      if (typeof now === "function")
        cur[name] = (...args) => dispatch(now(...args));
      return cur;
    },
    { state }
  );
}
export default useUser;
