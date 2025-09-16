
import React from "react";
import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    //Estructura de la pagina principal, donde se puede añadir un header y un footer
    <>
    


        <div className="flex flex-col min-h-screen bg-base-100">

          <main className="flex-grow">
            <Outlet />
          
          </main>

        </div>

    </>
  );
};

export default Root;
