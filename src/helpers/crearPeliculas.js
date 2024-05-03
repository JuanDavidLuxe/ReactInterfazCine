import { urls } from "./urls";

export const crearPelicula = async(pelicula) => {

    const url = `${urls.admin}/crearpelicula`;
    const resp = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pelicula)
    })
    const data = await resp.json();
    
    return data;
}