import React, { useEffect, useState } from 'react'
import { AgregarPeliculasAdminView } from './AgregarPeliculasAdminView'
import { DesplegarPeliculasComponent } from '../../components/DesplegarPeliculasComponent'
import { AgregarSalasAdminView } from './AgregarSalasAdminView'
import { AgregarAsientoAdminView } from './AgregarAsientoAdminView'
import { AgregarClienteAdminView } from './AgregarClienteAdminView'
import { AgregarProyeccionAdminView } from './AgregarProyeccionAdminView'
import { AgregarReservacionAdminView } from './AgregarReservacionAdminView'
import { obtenerPeliculas } from '../../helpers/obtenerPeliculas'


export const MostrarPeliculasAdminView = () => {

    const [peliculas, setPeliculas] = useState([{"id": 1, "titulo": "Kunfu panda"},{"id": 2, "titulo": "El minino"}]);
    const [salas, setSalas] = useState([{
        "codigoSala": "",
        "capacidad": 0
    }]);
    const [asientos, setAsientos] = useState([{        
            codigoAsiento: "",
            estado: "",
            sala:""
        }])
    const [clientes, setClientes] = useState([{
        nombre: "",
        identificacion: "",
        email: "",
        telefono: ""
    }]);

    const [proyecciones, setProyecciones] = useState([{
        fecha: "",
        pelicula:"",
        sala:""
    
    }]);

    const [reservaciones, setReservaciones] = useState([{
        proyeccion: "",
        cliente:"",
        asiento:"",
        estado: ""
    }]);

    const [agregaPeliculas, setAgregaPeliculas] = useState(false);
    const [agregaSala, setAgregaSala] = useState(false);
    const [agregaAsiento, setAgregarAsiento] = useState(false);
    const [agregaCliente, setAgregarCliente] = useState(false);
    const [agregaProyeccion, setAgregarProyeccion] = useState(false);
    const [agregaReservacion, setAgregarReservaciones] = useState(false);

    // PELICULA

    const abrirAgregarPeliculaComponente = () => {
        setAgregaPeliculas(true);
    };

    const ocultarAgregarPeliculaComponente = () => {
        setAgregaPeliculas(false);
    }


    // SALA
    const abrirAgregarSalaComponente = () => {
        setAgregaSala(true);
    }

    const ocultarAgregarSalaComponente = () => {
        setAgregaSala(false);
    }


    // Asiento
    const abrirAgregarAsientoComponente = () => {
        setAgregarAsiento(true);
    }

    const ocultarAgregarAsientoComponente = () => {
        setAgregarAsiento(false);
    }

    //Cliente

    const abrirAgregarClienteComponente = () => {
        setAgregarCliente(true);
    }

    const ocultarAgregarClienteComponente = () => {
        setAgregarCliente(false);
    }

    //Proyeccion
    const abrirAgregarProyeccionComponente = () => {
        setAgregarProyeccion(true);
    }

    const ocultarAgregarProyeccionComponente = () => {
        setAgregarProyeccion(false);
    }

    //Reservaciones

    const abrirAgregarReservacionesComponente = () => {
        setAgregarReservaciones(true);
    }

    const ocultarAgregarReservacionesComponente = () => {
        setAgregarReservaciones(false);
    }



    useEffect(() => {
        const enviarPeliculas = async() => {
            try {
                const peliculasObtenidas = await obtenerPeliculas();
                setPeliculas(peliculasObtenidas);
            } catch (error) {
                console.log("Error al obtener las peliculas", error)
                setPeliculas([]);
            }
        }

        enviarPeliculas();
    }, [])
    

  return (
    <>
        <div>
            { agregaPeliculas && <AgregarPeliculasAdminView setPeliculas={ setPeliculas }></AgregarPeliculasAdminView>}
            { agregaSala && <AgregarSalasAdminView setSalas={ setSalas }></AgregarSalasAdminView> }
            { agregaAsiento && <AgregarAsientoAdminView setAsiento={ setAsientos }></AgregarAsientoAdminView> }
            { agregaCliente && <AgregarClienteAdminView setCliente={ setClientes }></AgregarClienteAdminView> }
            { agregaProyeccion && <AgregarProyeccionAdminView setProyeccion={ setProyecciones }></AgregarProyeccionAdminView> }
            { agregaReservacion && <AgregarReservacionAdminView setReservacion={ setReservaciones }></AgregarReservacionAdminView> }



        </div>
        <div className='button-agregar-pelicula'>
           { !agregaPeliculas ? <button onClick={ abrirAgregarPeliculaComponente }><span>1</span> Agregar pelicula</button>: <button onClick={ ocultarAgregarPeliculaComponente }><span>1</span> Ocultar Agregar pelicula</button> }
          { peliculas && <div className='button-agregar-sala'>
           { !agregaSala ? <button onClick={ abrirAgregarSalaComponente}><span>2</span> Agregar Sala</button>: <button onClick={ ocultarAgregarSalaComponente }><span>2</span> Ocultar Agregar Sala</button>  }            
           </div> }
           { salas && <div className='button-agregar-asiento'>
            { !agregaAsiento ? <button onClick={abrirAgregarAsientoComponente}><span>3</span> Agregar Asiento </button>: <button onClick={ocultarAgregarAsientoComponente}><span>3</span> </button> }
           </div> }
           { asientos && <div className='button-agregar-asiento'>
            {!agregaCliente ? <button onClick={abrirAgregarClienteComponente}><span>4</span>Agregar cliente </button>: <button onClick={ocultarAgregarClienteComponente}><span>4</span> Ocultar Agregar Cliente</button> }</div>}
            { clientes ? <button onClick={abrirAgregarProyeccionComponente}><span>5</span>Agregar proyeccion</button>: <button onClick={ocultarAgregarProyeccionComponente}><span>5</span>Ocultar Agregar proyeccion </button> }
            { clientes ? <button onClick={abrirAgregarReservacionesComponente}><span>6</span> Agregar reservacion </button>:<button onClick={ocultarAgregarReservacionesComponente}><span>6</span> Ocultar Agregar Reservacion </button>}
        </div>
        {/* <div>MostrarPeliculasAdminView</div> */}
        <DesplegarPeliculasComponent showPeliculas={ peliculas }></DesplegarPeliculasComponent>
    </>
    

  )
}
