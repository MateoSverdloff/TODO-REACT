import React, { useState } from "react";

const Formulario = ({ agregarTarea }) => {
  const [nuevaTarea, setNuevaTarea] = useState("");

  const handleAgregarTarea = () => {
    const tarea = prompt("Ingrese el nombre de la nueva tarea:");
    if (tarea !== null & tarea !== "") {
      agregarTarea(tarea);
    }
  };

  return (
    <div>
      <button onClick={handleAgregarTarea}>Agregar tarea</button>
    </div>
  );
};

export default Formulario;
