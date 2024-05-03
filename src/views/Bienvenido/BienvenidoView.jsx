import React from 'react'

import { Outlet } from "react-router-dom";

export const BienvenidoView = () => {
  return (
    <>
      <div>BienvenidoView</div>
      <div>
          <Outlet />
      </div>
    </>
    
    
  )
}
