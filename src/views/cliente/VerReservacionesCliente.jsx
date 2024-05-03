import React, { useEffect, useState } from 'react'
import { GridReservacionesComponent } from '../../components/GridReservacionesComponent';
import { obtenerReservaciones } from '../../helpers/obtenerReservaciones';
import moment from 'moment';
import { editarReservacion } from '../../helpers/editarReservacion';
import { obtenerClientes } from '../../helpers/obtenerClientes';
import { useForm } from '../../hooks/useForm';
import { obtenerReservacionesPorCliente } from '../../helpers/obtenerReservacionesPorCliente';
import { Link } from 'react-router-dom' 

export const VerReservacionesCliente = () => {

    const [reservaciones, setReservaciones] = useState([]);
    const [clientes, setClientesObte] = useState([]);
    const [gate, setGate] = useState(false);

    const {formState, onInputChange} = useForm(
        {
            nombre: "",
        }
      );
    
      const {
        nombre,
    } = formState;
    
      const onSubmit = (event) => {
        event.preventDefault();
        console.log("se ejecuta al enviar: ", formState);
        const respuesta =  obtenerReservacionesPorCliente(formState);
        if(respuesta) {
            setGate(true);
            obtenerReservacionesConst(respuesta);
        } else {
            setGate(false)
        }
        // Poner aqui, la disparada de info para reservaciones
    
      }


      const obtenerReservacionesConst = async(respuesta) => {
        try {
            let proyeccionesFormat = "";
            console.log("EL VALOR DE RESPUESTA: ", respuesta);
            const reservacionesObtenidas = await respuesta;
            setReservaciones(reservacionesObtenidas.map( reser => {
                const proy = reser.proyeccion;
                const fechaFormato = moment(new Date(proy.fecha[0], proy.fecha[1] - 1, proy.fecha[2], Math.floor(proy.fecha[3]/100), proy.fecha[3]%100)).format('YYYY-MM-DD HH:mm')
                return {...reser, fechaFormato: fechaFormato};

            }));
        } catch (error) {
            console.log("Error al obtener las reservaciones", error)
            setReservaciones([]);
        }
    }

    useEffect(() => {

        const obtenerClientesConst = async() => {
            try {
                const clientesObtenidos = await obtenerClientes();
                setClientesObte(clientesObtenidos);
    
            } catch (error) {
                console.log("Error al obtener los clientes", error)
                setClientesObte([]);
            }
        }
    
        obtenerClientesConst();
    }, [])


   /*  useEffect(() => {
    

        obtenerReservacionesConst();
    }, [gate]) */



    const obtenerDataEspecifica = (item) => {
        console.log("CLICKED: ", item);
        const cancelarReservacion = {
            estado: "Cancelado"
        }
        editarReservacion(item.id,cancelarReservacion);

        //obtenerReservacionesActulizar();
    }

  return (
    <>
        <div className='mostrar-peliculas'>
            <Link to="/cliente/panel">Volver a inscribir una reservación</Link>
          <h1>RESERVACIONES AGENDADAS</h1>

            <div className='input-seleccionar-cliente'>
                <form onSubmit={ (event) => onSubmit(event) }>
                    <label>
                        Seleccionar cliente
                        <select
                            id="nombre"
                            name='nombre'
                            value={nombre}
                            onChange={ onInputChange }
                            placeholder='Selecciona un cliente'>

                                <option selected="selected"></option>
                                { clientes.map(cliente => {
                                return <option key={cliente.id} value={cliente.id}>{cliente.nombre}</option>
                                }) }
                        </select>
                    </label>
                    <button type='submit'>Encontrar reservaciones</button>
                </form>
            </div>

          <div className='grid-peliculas'>
              { reservaciones.map( reservacion => {
                  return <GridReservacionesComponent key={reservacion.id} itemReservacion={reservacion} onCardClick={obtenerDataEspecifica}></GridReservacionesComponent>
              }) }
          </div>
        </div>

    </>
  )
}
