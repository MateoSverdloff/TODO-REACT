import React, { useState } from "react";
import "./style.css";
import Tarea from "./components/Tarea/Tarea.js";
import Formulario from "./components/Formulario/Formulario.js";
import obtenerFecha from "./components/obtenerFecha/obtenerFecha.js";

const App = () => {
  const [tareas, setTareas] = useState([
    {
      id: 0,
      nombre: "Cocinar",
      fecha: obtenerFecha(),
    },
    {
      id: 1,
      nombre: "Limpiar",
      fecha: obtenerFecha(),
    },
  ]);

  const [primeraTareaMarcada, setPrimeraTareaMarcada] = useState(true);

  const marcarTarea = (idTareaMarcada) => {
    if (primeraTareaMarcada) {
      setPrimeraTareaMarcada(false);
      const tareaMarcada = tareas.find((tarea) => tarea.id === idTareaMarcada);
      alert(
        `La primera tarea marcada como completa es: "${tareaMarcada.nombre}"`
      );
    }
  };

  const agregarTarea = (nombreTarea) => {
    const nuevaTarea = {
      id: tareas.length,
      nombre: nombreTarea,
      fecha: obtenerFecha(),
    };
    setTareas([...tareas, nuevaTarea]);
  };

  const borrarTarea = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };

  return (
    <div>
      <div className="titlex">
        <h2>Escribir tareas a hacer:</h2>
      </div>
      <Formulario agregarTarea={agregarTarea}/>
      <div id="check">
        {tareas.map((tarea) => (
          <Tarea
            key={tarea.id}
            tarea={tarea}
            marcarTarea={marcarTarea}
            borrarTarea={borrarTarea}
          />
        ))}
      </div>
    </div>
  );
};

export default App;