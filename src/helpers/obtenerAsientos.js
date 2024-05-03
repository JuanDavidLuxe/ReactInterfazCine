import { urls } from "./urls";

export const obtenerAsientos = async() => {
    const url = `${urls.admin}/asientos`;
    const resp = await fetch(url);
    const data = await resp.json();

    return data;
}