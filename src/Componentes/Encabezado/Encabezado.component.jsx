import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import './Encabezado.component.css';
import Boton_videojuego from "../Reutilizables/Boton_videojuego/Boton_videojuego.component";

const escribirTexto = (elemento, texto) => {
  const intervalo = 100; // Intervalo entre cada letra en milisegundos
  let contador = 0;

  const interval = setInterval(() => {
    elemento.innerText += texto[contador];
    contador++;

    if (contador === texto.length) {
      clearInterval(interval);
    }
  }, intervalo);
};

function Encabezado() {
  const animacionLogo = useRef(null);
  const animacionNavegacion = useRef(null);
  let lineaTiempoEntrada = gsap.timeline();

  const animarEntrada = () => {
    lineaTiempoEntrada.from(animacionLogo.current, {
      y: -50,
      duration: 1
    });

    lineaTiempoEntrada.to(animacionLogo.current, {
      y: 0,
      duration: 2
    });

    // Animar escritura para cada elemento de navegación
    const navegacionItems = animacionNavegacion.current.querySelectorAll('.navegacion-item');
    navegacionItems.forEach((item, index) => {
      gsap.from(item, {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: index * 0.5,
        onComplete: () => escribirTexto(item, item.innerText)
      });
    });
  };

  useEffect(() => {
    const handleResize = () => {
      // Tu código para el manejo del tamaño de la ventana
    };

    animarEntrada();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="header">
      <div className="header_logo" id="logo" ref={animacionLogo}>
        <h2>Uriel Galvan</h2>
      </div>

      <div className="header_navegacion" id="barra-navegacion" ref={animacionNavegacion}>
        <a href="#" className="navegacion-item"><span>01.</span> Sobre mi</a>
        <a href="#" className="navegacion-item"><span>02.</span> Proyectos</a>
        <a href="#" className="navegacion-item"><span>03.</span> Contacto</a>
        <Boton_videojuego
          valorTexto={'Vamos a probar'}
        />
      </div>
    </header>
  );
}

export default Encabezado;
