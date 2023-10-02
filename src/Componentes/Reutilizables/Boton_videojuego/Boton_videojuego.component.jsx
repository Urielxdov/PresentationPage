import React from "react";
import './Boton_videojuego.component.css';





function Boton_videojuego({ valorTexto }) {


    return (
        <button
            className="boton boton-verde"
        >
            {valorTexto}
        </button>
    )
}

export default Boton_videojuego;
