import React from "react";
import Task from "./task";

class ListTask extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var tareas = [
      {
        description: "Almuerzo ejecutivo ",
        responsible: {
          name: "Santiago Carrillo",
          email: "sancarbar@gmail",
        },
        status: "ready",
        dueDate: 156464645646,
      },
      {
        description: "Reunión de Ejecutivos",
        responsible: {
          name: "Maria Gil",
          email: "Maria@gmail",
        },
        status: "ready",
        dueDate: 156464645646,
      },
      {
        description: "Juego de Futbol",
        responsible: {
          name: "juan cortez",
          email: "juan@gmail",
        },
        status: "finish",
        dueDate: 156464645646,
      },
      {
        description: "Cita medica",
        responsible: {
          name: "jose perez",
          email: "jose@gmail",
        },
        status: "progress",
        dueDate: 156464645646,
      },
      {
        description: "proyecto",
        responsible: {
          name: "camilo quiroga",
          email: "camilo@gmail",
        },
        status: "ready",
        dueDate: 156464645646,
      },
    ];

    return (
      <div>
        {tareas.map((evento, i) => (
          <Task task={evento}></Task>
        ))}
      </div>
    );
  }
}

export default ListTask;
