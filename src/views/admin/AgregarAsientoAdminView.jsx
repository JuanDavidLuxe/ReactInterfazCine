import {React, useState, useEffect } from 'react'
import { useForm } from '../../hooks/useForm';
import '../../styles/agregarPeliculas.css';
import { crearAsiento } from '../../helpers/crearAsiento';
import { obtenerSalas } from '../../helpers/obtenerSalas';
export const AgregarAsientoAdminView = ({ setAsiento }) => {

  /* const [inputValue, setInputValue] = useState(''); */

  /* const onInputChange = ({ target }) => {
    setInputValue(target.value);
  }; */

  const {formState, onInputChange} = useForm(
    {
        codigoAsiento: "",
        estado: "",
    }
  );

  const { codigoAsiento, estado, sala} = formState;

  const onSubmit = (event) => {
    event.preventDefault();
    if( codigoAsiento.trim().length <= 1) return;
    setAsiento(asiento => [formState, ...asiento])
    const dataAsiento = {
        ...formState,
        sala: {
            id: Number(sala)
        },
        /*familiar: familiar === '1'? true: false*/
      }
    crearAsiento(dataAsiento);

  }

  const [salasObt, setSalasObt] = useState([{
    id: 1,
    codigoSala: "",
    capacidad: 0
}]);

console.log("SALAOBT: ", salasObt)

  useEffect(() => {
    const obtenerSalasConst = async() => {
        try {
            const salasObtenidas = await obtenerSalas();
            setSalasObt(salasObtenidas);
        } catch (error) {
            console.log("Error al obtener las salas", error)
            setSalasObt([]);
        }
    }

    obtenerSalasConst();
}, [])

  return (
    <>
      <h1>AGREGAR ASIENTO ADMIN</h1>
      <div className='inputs-agregarPelicula'>

        <form onSubmit={ (event) => onSubmit(event) }>
          <label>
            Codigo del asiento
            <input 
              type='text'
              placeholder='Agrega un codigo para el asiento'
              name='codigoAsiento'
              value={ codigoAsiento }
              onChange={ onInputChange }/>
          </label>
          
          <label>
            Estado
            <select
                id="estado"
                name="estado"
                value={ estado }
                onChange={ onInputChange }
            >
                <option selected="selected"></option>
                <option value="Operativo">Operativo</option>
                <option value="No operativo">No Operativo</option>
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
                    { salasObt.map(sala => {
                       return <option key={sala.id} value={sala.id}>{sala.codigoSala}</option>
                    }) }
            </select>
          </label>

          <button type='submit'>Agregar Asiento</button>
          
        </form>
      </div>
      

    </>
  )
}
