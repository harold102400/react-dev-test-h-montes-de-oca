import { Action } from 'redux';
import { User } from './User';
import { types } from '../redux/types';

export interface AddUserAction extends Action<typeof types.addUser> {
  payload: User;
}
