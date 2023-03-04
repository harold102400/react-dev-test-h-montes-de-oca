const initialState = {
  users: [],
};

export const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case type.addUser:
      return {
        users: [payload, ...state.users],
      };

    default:
      return state;
  }
};
