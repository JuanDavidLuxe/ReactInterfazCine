import { urls } from "./urls";

export const obtenerReservacionesPorCliente = async(clienteId) => {
    console.log("que llega en clienteid: ", clienteId);
    const url = `${urls.admin}/reservaciones/cliente/${Number(clienteId.nombre)}`;
    const resp = await fetch(url);
    const data = await resp.json();

    console.log("data que devuelve: ", data);
    return data;
}