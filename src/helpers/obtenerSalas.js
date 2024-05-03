import { urls } from "./urls";

export const obtenerSalas = async() => {
    const url = `${urls.admin}/salas`;
    const resp = await fetch(url);
    const data = await resp.json();
    
    console.log("SALAS OBTENIDAS", data);

    return data;
}