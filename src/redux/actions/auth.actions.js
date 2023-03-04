import { types } from "../types";

export const login = ({ username }) => ({
  type: types.login,
  payload: { username },
});

export const logout = () => ({
  type: types.logout,
});
