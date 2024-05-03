import { urls } from "./urls";

export const crearProyeccion = async(proyeccion) => {

    console.log("datos en proyeccion: ", proyeccion);

    const url = `${urls.admin}/crearproyeccion`;
    const resp = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(proyeccion)
    })
    const data = await resp.json();
    
    return data;
}