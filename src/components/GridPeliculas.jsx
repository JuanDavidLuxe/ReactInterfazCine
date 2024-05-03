import React from 'react'
import '../styles/GridPeliculas.css';


export const GridPeliculas = ({itemPelicula}) => {
  return (
    <>
        <div className='item-pelicula'>
            <span>Titulo Disponible</span>
            <h2>{itemPelicula.titulo}</h2>
            <span className='space-none'></span>
            <span>Descripción</span>
            <h3>{itemPelicula.descripcion}</h3>
            <span>Duración</span>
            <h3>{itemPelicula.duracion}</h3>
            <span>Fecha de estreno</span>
            <h2>{itemPelicula.fechaEstreno}</h2>
            <span>Familiar</span>
            <h2>{itemPelicula.familiar}</h2>
            <span>Clasificación edad</span>
            <h2>{itemPelicula.clasificacionEdad}</h2>
            <span>Clasificación genero</span>
            <h2>{itemPelicula.clasificacionGenero}</h2>
        </div>
    
    </>
  )
}
