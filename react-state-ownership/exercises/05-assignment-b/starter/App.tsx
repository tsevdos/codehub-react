import { useState } from "react";

// TODO: TaskForm and TaskList each own their own tasks array.
// Lift the shared tasks state up to App so both children read the same source of truth.

type Task = { id: number; text: string };

export default function App() {
  return (
    <div className="task-board">
      <h1>Task Board</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
}

function TaskForm() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState("");

  function handleAdd() {
    if (!input.trim()) return;
    setTasks((prev) => [...prev, { id: Date.now(), text: input.trim() }]);
    setInput("");
  }

  return (
    <div className="task-form">
      <input
        className="task-input"
        type="text"
        value={input}
        placeholder="New task…"
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
      />
      <button className="task-button" onClick={handleAdd}>
        Add
      </button>
      <p className="empty-state">Added here (local count): {tasks.length}</p>
    </div>
  );
}

function TaskList() {
  const [tasks] = useState<Task[]>([]);

  return (
    <div>
      <h2>Tasks ({tasks.length})</h2>
      {tasks.length === 0 ? (
        <p className="empty-state">No tasks yet.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>{task.text}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
