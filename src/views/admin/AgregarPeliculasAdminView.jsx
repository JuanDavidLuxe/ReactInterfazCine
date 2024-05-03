import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm';
import '../../styles/agregarPeliculas.css';
import { crearPelicula } from '../../helpers/crearPeliculas';

export const AgregarPeliculasAdminView = ({ setPeliculas }) => {

  /* const [inputValue, setInputValue] = useState(''); */

  /* const onInputChange = ({ target }) => {
    setInputValue(target.value);
  }; */

  const {formState, onInputChange} = useForm(
    {
      titulo: "",
      descripcion: "",
      duracion: 0,
      fechaEstreno: "2024-05-20",
      clasificacionGenero: "",
      clasificacionEdad: "",
      familiar: false
    }
  );

  const { titulo,
  descripcion,
  duracion,
  fechaEstreno,
  clasificacionGenero,
  clasificacionEdad,
  familiar} = formState;



  const verificarPeliculaFamiliar = (event) => {
    const {name, checked} = event.target;
    onInputChange({target: { name, value:checked}})
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if( titulo.trim().length <= 1) return;
    setPeliculas(peliculas => [formState, ...peliculas])
    const dataPelicula = {
      ...formState,
      duracion: Number(duracion),
      /*familiar: familiar === '1'? true: false*/
    }
    crearPelicula(dataPelicula);

  }

  return (
    <>
      <h1>AGREGAR PELICULAS ADMIN</h1>
      <div className='inputs-agregarPelicula'>

        <form onSubmit={ (event) => onSubmit(event) }>
          <label>
            Titulo de la pelicula
            <input 
              type='text'
              placeholder='Agrega el Titulo de una pelicula'
              name='titulo'
              value={ titulo }
              onChange={ onInputChange }/>
          </label>
          
          <label>
            Descripción de la pelicula
            <input
              type='text'
              name='descripcion'
              value={ descripcion }
              onChange={ onInputChange }
              placeholder='Agrega una descripción'/>
          </label>
          
          <label>
            Clasificación por genero
            <input
              type='text'
              name='clasificacionGenero'
              value={ clasificacionGenero }
              onChange={ onInputChange }
              placeholder='Agrega un clasificación de genero'/>  
          </label>

          <label>
            Clasificación por edad
            <input 
              type='number'
              name='clasificacionEdad'
              value={ clasificacionEdad }
              onChange={ onInputChange }
              placeholder='Agregar una clasificación de edad'/>
          </label>
          
          <label>
            Duración de la pelicula
            <input 
              type='number'
              name='duracion'
              value={ duracion }
              onChange={ onInputChange }
              placeholder='Agrega una duración de la pelicula'/>
          </label>
          
          <label>
            Pelicula apta para familia
            <input
              type='checkbox'
              name='familiar'
              checked={familiar}
              onChange={ verificarPeliculaFamiliar }
              placeholder='Agrega si la pelicula es apto para toda la familia'/>
          </label>
          
          <label>
            Fecha de estreno de la pelicula
            <input
              type='date'
              name='fechaEstreno'
              value={ fechaEstreno }
              onChange={ onInputChange }
              placeholder='Agrega la fecha de estreno de la pelicula'/>
          </label>

          <button type='submit'>Agregar pelicula</button>
          
        </form>
      </div>
      

    </>
  )
}
