import { useState, useEffect } from "react";
import AddTodoForm from "./AddTodoForm";
import "./TodoApp.css";

const initialTodos = [
  { done: false, title: "Learn React", category: "work" },
  { done: false, title: "Do a presentation", category: "work" },
  { done: true, title: "Go out for a drink", category: "home" },
  { done: true, title: "Learn JavaScript", category: "work" },
  { done: false, title: "Learn TypeScript", category: "work" },
  { done: true, title: "Do the laundry", category: "home" },
  { done: false, title: "Prepare Christmas party", category: "home" },
];

export type Todo = {
  title: string;
  category: string;
  done: boolean;
};

export default function App() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [workTodos, setWorkTodos] = useState<Todo[]>([]);
  const [homeTodos, setHomeTodos] = useState<Todo[]>([]);
  const [totalTodos, setTotalTodos] = useState(0);
  const [doneTodos, setDoneTodos] = useState(0);
  const [totalWorkTodos, setTotalWorkTodos] = useState(0);
  const [doneWorkTodos, setDoneWorkTodos] = useState(0);
  const [totalHomeTodos, setTotalHomeTodos] = useState(0);
  const [doneHomeTodos, setDoneHomeTodos] = useState(0);

  const toggleTodo = (title: string) => {
    const newTodos = todos.map(todo =>
      todo.title === title ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newTodos);
  };

  useEffect(() => {
    const wTodos = todos.filter(({ category }) => category === "work");
    setWorkTodos(wTodos);
  }, [todos]);

  useEffect(() => {
    const hTodos = todos.filter(({ category }) => category === "home");
    setHomeTodos(hTodos);
  }, [todos]);

  useEffect(() => {
    setTotalTodos(todos.length);
  }, [todos]);

  useEffect(() => {
    const noOfDoneTodos = todos.filter(({ done }) => done).length;
    setDoneTodos(noOfDoneTodos);
  }, [todos]);

  useEffect(() => {
    setTotalWorkTodos(workTodos.length);
  }, [workTodos]);

  useEffect(() => {
    const noOfDoneWorkTodos = workTodos.filter(({ done }) => done).length;
    setDoneWorkTodos(noOfDoneWorkTodos);
  }, [workTodos]);

  useEffect(() => {
    const noOfHomeTodos = homeTodos.length;
    setTotalHomeTodos(noOfHomeTodos);
  }, [homeTodos]);

  useEffect(() => {
    const noOfDoneHomeTodos = homeTodos.filter(({ done }) => done).length;
    setDoneHomeTodos(noOfDoneHomeTodos);
  }, [homeTodos]);

  return (
    <div className="todo-app-container">
      <h2>My ToDos</h2>
      <hr />
      <AddTodoForm todos={todos} setTodos={setTodos} />
      <hr />
      <div className="todo-sections">
        <div className="todo-section">
          <h3>
            All ToDos ({doneTodos}/{totalTodos})
          </h3>
          <ul className="todo-list">
            {todos.map(({ title, done }) => (
              <li key={title} className="todo-item">
                <label>
                  <input type="checkbox" checked={done} onChange={() => toggleTodo(title)} />
                  {done ? <s>{title}</s> : <span>{title}</span>}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className="todo-section">
          <h3>
            Work ToDos ({doneWorkTodos}/{totalWorkTodos})
          </h3>
          <ul className="todo-list">
            {workTodos.map(({ title, done }) => (
              <li key={title} className="todo-item">
                <label>
                  <input type="checkbox" checked={done} onChange={() => toggleTodo(title)} />
                  {done ? <s>{title}</s> : <span>{title}</span>}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className="todo-section">
          <h3>
            Home ToDos ({doneHomeTodos}/{totalHomeTodos})
          </h3>
          <ul className="todo-list">
            {homeTodos.map(({ title, done }) => (
              <li key={title} className="todo-item">
                <label>
                  <input type="checkbox" checked={done} onChange={() => toggleTodo(title)} />
                  {done ? <s>{title}</s> : <span>{title}</span>}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
