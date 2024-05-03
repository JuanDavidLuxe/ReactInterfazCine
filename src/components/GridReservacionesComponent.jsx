import React from 'react'
import '../styles/GridPeliculas.css';


export const GridReservacionesComponent = ({itemReservacion, onCardClick}) => {
  return (
    <>
        <div className='item-pelicula'>
            <span>Pelicula</span>
            <h2>{itemReservacion.proyeccion.pelicula.titulo}</h2>
            <span>Estado de la reservación</span>
            <h2>{itemReservacion.estado}</h2>
            <span>Horario de la reservación</span>
            <h2>{itemReservacion.fechaFormato}</h2>
            <button className='button-cancelar-reservacion' onClick={ () => onCardClick(itemReservacion)}>Cancelar </button>
        </div>
    
    </>
  )
}
