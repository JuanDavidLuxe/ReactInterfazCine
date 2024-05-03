import React from 'react'

import { Outlet } from "react-router-dom";

export const LoginClienteView = () => {
  return (
    <>
      <div className='navigation-admin'>
            <span>Bienvenido Juan - CLIENTE</span>
            <span>CINE MAGICO</span>
        </div>
        <div className='content-admin'>
          <Outlet />
        </div>
    </>
  )
}
