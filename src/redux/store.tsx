import { legacy_createStore as createStore, combineReducers } from 'redux';
import { authReducer } from './reducers/auth.reducer';
import { userReducer } from './reducers/user.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
});

export const store = createStore(
  combineReducers({ auth: authReducer, user: userReducer })
);
export type RootState = ReturnType<typeof rootReducer>;
