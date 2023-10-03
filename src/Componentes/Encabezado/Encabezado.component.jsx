import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import './Encabezado.component.css';


import Boton_videojuego from "../Reutilizables/Boton_videojuego/Boton_videojuego.component";



function Encabezado() {
  const animacionLogo = useRef(null);
  const animacionNavegacion = useRef(null);
  let lineaTiempoEntrada = gsap.timeline();

  const animarEntrada = () => {

    lineaTiempoEntrada.to(animacionLogo.current, {
      top: 0,
      duration: 2
    });

  }

  const animarNavegacion = () => {
    const navegacionElementos = animacionNavegacion.current.querySelectorAll('.navegacion-item');
    navegacionElementos.forEach(item => {
      lineaTiempoEntrada.to(item, {
        opacity : 1,
        top : 0,
        duration : 0.5
      })
    })
  }


  useEffect(() => {
    const handleResize = () => {
      // Tu código para el manejo del tamaño de la ventana
    };

    animarEntrada();

    window.addEventListener('resize', handleResize);

    animarNavegacion()

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
        <a href="#" className="navegacion-item"><span className="item-span">01.</span> Sobre mi</a>
        <a href="#" className="navegacion-item"><span className="item-span">02.</span> Proyectos</a>
        <a href="#" className="navegacion-item"><span className="item-span">03.</span> Contacto</a>
        <Boton_videojuego
          valorTexto={'Vamos a probar'}
        />
      </div>

    </header>

  );
}

export default Encabezado;
