import React, { useRef } from "react";
import "./Proyectos.component.css";

import { gsap } from "gsap/gsap-core";

function Proyectos() {
  const seleccionLenguaje = useRef(null);
  const barraEncabezado = useRef(null);
  const tecnologias = ["Angular", "React", "Java", "Python"];
  const proyectos = ["Prueba 1", "Prueba 2", "Prueba 3"];

  const enfocarTecnologia = (idTecnologia) => {
    const mapa = obtenerMapa();



    tecnologias.forEach((tecnologia, index) => {
      const lineaTiempo = gsap.timeline();
      const nodo = mapa.get("Tecnologia" + index);
      if (nodo) {
        if ("Tecnologia" + index === idTecnologia) {
          lineaTiempo.to(nodo, {
            position : "relative",
            // fontSize : 30,
            maxWidth : "20%",
            flexGrow : 0,
            top: 0,
            left: 0,
            duration : 1
          });
        } else {
          lineaTiempo.from(nodo, {
            color : "#FFFFFF",
            delay : 0
          })
          lineaTiempo.to(nodo, {
            color: "transparent",
            duration: 0.5,
            ease: "power1.out",
            delay: 0
          });
          setTimeout(()=> {
            nodo.style.display = "none"
          }, 2000)
        }
      }
    });
    animarBarra();
  };

  const animarBarra = ()=> {
    const propiedadesBarra = barraEncabezado.current;
    
    gsap.to(propiedadesBarra, {
      y : 20,
      duration : 1
    })
  }

  const obtenerMapa = () => {
    if (!seleccionLenguaje.current) {
      seleccionLenguaje.current = new Map();
    }
    return seleccionLenguaje.current;
  };

  const marcarProyecto = (idElemento) => {
    const elemento = document.getElementById(idElemento);

    elemento.style.borderLeft = "1px solid #346e34";
  };

  return (
    <section className="proyectos_tabla">
      <div className="tabla-barra" ref={barraEncabezado}></div>
      <div className="tabla_encabezado" id="header_proyectos">
        <button className="tabla_encabezado-item" ref={ nodo => obtenerMapa().set("Tecnologia", nodo)}>Tecnologias</button>
        {tecnologias.map((tecnologia, index) => (
          <button
            onClick={() => enfocarTecnologia("Tecnologia" + index)}
            className="tabla_encabezado-item"
            key={"Tecnologia" + index}
            ref={(nodo) => {
              const mapa = obtenerMapa();
              if (nodo) {
                mapa.set("Tecnologia" + index, nodo);
              } else {
                mapa.delete("Tecnologia" + index);
              }
            }}
          >
            {tecnologia}
          </button>
        ))}
      </div>

      <div className="tabla_proyectos">
        {proyectos.map((proyecto, index) => (
          <p
            key={"Proyecto" + index}
            id={"proyecto" + index}
            className="tabla_proyectos-item"
            onClick={() => marcarProyecto("proyecto" + index)}
          >
            {proyecto}
          </p>
        ))}
      </div>

      <div className="tabla_proyectos-visualizacion">
        <p>ewufbghioerbghfiokwerbghfñoiaeruf</p>
      </div>
    </section>
  );
}

export default Proyectos;
