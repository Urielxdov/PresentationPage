import React from "react";
import './Boton_videojuego.component.css';





function Boton_videojuego({ valorTexto, fondo }) {


    const EstiloBoton = {
        backgroundColor: fondo,  // Mantenemos el color original como fondo
    };

    return (
        <button
            style={EstiloBoton}
            className="boton_3d"
        >
            {valorTexto}
        </button>
    )
}

export default Boton_videojuego;
