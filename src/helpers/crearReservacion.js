import { urls } from "./urls";

export const crearReservacion = async(reservacion) => {
    
    console.log("DATA A ENVIAR: ", reservacion);

    const url = `${urls.admin}/crearreservacion`;
    const resp = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reservacion)
    })
    const data = await resp.json();
    
    return data;
}