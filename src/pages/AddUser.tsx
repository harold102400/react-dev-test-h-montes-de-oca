import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/actions/user.actions";
import { User } from "../interfaces/User";
import "../styles/AddUser.css";

const AddUser = () => {
  const { users } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<User>({
    criteriaMode: "all",
  });
  const isValidInput = (value: string) => {
    return /^\s*$/.test(value) === false;
  };
  const onSubmit = (data: User) => {
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
        maritalStatus: data.maritalStatus,
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
                    validate: {
                      isNotEmpty: (value: any) => isValidInput(value),
                    },
                  })}
                />

                <div>
                  {errors.name?.type === "required" && (
                    <span className="error-alert">El campo es requerido</span>
                  )}
                  {errors.name?.type === "isNotEmpty" && (
                    <span className="error-alert">
                      Este campo no puede estar vac??o o contener solo espacios
                      en blanco
                    </span>
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
                    validate: {
                      isNotEmpty: (value: any) => isValidInput(value),
                    },
                  })}
                />

                <div>
                  {errors.firstLastname?.type === "required" && (
                    <span className="error-alert">El campo es requerido</span>
                  )}
                  {errors.firstLastname?.type === "isNotEmpty" && (
                    <span className="error-alert">
                      Este campo no puede estar vac??o o contener solo espacios
                      en blanco
                    </span>
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
                    validate: {
                      isNotEmpty: (value: any) => isValidInput(value),
                    },
                  })}
                />
                <div>
                  {errors.secondLastname?.type === "required" && (
                    <span className="error-alert">El campo es requerido</span>
                  )}
                  {errors.secondLastname?.type === "isNotEmpty" && (
                    <span className="error-alert">
                      Este campo no puede estar vac??o o contener solo espacios
                      en blanco
                    </span>
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
                <label className="form-label mt-6">C??dula</label>
                <input
                  type="number"
                  placeholder="Ingrese su C??dula de identidad"
                  className="form-control"
                  {...register("id", {
                    required: true,
                    minLength: 11,
                    maxLength: 11,
                    validate: {
                      isUnique: (value: any) =>
                        users.every((user: any) => user.id !== value) ||
                        "Ya existe un usuario con esa c??dula.",
                      isNotEmpty: (value: any) => isValidInput(value),
                    },
                  })}
                />
                {errors.id && (
                  <div>
                    {errors.id.type === "required" && (
                      <span className="error-alert">El campo es requerido</span>
                    )}
                    {errors.id.type === "minLength" && (
                      <span className="error-alert">
                        El m??nimo de n??meros son 11
                      </span>
                    )}
                    {errors.id.type === "maxLength" && (
                      <span className="error-alert">
                        El m??ximo de n??meros son 11
                      </span>
                    )}
                    {errors.id.type === "isUnique" && (
                      <span className="error-alert">
                        {errors.id.message?.toString()}
                      </span>
                    )}
                    {errors.id?.type === "isNotEmpty" && (
                      <span className="error-alert">
                        Este campo no puede estar vac??o o contener solo espacios
                        en blanco
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="form-outline">
                <label className="form-label">Edad</label>
                <input
                  type="number"
                  placeholder="Ingrese su edad"
                  className="form-control"
                  {...register("age", {
                    required: true,
                    min: 18,
                    max: 120,
                    pattern: /^[0-9]+$/,
                  })}
                />
                <div>
                  {errors.age?.type === "required" && (
                    <span className="error-alert">El campo es requerido</span>
                  )}
                  {errors.age?.type === "min" && (
                    <span className="error-alert">
                      La edad m??nima permitida es 18 a??os
                    </span>
                  )}
                  {errors.age?.type === "max" && (
                    <span className="error-alert">
                      La edad m??xima permitida es 120 a??os
                    </span>
                  )}
                  {errors.age?.type === "pattern" && (
                    <span className="error-alert">
                      Solo se permiten n??meros
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="form-outline">
                <label className="form-label mt-6">G??nero</label>
                <select
                  className="form-select"
                  {...register("gender", { required: true })}
                >
                  <option value="">Seleccione un genero</option>
                  <option value="masculino">Masculino</option>
                  <option value="femenino">Femenino</option>
                  <option value="femenino">Otro</option>
                </select>
                {errors.gender && (
                  <span className="error-alert">El campo es requerido</span>
                )}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-4">
            <div className="form-outline">
      <label className="form-label">Direcci??n</label>
      <textarea
        placeholder={`Direcci??n`}
        className="form-control mb-2"
        {...register(`address`, {
          required: true,
          minLength: 15,
          validate: {
            isNotEmpty: (value: any) => isValidInput(value),
          },
        })}
      />
      {errors.address?.type === 'required' && (
        <span className="error-alert">El campo es requerido</span>
      )}
      {errors.address?.type === 'minLength' && (
        <span className="error-alert">
          El m??nimo de caracteres son 15
        </span>
      )}
      {errors.address?.type === 'isNotEmpty' && (
        <span className="error-alert">
          La direcci??n no puede estar vac??a
        </span>
      )}
    </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="form-outline">
                <label className="form-label mt-6">Tel??fono</label>
                <input
                  type="number"
                  placeholder="Ingrese su Tel??fono"
                  className="form-control"
                  {...register("phone", {
                    required: true,
                    minLength: 10,
                    maxLength: 10,
                  })}
                />
                <div>
                  {errors.phone?.type === "required" && (
                    <span className="error-alert">El campo es requerido</span>
                  )}
                  {errors.phone?.type === "minLength" && (
                    <span className="error-alert">
                      El m??nimo de numeros son 10
                    </span>
                  )}
                  {errors.phone?.type === "maxLength" && (
                    <span className="error-alert">
                      El m??ximo de numeros son 10
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="form-outline">
                <label className="form-label">Correo electr??nico</label>
                <input
                  type="email"
                  placeholder="Ingrese su email electr??nico"
                  className="form-control"
                  {...register("email", {
                    required: "El campo es requerido",
                    minLength: {
                      value: 5,
                      message:
                        "El correo electr??nico debe tener al menos 5 caracteres",
                    },
                    maxLength: {
                      value: 255,
                      message:
                        "El correo electr??nico debe tener como m??ximo 255 caracteres",
                    },
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "El correo electr??nico no es v??lido",
                    },
                  })}
                />
                <div>
                  {errors.email && (
                    <span className="error-alert">
                      {errors.email.message?.toString()}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="form-outline">
                <label className="form-label mt-6">Estado civil</label>
                <select
                  className="form-select"
                  {...register("maritalStatus", { required: true })}
                >
                  <option value="">Seleccione su estado civil</option>
                  <option value="casado">Casado/a</option>
                  <option value="soltero">Soltero/a</option>
                </select>
                {errors.maritalStatus && (
                  <span className="error-alert">El campo es requerido</span>
                )}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="form-outline">
                <label className="form-label">Tiene hijos?</label>
                <select
                  className="form-select"
                  {...register("children", { required: true })}
                >
                  <option value="">Seleccione si tienes hijos</option>
                  <option value="si">Si</option>
                  <option value="no">No</option>
                </select>
                {errors.children && (
                  <span className="error-alert">El campo es requerido</span>
                )}
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="form-outline">
                <label className="form-label mt-6">Fecha de cumplea??os</label>
                <input
                  type="date"
                  placeholder="Ingrese su fecha de cumplea??os"
                  className="form-control"
                  {...register("birthday", {
                    required: true,
                  })}
                />
                <div>
                  {errors.birthday?.type === "required" && (
                    <span className="error-alert">El campo es requerido</span>
                  )}
                </div>
              </div>
            </div>
          </div>

          <button className="btn btn-primary mt-2">Agregar Usuario</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
