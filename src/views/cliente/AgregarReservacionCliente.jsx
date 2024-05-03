import {React, useState, useEffect } from 'react'
import { useForm } from '../../hooks/useForm';
import '../../styles/agregarPeliculas.css';
import { crearAsiento } from '../../helpers/crearAsiento';
import { obtenerSalas } from '../../helpers/obtenerSalas';
import { obtenerPeliculas } from '../../helpers/obtenerPeliculas';
import { crearProyeccion } from '../../helpers/crearProyeccion';
import { obtenerProyecciones } from '../../helpers/obtenerProyecciones';
import { obtenerClientes } from '../../helpers/obtenerClientes';
import moment from 'moment';
import { obtenerAsientos } from '../../helpers/obtenerAsientos';
import { crearReservacion } from '../../helpers/crearReservacion';
import { Link } from 'react-router-dom' 

export const AgregarReservacionCliente = () => {


    const [reservaciones, setReservacion] = useState([{
        proyeccion: "",
        cliente:"",
        asiento:"",
        estado: ""
    }]);


  const {formState, onInputChange} = useForm(
    {
        proyeccion: "",
        cliente:"",
        asiento:"",
        estado: ""
    }
  );

  const {
    proyeccion,
    cliente,
    asiento,
    estado
} = formState;

  const onSubmit = (event) => {
    event.preventDefault();
    if( estado.trim().length <= 1) return;
    setReservacion(reservacion => [formState, ...reservacion])
    const dataReservacion = {
        ...formState,
        proyeccion: {
            id: Number(proyeccion)
        },
        asiento: {
            id: Number(asiento)
        },
        cliente: {
            id: Number(cliente)
        },
      }
      crearReservacion(dataReservacion);

  }

const [proyeccionesObte, setProyeccionesObte] = useState([{
    fecha: "",
    pelicula:"",
    sala:""

}]);

const [asientosObte, setAsientosObte] = useState([{
    codigoAsiento: "",
    estado: "",
}]);

const [clientesObte, setClientesObte] = useState([{
    nombre: "",
    identificacion: "",
    email: "",
    telefono: ""
}]);

  useEffect(() => {
    const obtenerProyeccionesConst = async() => {
        try {
            const proyeccionesObtenidas = await obtenerProyecciones();
            setProyeccionesObte(proyeccionesObtenidas.map(proy => {
                const fechaFormato = moment(new Date(proy.fecha[0], proy.fecha[1] - 1, proy.fecha[2], Math.floor(proy.fecha[3]/100), proy.fecha[3]%100)).format('YYYY-MM-DD HH:mm')
                return {...proy, fechaFormato: fechaFormato};
            }));
        } catch (error) {
            console.log("Error al obtener las proyecciones", error)
            setProyeccionesObte([]);
        }
    }

    const obtenerAsientosConst = async() => {
        try {
            const asientosObtenidos = await obtenerAsientos();
            setAsientosObte(asientosObtenidos);

        } catch (error) {
            console.log("Error al obtener los asientos", error)
            setAsientosObte([]);
        }
    }

    const obtenerClientesConst = async() => {
        try {
            const clientesObtenidos = await obtenerClientes();
            setClientesObte(clientesObtenidos);

        } catch (error) {
            console.log("Error al obtener los clientes", error)
            setClientesObte([]);
        }
    }

    obtenerProyeccionesConst();
    obtenerAsientosConst();
    obtenerClientesConst();
}, [])

  return (
    <>
    <div className='botones-cliente-reservaciones'>
        <Link to="/cliente/verreservaciones">Ver o cancelar mis reservaciones</Link>
    </div>
      <h1>AGREGAR RESERVACION CLIENTE</h1>
      <div className='inputs-agregarPelicula'>

        <form onSubmit={ (event) => onSubmit(event) }>
      
          <label>
            Horario de proyeccion y pelicula
            <select
                id="proyeccion"
                name="proyeccion"
                value={ proyeccion }
                onChange={ onInputChange }
            >
                <option selected="selected"></option>
                    { proyeccionesObte.map(proyeccion => {
                       return <option key={proyeccion.id} value={proyeccion.id}>{proyeccion.fechaFormato} ---|---  {proyeccion.pelicula === null ? "Sin titulo": <span className='span-titulo-reservacion'>{ proyeccion.pelicula.titulo}</span> }</option>
                    }) }
            </select>
          </label>

          <label>
            Asiento
            <select
                id="asiento"
                name='asiento'
                value={asiento}
                onChange={ onInputChange }
                placeholder='Agrega un asiento'>

                    <option selected="selected"></option>
                    { asientosObte.map(asiento => {
                       return <option key={asiento.id} value={asiento.id}>{asiento.codigoAsiento}</option>
                    }) }
            </select>
          </label>

          <label>
            Cliente
            <select
                id="cliente"
                name='cliente'
                value={cliente}
                onChange={ onInputChange }
                placeholder='Agrega un cliente'>

                    <option selected="selected"></option>
                    { clientesObte.map(cliente => {
                       return <option key={cliente.id} value={cliente.id}>{cliente.nombre}</option>
                    }) }
            </select>
          </label>


          <label>
                Estado
            <select
                id="estado"
                name='estado'
                value={estado}
                onChange={ onInputChange }
                placeholder='Agrega un estado'>

                    <option selected="selected"></option>
                    <option value="Reservado">Reservado</option>
                    <option value="No Reservado">No reservado</option>
                    <option value="Cancelado">Cancelado</option>
            </select>
          </label>

          <button type='submit'>Agregar Reservación</button>
          
        </form>
      </div>
      

    </>
  )
}
