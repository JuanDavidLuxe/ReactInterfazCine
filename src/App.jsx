import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//Vistas
import { LoginAdminView } from './views/admin/LoginAdminView';
import { ErrorView } from './views/Error/ErrorView';
import { BienvenidoView } from './views/Bienvenido/BienvenidoView';
import { LoginClienteView } from './views/cliente/LoginClienteView';
import { AgregarPeliculasAdminView } from './views/admin/AgregarPeliculasAdminView';
import { MostrarPeliculasAdminView } from './views/admin/MostrarPeliculasAdminView';
import { AgregarReservacionCliente } from './views/cliente/AgregarReservacionCliente';
import { VerReservacionesCliente } from './views/cliente/VerReservacionesCliente';

const router = createBrowserRouter([
  {
    path: "/",
    element: <BienvenidoView />,
    errorElement: <ErrorView />,

  },
  {
    path: "/admin",
    element: <LoginAdminView />,
    errorElement: <ErrorView />,
    children:[
      {
        path: "panel",
        element: <MostrarPeliculasAdminView/>,
      },
    ]
    
  },
  {
    path: "/cliente",
    element: <LoginClienteView />,
    errorElement: <ErrorView />,
    children:[
      {
        path: "panel",
        element: <AgregarReservacionCliente/>,
      },
      {
        path: "verreservaciones",
        element: <VerReservacionesCliente/>,
      },
    ]
    
  },
  
  
]);



function App() {
  


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
