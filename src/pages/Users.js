import React from "react";
import { useSelector } from "react-redux";

const Users = () => {
  /* const users = [
    {
      id: 1,
      nombreCompleto: "jose perez",
      correoElectronico: "jose@email.com",
      genero: "masculino",
    },

    {
      id: 2,
      nombreCompleto: "jose perez",
      correoElectronico: "jose@email.com",
      genero: "masculino",
    },

    {
      id: 3,
      nombreCompleto: "jose perez",
      correoElectronico: "jose@email.com",
      genero: "masculino",
    },

    {
      id: 4,
      nombreCompleto: "jose perez",
      correoElectronico: "jose@email.com",
      genero: "masculino",
    },

    {
      id: 5,
      nombreCompleto: "jose perez",
      correoElectronico: "jose@email.com",
      genero: "masculino",
    },
  ]; */
  const { users } = useSelector((state) => state.user)
  console.log(users)
 

  return (
    <>
    
    <h1 className="mb-2">Usuarios</h1>
    <div>
        <table className="table table-striped table-bordered">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nombre completo</th>
                <th>Correo electronico</th>
                <th>Genero</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map((user) => {
                    return console.log(user)
                })
            }
            </tbody>
    </table>
    </div>
    </>
  )
};

export default Users;
