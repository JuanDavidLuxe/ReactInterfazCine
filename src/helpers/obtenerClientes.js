import { urls } from "./urls";

export const obtenerClientes = async() => {
    const url = `${urls.admin}/clientes`;
    const resp = await fetch(url);
    const data = await resp.json();

    return data;
}