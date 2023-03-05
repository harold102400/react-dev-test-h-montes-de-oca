import { types } from "../types";

const initialState = {
  users: [],
};

export const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.addUser:
      return {
        users: [payload, ...state.users],
      };

    default:
      return state;
  }
};
