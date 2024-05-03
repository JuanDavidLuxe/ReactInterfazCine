import React from 'react'
import '../../styles/loginAdmin.css';

import { Outlet } from "react-router-dom";

export const LoginAdminView = () => {
  return (
    <>

        <div className='navigation-admin'>
            <span>Bienvenido Juan - ADMIN</span>
            <span>CINE MAGICO</span>
        </div>
        <div className='content-admin'>
          <Outlet />
        </div>

    </>
  )
}
