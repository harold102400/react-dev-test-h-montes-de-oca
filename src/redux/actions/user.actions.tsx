import { AddUserAction } from '../../interfaces/AddUserAction';
import { User } from '../../interfaces/User';
import { types } from '../types';

export const addUser = (user: User): AddUserAction => ({
  type: types.addUser,
  payload: user,
});