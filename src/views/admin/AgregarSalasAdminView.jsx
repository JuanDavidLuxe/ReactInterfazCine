import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm';
import '../../styles/agregarPeliculas.css';
import { crearSala } from '../../helpers/crearSalas';

export const AgregarSalasAdminView = ({ setSalas }) => {

  /* const [inputValue, setInputValue] = useState(''); */

  /* const onInputChange = ({ target }) => {
    setInputValue(target.value);
  }; */

  const {formState, onInputChange} = useForm(
    {
        codigoSala: "",
        capacidad: 0
    }
  );

  const { codigoSala, capacidad} = formState;

  const onSubmit = (event) => {
    event.preventDefault();
    if( codigoSala.trim().length <= 1) return;
    setSalas(salas => [formState, ...salas])
    const dataPelicula = {
      ...formState,
      capacidad: Number(capacidad),
      /*familiar: familiar === '1'? true: false*/
    }
    crearSala(dataPelicula);

  }

  return (
    <>
      <h1>AGREGAR SALAS ADMIN</h1>
      <div className='inputs-agregarPelicula'>

        <form onSubmit={ (event) => onSubmit(event) }>
          <label>
            Codigo de la Sala
            <input 
              type='text'
              placeholder='Agrega un codigo para la sala'
              name='codigoSala'
              value={ codigoSala }
              onChange={ onInputChange }/>
          </label>
          
          <label>
            Capacidad
            <input
              type='number'
              name='capacidad'
              value={ capacidad }
              onChange={ onInputChange }
              placeholder='Agrega la capacidad de la sala'/>
          </label>

          <button type='submit'>Agregar Sala</button>
          
        </form>
      </div>
      

    </>
  )
}
