import { useState } from "react";
import { tasks } from "./tasks";

console.log(tasks);

function Tasklist() {
  const [tasks, setTasks] = useState([]);

  if (tasks.length === 0){

    return <h1> No hay tareas</h1>
  }

  return (
    <div>
      {tasks.map((tasks) => (
        <div>Tarea</div>
      ))}
    </div>
  );
}

export default Tasklist;
