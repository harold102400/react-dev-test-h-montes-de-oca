import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useUserPagination } from "../hook/useUserPagination";

const Users = () => {
  const [search] = useSearchParams();
  const page = Number(search.get("page"));
  const { users, isFirtPage, isLastPage } = useUserPagination(page);

  return (
    <>
      <h1 className="mb-2">Usuarios</h1>
      <div >
        <table className="table table-striped table-bordered" style={{boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px'}}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre completo</th>
              <th>Correo electronico</th>
              <th>Genero</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>
                    {user.name} {user.firstLastname} {user.secondLastname}
                  </td>
                  <td>{user.email}</td>
                  <td style={{ textTransform: "capitalize" }}>{user.gender}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <nav>
          <ul className="pagination">
            <li className="page-item">
              <Link
                className="page-link p-2 mb-2 bg-primary text-light"
                to={`/users?page=${isFirtPage ? 0 : page - 1}`}
              >
                Previa
              </Link>
            </li>
            <li className="page-item">
              <Link
                className="page-link p-2 mb-2 bg-primary text-light"
                to={`/users?page=${isLastPage ? page : page + 1}`}
              >
                Siguiente
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Users;
