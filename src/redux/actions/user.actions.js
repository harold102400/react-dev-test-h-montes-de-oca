import { types } from "../types";

export const addUser = ({ name, primerApellido, segundoApellido, id, edad, genero, direccion, telefono, correo, estadoCivil, hijos, nacimiento }) => ({
    type: types.addUser,
    payload: { name, primerApellido, segundoApellido, id, edad, genero, direccion, telefono, correo, estadoCivil, hijos, nacimiento },
  });
  