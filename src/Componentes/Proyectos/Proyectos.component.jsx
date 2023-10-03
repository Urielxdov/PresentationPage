import React from "react";
import './Proyectos.component.css';

function Proyectos() {
    const tecnologias = ['Angular', 'React', 'Java', 'Python'];
    const proyectos = ['Prueba 1', 'Prueba 2', 'Prueba 3'];

    return (
        <section className="proyectos_tabla">
            <div className="tabla-barra"></div>
            <div className="tabla_encabezado">
                <p className="tabla_encabezado-item">Tecnologias</p>
                {tecnologias.map((tecnologia, index) => (
                    <p key={'Tecnologia' + index} className="tabla_encabezado-item">{tecnologia}</p>
                ))}
            </div>

            <div className="tabla_proyectos">
                {proyectos.map((proyecto, index) => (
                    <p key={'Proyecto' + index} className="tabla_proyectos-item">{proyecto}</p>
                ))}
            </div>

            <div className="tabla_proyectos-visualizacion">

                <p>ewufbghioerbghfiokwerbghfñoiaeruf</p>
            </div>
        </section>
    );
}

export default Proyectos;
