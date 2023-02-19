import { actions } from "./actions";

export const initialState = {
  isLoggedIn: false,
  user: {},
  birhtdate: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_USER: {
      return {
        ...state,
        isLoggedIn: true,
        user: action.user,
      };
    }
    case actions.REMOVE_USER: {
      return {
        ...state,
        isLoggedIn: false,
        user: {},
      };
    }
    default:
      return state;
  }
};
