import { useState } from "react";

const initialTodos = [
  {
    done: false,
    title: "Learn React",
  },
  {
    done: true,
    title: "Go to Code.Hub",
  },
  {
    done: false,
    title: "Go out for a drink",
  },
];

const App = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [text, setText] = useState("");

  // 1. Complete the add todo functionality
  const addTodo = () => {
  };

  // 2. Complete the toggle todo functionality
  const toggleTodo = () => {
  };

  // 3. Complete the delete todo functionality
  const deleteTodo = () => {
  };

  return (
    <main className="todo-app">
      <h1>Todo App</h1>

      <form className="todo-form" onSubmit={addTodo}>
        <label htmlFor="new-todo">New todo</label>
        <input id="new-todo" type="text" value={text} onChange={(event) => setText(event.target.value)} required />
        <button type="submit">Add</button>
      </form>

      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={`${index}-${todo.title}`} className="todo-item">
            <label className="todo-label">
              <input type="checkbox" checked={todo.done} onChange={() => toggleTodo(index)} />
              {todo.done ? <s className="todo-text">{todo.title}</s> : <span className="todo-text">{todo.title}</span>}
            </label>
            <button type="button" className="todo-delete" onClick={() => deleteTodo(index)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default App;
