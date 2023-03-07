import { AddUserAction } from '../../interfaces/AddUserAction';
import { User } from '../../interfaces/User';
import { UserState } from '../../interfaces/UserState';
import { types } from '../types';

const initialState = {
  users: [
    {
      user: '',
      email: '',
    },
  ],
};

export const userReducer = (
  state = initialState,
  action: AddUserAction
): UserState => {
  switch (action.type) {
    case types.addUser:
      return {
        users: [action.payload, ...state.users],
      };

    default:
      return state;
  }
};
