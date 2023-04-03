import React, { useState, useEffect } from "react";
import TareaFormulario from "./TareaFormulario";
import Tarea from "./Tarea";
import '../estilos/listaDeTareas.css';

function ListaDeTareas () {

  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    const tareasGuardadas = JSON.parse(localStorage.getItem('tareas'));
    if (tareasGuardadas) {
      setTareas(tareasGuardadas);
    } else {
      setTareas([]);
    }
  }, []);

  // La función localStorage es una API de almacenamiento en el navegador que permite guardar datos en el dispositivo del usuario. El método getItem() de localStorage permite leer un elemento específico almacenado en localStorage. 

  const agregarTarea = tarea => {
    if (tarea.texto.trim()) {  // Verificar que la tarea no esté vacía
      tarea.texto = tarea.texto.trim(); // Si hay texto en la tarea, quita espacios en blanco innecesarios
      const tareasActualizadas = [tarea, ...tareas]; // Actualizar la lista de tareas agregando la nueva tarea al inicio
      setTareas(tareasActualizadas); // Actualizar el estado de las tareas con la lista actualizada
      localStorage.setItem('tareas', JSON.stringify(tareasActualizadas)); //guarda la tarea en localStorage
    }
  };

  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !==id); // Filtrar la lista de tareas para obtener todas las tareas excepto la que se va a eliminar
    setTareas(tareasActualizadas); // Actualizar el estado de las tareas con la lista actualizada
    localStorage.setItem('tareas', JSON.stringify(tareasActualizadas)); //elimina la tarea de localStorage
  };

  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => { // Usar el método map para crear una nueva lista de tareas actualizada
      if (tarea.id === id) { // Si la tarea actual es la que se está buscando, cambiar su estado de completada
        tarea.completada = !tarea.completada;
      }
      return tarea;
    })
    setTareas(tareasActualizadas); // Actualizar el estado de las tareas con la lista actualizada
    localStorage.setItem('tareas', JSON.stringify(tareasActualizadas)); //busca la tarea en localStorage
  };

  return (

    <>
      < TareaFormulario onSubmit={agregarTarea} />
      <div className="tarea-lista-contenedor">
      {
        tareas.map((tarea) =>
          < Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            eliminarTarea={eliminarTarea}
            completarTarea={completarTarea}
          />
        )
      }
      </div>
    </>
  );
}

export default ListaDeTareas;