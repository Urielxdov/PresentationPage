import React, { useEffect, useState } from "react";
import './Encabezado.component.css';
import Boton_videojuego from "../Reutilizables/Boton_videojuego/Boton_videojuego.component";

function Encabezado() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  const [desktop, setDesktop] = useState(window.innerWidth >= 720);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });

      setDesktop(window.innerWidth >= 720);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="header">
      <div className="header_logo">
        <h2>Uriel Galvan</h2>
      </div>

      

      <div className="header_navegacion">
        <a href="#" className="navegacion-item"><span>01.</span> Sobre mi</a>
        <a href="#" className="navegacion-item"><span>02.</span> Proyectos</a>
        <a href="#" className="navegacion-item"><span>03.</span> Contacto</a>

        <Boton_videojuego
          valorTexto={"Resumen"}
          fondo={"#207B20"}
        />
      </div>
    </header>
  );
}

export default Encabezado;
