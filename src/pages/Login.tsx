<<<<<<< HEAD:src/pages/Login.js
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as FaIcons from "react-icons/fa";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/auth.actions";
import "../styles/LoginForm.css";
=======
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as FaIcons from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/auth.actions';
import '../styles/LoginForm.css';
import { UserAuth } from '../interfaces/UserAuth';
>>>>>>> add-typescript:src/pages/Login.tsx

const Login = () => {
  const dispatch = useDispatch();
  const isValidInput = (value: string) => {
    return /^\s*$/.test(value) === false;
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserAuth>({
    criteriaMode: 'all',
  });
  const [loginError, setLoginError] = useState(false);

<<<<<<< HEAD:src/pages/Login.js
  const onSubmit = (data) => {
    if(data.username !== "admin" || data.password !== "admin123"){
=======
  const onSubmit: SubmitHandler<UserAuth> = (data) => {
    if (data.username !== 'admin' || data.password !== 'admin123') {
>>>>>>> add-typescript:src/pages/Login.tsx
      setLoginError(true);
      return;
    }

    dispatch(login({ username: data.username }));
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit(onSubmit)} className="user-form-data">
        <h1 className="mb-3">
          Bienvenido! <FaIcons.FaDoorOpen />
        </h1>
        <div className="form-group mb-2">
          <label className="form-label">Usuario</label>
          <input
            className="form-control"
            type="text"
            {...register('username', {
              required: true,
              minLength: 2,
              validate: {
                isNotEmpty: (value: string) => isValidInput(value),
              },
            })}
          />
        </div>

        <div>
          {errors.username?.type === 'required' && (
            <span className="error-alert">El campo es requerido</span>
          )}
          {errors.username?.type === 'isNotEmpty' && (
            <span className="error-alert">
              Este campo no puede estar vacío o contener solo espacios en blanco
            </span>
          )}
<<<<<<< HEAD:src/pages/Login.js
          {errors.username?.type === "minLength" && (
            <span className="error-alert">
              El mínimo de letras son 2
            </span>
=======
          {errors.username?.type === 'minLength' && (
            <span className="error-alert">El mínimo de letras son 2</span>
>>>>>>> add-typescript:src/pages/Login.tsx
          )}
        </div>

        <div className="form-group mb-2">
          <label className="form-label">Contraseña</label>
          <input
            className="form-control"
            type="password"
            {...register('password', {
              required: true,
              pattern: /[a-zA-Z0-9]*/,
              minLength: 8,
              validate: {
                isNotEmpty: (value: string) => isValidInput(value),
              },
            })}
          />
        </div>

        <div>
          {errors.password?.type === 'required' && (
            <span className="error-alert">El campo es requerido</span>
          )}
          {errors.password?.type === 'isNotEmpty' && (
            <span className="error-alert">
              Este campo no puede estar vacío o contener solo espacios en blanco
            </span>
          )}
          {errors.password?.type === 'minLength' && (
            <span className="error-alert">El mínimo de letras son 8</span>
          )}
          {loginError && (
<<<<<<< HEAD:src/pages/Login.js
            <span className="error-alert">El usuario y/o la contraseña no son válidos</span>
=======
            <span className="error-alert">
              El usuario y/o la contraseña no son válidos
            </span>
>>>>>>> add-typescript:src/pages/Login.tsx
          )}
        </div>

        <div className="form-group mt-3">
          <button type="submit" className="btn btn-primary btn-block">
            Ingresar
          </button>
<<<<<<< HEAD:src/pages/Login.js
=======

>>>>>>> add-typescript:src/pages/Login.tsx
        </div>
      </form>
    </
div>
  );
};

export default Login;
