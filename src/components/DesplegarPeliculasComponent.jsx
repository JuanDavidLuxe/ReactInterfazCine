import React, { useEffect, useState } from 'react'
import '../styles/mostrarPeliculas.css';
import { GridPeliculas } from './GridPeliculas';

export const DesplegarPeliculasComponent = ({ showPeliculas }) => {

    const [peliculas, setPeliculas] = useState(showPeliculas);
    console.log("valor de showpeliculas: ", peliculas);
    
    useEffect(() => {
      setPeliculas(showPeliculas);
    
    }, [showPeliculas])
    


  return (
    <>
        <div className='mostrar-peliculas'>
          <h1>PELICULAS DISPONIBLES</h1>
          <div className='grid-peliculas'>
              { peliculas.map( pelicula => {
                  return <GridPeliculas key={pelicula.id} itemPelicula={pelicula}></GridPeliculas>
              }) }
          </div>
        </div>
    </>
  )
}
