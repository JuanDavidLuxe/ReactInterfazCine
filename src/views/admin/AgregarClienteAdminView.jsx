import {React, useState, useEffect } from 'react'
import { useForm } from '../../hooks/useForm';
import '../../styles/agregarPeliculas.css';
import { crearCliente } from '../../helpers/crearCliente';


export const AgregarClienteAdminView = ({ setCliente }) => {


  const {formState, onInputChange} = useForm(
    {
        nombre: "",
        identificacion: "",
        email: "",
        telefono: ""
    }
  );

  const { nombre,
  identificacion,
  email,
  telefono} = formState;

  const onSubmit = (event) => {
    event.preventDefault();
    if( nombre.trim().length <= 1) return;
    setCliente(cliente => [formState, ...cliente])
    crearCliente(formState);

  }

  return (
    <>
      <h1>AGREGAR CLIENTE ADMIN</h1>
      <div className='inputs-agregarPelicula'>

        <form onSubmit={ (event) => onSubmit(event) }>
          <label>
            Nombre del cliente
            <input 
              type='text'
              placeholder='Agrega un nombre para el cliente'
              name='nombre'
              value={ nombre }
              onChange={ onInputChange }/>
          </label>
          
          <label>
            Idenficación
            <input 
              type='text'
              placeholder='Agrega una identificación del cliente'
              name='identificacion'
              value={ identificacion }
              onChange={ onInputChange }/>
          </label>

          <label>
            Telefono
            <input 
              type='text'
              placeholder='Agrega un telefono del cliente'
              name='telefono'
              value={ telefono }
              onChange={ onInputChange }/>
          </label>

          <label>
            Correo electronico
            <input 
              type='text'
              placeholder='Agrega un correo electronico del cliente'
              name='email'
              value={ email }
              onChange={ onInputChange }/>
          </label>

          <button type='submit'>Agregar Cliente</button>
          
        </form>
      </div>
      

    </>
  )
}
