import React from "react";
import './Presentacion.component.css';


function Presentacion() {



    return (
        <section className="presentacion">
            <p className="presentacion-parrafo verde">Hola, mi nombre es</p>
            <h2 className="presentacion-titulo blanco">Uriel Galvan</h2>
            <h2 className="presentacion-titulo verde">Programador web</h2>
            <p className="presentacion-parrafo blanco">Soy estudiante de ingenieria en sistemas computacionales,
                actualmente me encuentro trabajando en proyectos personales
                con el fin de mejorar mis habilidades de programacion
            </p>
        </section>
    )
}

export default Presentacion;