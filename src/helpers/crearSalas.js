import { urls } from "./urls";

export const crearSala = async(sala) => {

    const url = `${urls.admin}/crearsala`;
    const resp = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(sala)
    })
    const data = await resp.json();
    
    return data;
}