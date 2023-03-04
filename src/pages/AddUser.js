import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/actions/user.actions";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import '../styles/AddUser.css'


const AddUser = () => {
  const { users } = useSelector((state) => state.user)
  console.log(users)
  const dispatch = useDispatch()
  //const navigate = useNavigate()
 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    //console.log(data.primerApellido);
    dispatch(addUser({
      name: data.name, 
      primerApellido: data.primerApellido, 
      segundoApellido: data.segundoApellido, 
      id: data.id, 
      edad: data.edad, 
      genero: data.genero, 
      direccion: data.direccion, 
      telefono: data.telefono, 
      correo: data.correo, 
      estadoCivil: data.estadoCivil, 
      hijos: data.hijos, 
      nacimiento: data.nacimiento
    }))
    //navigate("/users")
  
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
                  <span className="error-alert">
                    El campo es requerido
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
                {...register("primerApellido", {
                  required: true,
                  minLength: 2,
                })}
              />

                <div>
                {errors.primerApellido?.type === "required" && (
                  <span className="error-alert">
                    El campo es requerido
                  </span>
                )}
                {errors.primerApellido?.type === "minLength" && (
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
              <input type="text" placeholder="Ingrese su segundo apellido"className="form-control"
                {...register("segundoApellido", {
                  required: true,
                  minLength: 2,
                })}/>
                <div>
                {errors.segundoApellido?.type === "required" && (
                  <span className="error-alert">
                    El campo es requerido
                  </span>
                )}
                {errors.segundoApellido?.type === "minLength" && (
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
              <input type="number" placeholder="Ingrese su Cédula de identidad"  className="form-control" {...register("id", {
                  required: true,
                  minLength: 11
                })}/>

                <div>
                {errors.id?.type === "required" && (
                  <span className="error-alert">
                    El campo es requerido
                  </span>
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
              <label className="form-label">Edad</label>
              <input type="number" placeholder="Ingrese su edad" className="form-control" {...register("edad", {
                  required: true,
                  minLength: 3
                })}/>
                <div>
                {errors.edad?.type === "required" && (
                  <span className="error-alert">
                    El campo es requerido
                  </span>
                )}
                {errors.edad?.type === "minLength" && (
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
              <input type="text" placeholder="Ingrese su Género" className="form-control" {...register("genero", {
                  required: true,
                  minLength: 8
                })}/>
                <div>
                {errors.genero?.type === "required" && (
                  <span className="error-alert">
                    El campo es requerido
                  </span>
                )}
                {errors.genero?.type === "minLength" && (
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
              <input type="text" placeholder="Ingrese su Dirección" className="form-control" {...register("direccion", {
                  required: true,
                  minLength: 15
                })}/>
                <div>
                {errors.direccion?.type === "required" && (
                  <span className="error-alert">
                    El campo es requerido
                  </span>
                )}
                {errors.direccion?.type === "minLength" && (
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
              <input type="number" placeholder="Ingrese su Teléfono" className="form-control" {...register("telefono", {
                  required: true,
                  minLength: 10
                })}/>
                <div>
                {errors.telefono?.type === "required" && (
                  <span className="error-alert">
                    El campo es requerido
                  </span>
                )}
                {errors.telefono?.type === "minLength" && (
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
              <label className="form-label">Correo electrónico</label>
              <input type="email"  placeholder="Ingrese su correo electrónico" className="form-control" {...register("correo", {
                  required: true,
                  minLength: 15
                })}/>
                <div>
                {errors.correo?.type === "required" && (
                  <span className="error-alert">
                    El campo es requerido
                  </span>
                )}
                {errors.correo?.type === "minLength" && (
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
              <input type="text"  placeholder="Ingrese su estado civil" className="form-control" {...register("estadoCivil", {
                  required: true,
                  minLength: 6
                })}/>
                <div>
                {errors.estadoCivil?.type === "required" && (
                  <span className="error-alert">
                    El campo es requerido
                  </span>
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
              <label className="form-label">Tienes hijos?</label>
              <input type="number"  className="form-control" {...register("hijos", {
                  required: true,
                  minLength: 2
                })}/>
                <div>
                {errors.hijos?.type === "required" && (
                  <span className="error-alert">
                    El campo es requerido
                  </span>
                )}
                {errors.hijos?.type === "minLength" && (
                  <span className="error-alert">
                    El minimo de numeros son 2
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="form-outline">
              <label className="form-label mt-6">Fecha de nacimiento</label>
              <input type="date" placeholder="Ingrese su fecha de nacimiento" className="form-control" {...register("nacimiento", {
                  required: true,
                  
                })}/>
                <div>
                {errors.nacimiento?.type === "required" && (
                  <span className="error-alert">
                    El campo es requerido
                  </span>
                )}
                {errors.nacimiento?.type === "minLength" && (
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
