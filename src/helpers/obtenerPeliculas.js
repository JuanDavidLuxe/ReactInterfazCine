import { urls } from "./urls";

export const obtenerPeliculas = async() => {
    const url = `${urls.admin}/peliculas`;
    const resp = await fetch(url);
    const data = await resp.json();
    
    return data;
}