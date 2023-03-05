import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../redux/actions/user.actions";
import "../styles/AddUser.css";

const AddUser = () => {
  const { users } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    dispatch(
      addUser({
        name: data.name,
        firstLastname: data.firstLastname,
        secondLastname: data.secondLastname,
        id: data.id,
        age: data.age,
        gender: data.gender,
        address: data.address,
        phone: data.phone,
        email: data.email,
        estadoCivil: data.estadoCivil,
        children: data.children,
        birthday: data.birthday,
      })
    );
    reset();
    navigate("/users");
  };
  return (
    <div className="form-container">
      <div className="d-flex align-items-center justify-content-center w-100">
        <form onSubmit={handleSubmit(onSubmit)} className="form-data">
          <h1 className="mb-3">Agregar Usuario</h1>
          {/* <div className='form-group mb-2 p-30'>
      <label className='form-label'>Nombres</label>
      <input className='form-control mb-2'type="text" name="name" {...register('name', {
          required: true,
          minLength: 2
      })} />
          <div>
            {errors.name?.type === 'required' && <span className='alert alert-danger'>El campo es requerido</span>}
            {errors.name?.type === 'minLength' && <span className='alert alert-danger'>El minimo de letras son 2</span>}
          </div> */}

          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="form-outline">
                <label className="form-label">Nombres</label>
                <input
                  type="text"
                  placeholder="Ingrese su nombre"
                  className="form-control"
                  {...register("name", {
                    required: true,
                    minLength: 2,
                  })}
                />

                <div>
                  {errors.name?.type === "required" && (
                    <span className="error-alert">El campo es requerido</span>
                  )}
                  {errors.name?.type === "minLength" && (
                    <span className="error-alert">
                      El minimo de letras son 2
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="form-outline">
                <label className="form-label mt-6">Primer apellido</label>
                <input
                  type="text"
                  placeholder="Ingrese su primer apellido"
                  className="form-control"
                  {...register("firstLastname", {
                    required: true,
                    minLength: 2,
                  })}
                />

                <div>
                  {errors.firstLastname?.type === "required" && (
                    <span className="error-alert">El campo es requerido</span>
                  )}
                  {errors.firstLastname?.type === "minLength" && (
                    <span className="error-alert">
                      El minimo de letras son 2
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="form-outline">
                <label className="form-label">Segundo apellido</label>
                <input
                  type="text"
                  placeholder="Ingrese su segundo apellido"
                  className="form-control"
                  {...register("secondLastname", {
                    required: true,
                    minLength: 2,
                  })}
                />
                <div>
                  {errors.secondLastname?.type === "required" && (
                    <span className="error-alert">El campo es requerido</span>
                  )}
                  {errors.secondLastname?.type === "minLength" && (
                    <span className="error-alert">
                      El minimo de letras son 2
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="form-outline">
                <label className="form-label mt-6">Cédula</label>
                <input
                  type="number"
                  placeholder="Ingrese su Cédula de identidad"
                  className="form-control"
                  {...register("id", {
                    required: true,
                    minLength: 11,
                    validate: (value) =>
                      users.every((user) => user.id !== value),
                  })}
                />

                <div>
                  {errors.id?.type === "required" && (
                    <span className="error-alert">El campo es requerido</span>
                  )}
                  {errors.id?.type === "minLength" && (
                    <span className="error-alert">
                      El minimo de numeros son 11
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="form-outline">
                <label className="form-label">age</label>
                <input
                  type="number"
                  placeholder="Ingrese su age"
                  className="form-control"
                  {...register("age", {
                    required: true,
                    minLength: 1,
                  })}
                />
                <div>
                  {errors.age?.type === "required" && (
                    <span className="error-alert">El campo es requerido</span>
                  )}
                  {errors.age?.type === "minLength" && (
                    <span className="error-alert">
                      El minimo de numeros son 3
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="form-outline">
                <label className="form-label mt-6">Género</label>
                <select className="form-select" {...register("gender")}>
                  <option value="masculino">Masculino</option>
                  <option value="femenino">Femenino</option>
                </select>
                <div>
                  {errors.gender?.type === "required" && (
                    <span className="error-alert">El campo es requerido</span>
                  )}
                  {errors.gender?.type === "minLength" && (
                    <span className="error-alert">
                      El minimo de letras son 8
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="form-outline">
                <label className="form-label">Dirección</label>
                <input
                  type="text"
                  placeholder="Ingrese su Dirección"
                  className="form-control"
                  {...register("address", {
                    required: true,
                    minLength: 15,
                  })}
                />
                <div>
                  {errors.address?.type === "required" && (
                    <span className="error-alert">El campo es requerido</span>
                  )}
                  {errors.address?.type === "minLength" && (
                    <span className="error-alert">
                      El minimo de caracteres son 15
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="form-outline">
                <label className="form-label mt-6">Teléfono</label>
                <input
                  type="number"
                  placeholder="Ingrese su Teléfono"
                  className="form-control"
                  {...register("phone", {
                    required: true,
                    minLength: 10,
                  })}
                />
                <div>
                  {errors.phone?.type === "required" && (
                    <span className="error-alert">El campo es requerido</span>
                  )}
                  {errors.phone?.type === "minLength" && (
                    <span className="error-alert">
                      El minimo de numeros son 10
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="form-outline">
                <label className="form-label">email electrónico</label>
                <input
                  type="email"
                  placeholder="Ingrese su email electrónico"
                  className="form-control"
                  {...register("email", {
                    required: true,
                    minLength: 15,
                  })}
                />
                <div>
                  {errors.email?.type === "required" && (
                    <span className="error-alert">El campo es requerido</span>
                  )}
                  {errors.email?.type === "minLength" && (
                    <span className="error-alert">
                      El minimo de numeros son 10
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="form-outline">
                <label className="form-label mt-6">Estado civil</label>
                <select className="form-select" {...register("estadoCivil")}>
                  <option value="casado">Casado/a</option>
                  <option value="soltero">Soltero/a</option>
                </select>
                <div>
                  {errors.estadoCivil?.type === "required" && (
                    <span className="error-alert">El campo es requerido</span>
                  )}
                  {errors.estadoCivil?.type === "minLength" && (
                    <span className="error-alert">
                      El minimo de letras son 6
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="form-outline">
                <label className="form-label">Tienes children?</label>
                <select className="form-select" {...register("children")}>
                  <option value="si">Si</option>
                  <option value="no">No</option>
                </select>
                <div>
                  {errors.children?.type === "required" && (
                    <span className="error-alert">El campo es requerido</span>
                  )}
                  {errors.children?.type === "minLength" && (
                    <span className="error-alert">
                      El minimo de numeros son 2
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="form-outline">
                <label className="form-label mt-6">Fecha de birthday</label>
                <input
                  type="date"
                  placeholder="Ingrese su fecha de birthday"
                  className="form-control"
                  {...register("birthday", {
                    required: true,
                  })}
                />
                <div>
                  {errors.birthday?.type === "required" && (
                    <span className="error-alert">El campo es requerido</span>
                  )}
                  {errors.birthday?.type === "minLength" && (
                    <span className="error-alert">
                      El minimo de numeros son 10
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          <button className="btn btn-success mt-2">Agregar Usuario</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
