import { useState } from 'react'

type Task = { id: number; text: string }

// ✅ SOLUTION: tasks state lifted to App.
// TaskForm receives an onAdd callback; TaskList receives the tasks array.
// Neither child manages the task list — App is the single source of truth.
export default function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  function handleAdd(text: string) {
    setTasks((prev) => [...prev, { id: Date.now(), text }])
  }

  return (
    <div
      style={{
        fontFamily: 'sans-serif',
        padding: '2rem',
        maxWidth: 600,
        margin: '0 auto',
      }}
    >
      <h1>Task Board</h1>
      <TaskForm onAdd={handleAdd} />
      <TaskList tasks={tasks} />
    </div>
  )
}

function TaskForm({ onAdd }: { onAdd: (text: string) => void }) {
  const [input, setInput] = useState('')

  function handleAdd() {
    if (!input.trim()) return
    onAdd(input.trim())
    setInput('')
  }

  return (
    <div style={{ marginBottom: '1rem' }}>
      <input
        type="text"
        value={input}
        placeholder="New task…"
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
        style={{ padding: '0.4rem', fontSize: '1rem', width: 300 }}
      />
      <button style={{ marginLeft: '0.5rem' }} onClick={handleAdd}>
        Add
      </button>
    </div>
  )
}

function TaskList({ tasks }: { tasks: Task[] }) {
  return (
    <div>
      <h2>Tasks ({tasks.length})</h2>
      {tasks.length === 0 ? (
        <p style={{ color: '#999' }}>No tasks yet.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>{task.text}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
