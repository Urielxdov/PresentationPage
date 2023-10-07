import React, { useRef } from "react";
import "./Proyectos.component.css";

import { gsap } from "gsap/gsap-core";

function Proyectos() {
  const seleccionLenguaje = useRef(null);
  const barraEncabezado = useRef(null);
  const tecnologias = ["Angular", "React", "Java", "Python"];
  const proyectos = ["Prueba 1", "Prueba 2", "Prueba 3"];

  let lineaTiempo = gsap.timeline();

  const enfocarTecnologia = (idTecnologia) => {
    const mapa = obtenerMapa();
    let nodoObjetivo;
    let animacionesTerminadas = 0;

    tecnologias.forEach((tecnologia, index) => {
      const nodo = mapa.get("Tecnologia" + index);

      if (idTecnologia === "Tecnologia" + index) {
        nodoObjetivo = tecnologia;
      }

      gsap.to(nodo, {
        color: "transparent",
        ease: "power1.out",
        display: "none",
        duration: 1,
        delay: 0,
        onComplete: () => {
          animacionesTerminadas++;

          // Verificar si todas las animaciones han terminado
          if (animacionesTerminadas === tecnologias.length) {
            animarBarra(nodoObjetivo);
          }
        },
      });
    });
  };

  const animarBarra = (nodo) => {
    const propiedadesBarra = barraEncabezado.current;
    const botonTecnologias = obtenerMapa().get("Tecnologia");

    lineaTiempo.to(botonTecnologias, {
      opacity: 0,
      duration: 0.3,
      ease: "power1.out", // Easing para salida suave
      onComplete: () => {
        botonTecnologias.innerText = nodo;

        lineaTiempo.to(propiedadesBarra, {
          width: "70%",
          x: "30%",
          duration: 1,
        });

        lineaTiempo.to(botonTecnologias, {
          opacity: 1,
          duration: 0.3,
          ease: "power1.in", // Easing para entrada suave
        });

        lineaTiempo.to(propiedadesBarra, {
          y: 18,
          duration: 0.5,
          ease: "power1.inOut", // Easing para entrada y salida suave
        });
      },
    });
  };

  const desenfocarTecnologia = () => {
    let lineaTiempo = gsap.timeline();
    const propiedadesBarra = barraEncabezado.current;

    const botonTecnologias = obtenerMapa().get("Tecnologia");

    const mapa = obtenerMapa();

    lineaTiempo.to(botonTecnologias, {
      opacity: 0,
      duration: 0.3,
      ease: "power1.out", // Easing para salida suave
      onComplete: () => {
        botonTecnologias.innerText = "Tecnologias";

        lineaTiempo.to(propiedadesBarra, {
          y: 0,
          duration: 1,
          ease: "power1.inOut",
        });

        lineaTiempo.to(botonTecnologias, {
          opacity: 1,
          duration: 0.3,
          ease: "power1.in", // Easing para entrada suave
        });

        lineaTiempo.to(propiedadesBarra, {
          width: "100%",
          x: 0,
          duration: 0.5,
        });

        tecnologias.forEach((tecnologia, index) => {
          const nodo = mapa.get("Tecnologia" + index);
    
    
          gsap.to(nodo, {
            color: "#FFFFFF",
            ease: "power1.out",
            display: "block",
            duration: 0.5,
            delay : 1.5
          });
        });
      },
    });

    
  };

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
        <button
          className="tabla_encabezado-item"
          onClick={desenfocarTecnologia}
          ref={(nodo) => obtenerMapa().set("Tecnologia", nodo)}
        >
          Tecnologias
        </button>
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
