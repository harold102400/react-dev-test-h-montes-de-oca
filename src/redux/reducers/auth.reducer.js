import { types } from "../types";

const initialState = {
  username: null,
  logged: false,
};

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.login:
      return { username: payload.username, logged: true };

    case types.logout:
      return initialState;

    default:
      return state;
  }
};

