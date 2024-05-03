import React, { useState } from 'react'

export const useForm = (initialValue = {}) => {
  
    const [formState, setFormState] = useState(initialValue);


    /* titulo: "",
    descripcion: "",
    duracion: 0,
    fechaEstreno: "2024-05-20",
    clasificacionGenero: "",
    clasificacionEdad: "",
    familiar: false  */

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [ name ]: value
        })
    }


    return {
        formState,
        onInputChange
    }

}
