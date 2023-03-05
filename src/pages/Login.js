import React from "react";
import { useForm } from "react-hook-form";
import { userValidation } from "../validations/UserValidation";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/auth.actions";
import * as FaIcons from "react-icons/fa";
import "../styles/LoginForm.css";

const Login = () => {

  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const isValid = await userValidation.isValid(data);
    if(!isValid) return

    dispatch(login({ username: data.username }))
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit(onSubmit)} className="user-form-data">
        <h1 className="mb-3">Admin page <FaIcons.FaDoorOpen /></h1>
        <div className="form-group mb-2">
          <label className="form-label">Username</label>
          <input
            className="form-control"
            type="text"
            name="username"
            {...register("username", {
              required: true,
              minLength: 2,
            })}
          />
        </div>

        <div>
          {errors.username?.type === "required" && (<span className="alert alert-danger">El campo es requerido</span>)}
          {errors.username?.type === "minLength" && (
            <span className="alert alert-danger">
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
              pattern: "[a-zA-Z0-9]*",
            })}
          />
        </div>

        <div>
          {errors.password?.type === "required" && (
            <span>El campo es requerido</span>
          )}
          {errors.password?.type === "minLength" && (
            <span>El minimo de letras son 2</span>
          )}
        </div>

        <button className="btn btn-success w-100 mt-2">Log in</button>
      </form>
    </div>
  );
};

export default Login;
