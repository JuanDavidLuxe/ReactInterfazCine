import { urls } from "./urls";

export const obtenerReservaciones = async() => {
    const url = `${urls.admin}/reservaciones`;
    const resp = await fetch(url);
    const data = await resp.json();

    console.log("RESERVACIONES SOLICITADAS", data);

    return data;
}