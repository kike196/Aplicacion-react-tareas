import './App.css';
import Logo from './componentes/logo.js';
import Tarea from './componentes/tareas';

function App() {
  return (
    <div className='Aplicacion-tareas'>
      < Logo />
      <div className='tarea-lista-principal'>
        <h1>Mis Tareas</h1>
        < Tarea texto = 'Aprender React' />
      </div>
    </div>
  );
}

export default App;
