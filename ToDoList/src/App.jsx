import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");

  // Adicionar tarefa
  function handleAddTask(e) {
    e.preventDefault();
    if (input.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: input,
      completed: false
    };

    setTasks([...tasks, newTask]);
    setInput("");
  }

  // Marcar como concluída
  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  // Deletar tarefa
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  // Filtro
  const filteredTasks = tasks.filter((task) => {
    if (filter === "pending") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial" }}>
      <h1>ToDo List</h1>

      {/* Formulário */}
      <form onSubmit={handleAddTask}>
        <input
          placeholder="Digite uma tarefa..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>

      {/* Filtros */}
      <div style={{ marginTop: "10px" }}>
        <button onClick={() => setFilter("all")}>Todas</button>
        <button onClick={() => setFilter("pending")}>Pendentes</button>
        <button onClick={() => setFilter("completed")}>Concluídas</button>
      </div>

      {/* Lista */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {filteredTasks.map((task) => (
          <li key={task.id} style={{ marginTop: "10px" }}>
            <span
              onClick={() => toggleTask(task.id)}
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                cursor: "pointer",
                marginRight: "10px"
              }}
            >
              {task.text}
            </span>

            <button onClick={() => deleteTask(task.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}