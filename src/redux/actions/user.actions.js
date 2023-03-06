import { types } from "../types";

export const addUser = ({ name, firstLastname, secondLastname, id, age, gender, address, phone, email, maritalStatus, children, birthday }) => ({
    type: types.addUser,
    payload: { name, firstLastname, secondLastname, id, age, gender, address, phone, email, maritalStatus, children, birthday },
  });
  