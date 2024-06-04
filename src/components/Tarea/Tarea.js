import React from "react";

const Tarea = ({ tarea, marcarTarea, borrarTarea }) => {
  return (
    <div className="checkbox-wrapper-46">
      <input
        type="checkbox"
        id={tarea.id}
        className="inp-cbx"
        onChange={() => marcarTarea(tarea.id)}
      />
      <label htmlFor={tarea.id} className="cbx">
        <span>
          <svg viewBox="0 0 12 10" height="10px" width="12px">
            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
          </svg>
        </span>
        <span>{tarea.nombre}</span>
        <br></br>
        <br></br>
        <button onClick={() => borrarTarea(tarea.id)}>Borrar</button>
      </label>
    </div>
  );
};

export default Tarea;