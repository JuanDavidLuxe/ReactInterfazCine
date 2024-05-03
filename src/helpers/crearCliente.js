import { urls } from "./urls";

export const crearCliente = async(cliente) => {

    const url = `${urls.admin}/crearcliente`;
    const resp = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cliente)
    })
    const data = await resp.json();
    
    return data;
}