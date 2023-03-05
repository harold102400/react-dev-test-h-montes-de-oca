import React from "react";
import { useForm } from "react-hook-form";
import { userValidation } from "../validations/UserValidation";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/auth.actions";
import * as FaIcons from "react-icons/fa";
import "../styles/LoginForm.css";

const Login = () => {
  const dispatch = useDispatch();
  const isValidInput = (value) => {
    return /^\s*$/.test(value) === false;
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
  });
  const onSubmit = async (data) => {
    const isValid = await userValidation.isValid(data);
    if (!isValid) return;

    dispatch(login({ username: data.username }));
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit(onSubmit)} className="user-form-data">
        <h1 className="mb-3">
          Admin page <FaIcons.FaDoorOpen />
        </h1>
        <div className="form-group mb-2">
          <label className="form-label">Username</label>
          <input
            className="form-control"
            type="text"
            name="username"
            {...register("username", {
              required: true,
              minLength: 2,
              validate: {
                isNotEmpty: (value) => isValidInput(value),
              },
            })}
          />
        </div>

        <div>
          {errors.username?.type === "required" && (
            <span className="error-alert">El campo es requerido</span>
          )}
          {errors.username?.type === "isNotEmpty" && (
            <span className="error-alert">
              Este campo no puede estar vacío o contener solo espacios en blanco
            </span>
          )}
          {errors.username?.type === "minLength" && (
            <span className="error-alert">
              El minimo de letras son 2
            </span>
          )}
        </div>

        <div className="form-group mb-2">
          <label className="form-label">Password</label>
          <input
            className="form-control"
            type="password"
            name="password"
            {...register("password", {
              required: true,
              pattern: /[a-zA-Z0-9]*/,
              minLength: 8,
              validate: {
                isNotEmpty: (value) => isValidInput(value),
              },
            })}
          />
        </div>

        <div>
          {errors.password?.type === "required" && (
            <span className="error-alert">El campo es requerido</span>
          )}
          {errors.password?.type === "isNotEmpty" && (
            <span className="error-alert">
              Este campo no puede estar vacío o contener solo espacios en blanco
            </span>
          )}
          {errors.password?.type === "minLength" && (
            <span className="error-alert">El mínimo de letras son 8</span>
          )}
        </div>

        <button className="btn btn-success w-100 mt-2">Log in</button>

      </form>
    </div>
  );
};

export default Login;
