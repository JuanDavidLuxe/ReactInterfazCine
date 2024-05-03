import { urls } from "./urls";

export const obtenerProyecciones = async() => {
    const url = `${urls.admin}/proyeccion`;
    const resp = await fetch(url);
    const data = await resp.json();

    return data;
}