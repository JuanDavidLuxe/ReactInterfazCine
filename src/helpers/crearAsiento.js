import { urls } from "./urls";

export const crearAsiento = async(Asiento) => {
    
    console.log("DATA A ENVIAR: ", Asiento);

    const url = `${urls.admin}/crearasiento`;
    const resp = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Asiento)
    })
    const data = await resp.json();
    
    return data;
}