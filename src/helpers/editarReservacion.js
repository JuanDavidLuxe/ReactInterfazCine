import { urls } from "./urls";

export const editarReservacion = async(id, reservacion) => {

    const url = `${urls.admin}/actualizar/${id}`;
    const resp = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reservacion)
    })
    const data = await resp.json();
    
    return data;
}