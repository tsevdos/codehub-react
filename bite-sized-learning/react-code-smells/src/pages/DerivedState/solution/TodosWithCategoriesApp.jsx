import { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import TodosList from "./ToDoList";

const initialTodos = [
  { done: false, title: "Learn React", category: "work" },
  { done: true, title: "Go to Code.Hub", category: "work" },
  { done: true, title: "Go out for a drink", category: "home" },
  { done: true, title: "Learn JavaScript", category: "work" },
  { done: true, title: "Learn TypeScript", category: "work" },
  { done: true, title: "Do the laundry", category: "home" },
  { done: false, title: "Prepare Christmas party", category: "home" },
];

const TodosWithCategoriesApp = () => {
  const [todos, setTodos] = useState(initialTodos);
  const workTodos = todos.filter(({ category }) => category === "work");
  const homeTodos = todos.filter(({ category }) => category === "home");

  return (
    <div>
      <h2>My ToDos</h2>
      <hr />
      <AddTodoForm todos={todos} setTodos={setTodos} />
      <hr />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <TodosList title="All ToDos" todos={todos} />
        <TodosList title="Work ToDos" todos={workTodos} />
        <TodosList title="Home ToDos" todos={homeTodos} />
      </div>
    </div>
  );
};

export default TodosWithCategoriesApp;
