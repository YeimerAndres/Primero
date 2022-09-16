import "./task.css";

export function Taskcard({ ready }) {
  return (
    <div className="card">
      <h1>Mi Primera tarea</h1>

      <span className={ready ? "green" : "red"}>
        {ready ? "Tarea realizada" : "tarea pendiente"}
      </span>
    </div>
  );
}
