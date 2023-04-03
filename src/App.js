import './App.css';
import Logo from './componentes/Logo.js';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className='Aplicacion-tareas'>
      < Logo />
      <div className='tarea-lista-principal'>
        <h1>Mis Tareas</h1>
        < ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
