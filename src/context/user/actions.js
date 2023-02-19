export const actions = {
  SET_USER: "setUser",
  REMOVE_USER: "removeUser",
};

export const setUser = (user) => {
  return {
    type: actions.SET_USER,
    user,
  };
};

export const removeUser = () => {
  return {
    type: actions.REMOVE_USER,
  };
};
