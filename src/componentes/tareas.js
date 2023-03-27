import React from "react";
import '../estilos/tareas.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea({ texto }) {
  return (
    <div className="tarea-contenedor">
      <div className="tarea-texto">
        {texto}
      </div>
      <div className="tarea-contenedor-iconos">
        <AiOutlineCloseCircle className="tarea-icono" />
      </div>
    </div>
  )
}

export default Tarea;