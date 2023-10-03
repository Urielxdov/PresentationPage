import logo from './logo.svg';
import './App.css';

import Encabezado from './Componentes/Encabezado/Encabezado.component';

import Presentacion from './Componentes/Presentacion/Presentacion.component';
import Proyectos from './Componentes/Proyectos/Proyectos.component';

function App() {
  return (
    <>
      <Encabezado />

      <Presentacion/>

      <Proyectos/>
    </>
  );
}

export default App;
