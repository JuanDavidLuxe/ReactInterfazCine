import {React, useState, useEffect } from 'react'
import { useForm } from '../../hooks/useForm';
import '../../styles/agregarPeliculas.css';
import { crearAsiento } from '../../helpers/crearAsiento';
import { obtenerSalas } from '../../helpers/obtenerSalas';
import { obtenerPeliculas } from '../../helpers/obtenerPeliculas';
import { crearProyeccion } from '../../helpers/crearProyeccion';
import moment from 'moment';

export const AgregarProyeccionAdminView = ({ setProyeccion }) => {

  /* const [inputValue, setInputValue] = useState(''); */

  /* const onInputChange = ({ target }) => {
    setInputValue(target.value);
  }; */

  const {formState, onInputChange} = useForm(
    {
        fecha: "",
        pelicula:"",
        sala:""
    
    }
  );

  const { fecha,
  pelicula,
  sala} = formState;

  const onSubmit = (event) => {
    event.preventDefault();
    if( fecha.trim().length <= 1) return;
    setProyeccion(proyeccion => [formState, ...proyeccion])
    const dataProyeccion = {
        ...formState,
        fecha: moment(fecha).format('YYYY-MM-DDTHH:mm:ss'),
        sala: {
            id: Number(sala)
        },
        pelicula: {
            id: Number(pelicula)
        }
        /*familiar: familiar === '1'? true: false*/
      }
      crearProyeccion(dataProyeccion);

  }

  const [salasObte, setSalasObte] = useState([{
    id: 1,
    codigoSala: "",
    capacidad: 0
}]);


const [peliculasObte, setPelicultasObte] = useState([{
    id: 1,
    codigoSala: "",
    capacidad: 0
}]);

  useEffect(() => {
    const obtenerSalasConst = async() => {
        try {
            const salasObtenidas = await obtenerSalas();
            setSalasObte(salasObtenidas);
        } catch (error) {
            console.log("Error al obtener las salas", error)
            setSalasObte([]);
        }
    }

    const obtenerPeliculasConst = async() => {
        try {
            const peliculasObtenidas = await obtenerPeliculas();
            setPelicultasObte(peliculasObtenidas);

        } catch (error) {
            console.log("Error al obtener las salas", error)
            setPelicultasObte([]);
        }
    }

    obtenerSalasConst();
    obtenerPeliculasConst();
}, [])

  return (
    <>
      <h1>AGREGAR PROYECCION ADMIN</h1>
      <div className='inputs-agregarPelicula'>

        <form onSubmit={ (event) => onSubmit(event) }>

        <label>
            Fecha
            <input
                id="fecha"
                type='datetime-local'
                name="fecha"
                value={ fecha }
                onChange={ onInputChange }/>
          </label>
          
          <label>
            Pelicula
            <select
                id="pelicula"
                name="pelicula"
                value={ pelicula }
                onChange={ onInputChange }
            >
                <option selected="selected"></option>
                    { peliculasObte.map(pelicula => {
                       return <option key={pelicula.id} value={pelicula.id}>{pelicula.titulo}</option>
                    }) }
            </select>
          </label>

          <label>
            Sala
            <select
                id="sala"
                name='sala'
                value={sala}
                onChange={ onInputChange }
                placeholder='Agrega una Sala'>

                    <option selected="selected"></option>
                    { salasObte.map(sala => {
                       return <option key={sala.id} value={sala.id}>{sala.codigoSala}</option>
                    }) }
            </select>
          </label>

          <button type='submit'>Agregar Proyeccion</button>
          
        </form>
      </div>
      

    </>
  )
}
