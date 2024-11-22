import { useEffect } from "react";
import { useTodos } from "../stores/todos";
import TodoItem from "./TodoItem";

const TodoApp = () => {
  const { input, updateInput, isLoading, todos, loadTodos, addTodo } = useTodos((state) => state);

  const handleAddTodo = (e) => {
    e.preventDefault();
    const todo = { id: todos.length + 1, title: input, done: false };

    addTodo(todo);
  };

  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <div className="container">
      <h1>Zustand</h1>
      <h2>My ToDos</h2>
      <hr />
      <form onSubmit={handleAddTodo}>
        Add ToDo: <input value={input} onChange={(e) => updateInput(e.target.value)} type="text" />
        <button type="submit">Add ToDo</button>
      </form>
      <br />
      {isLoading ? (
        <h5>Loading...</h5>
      ) : (
        <ul>
          {todos?.map((todo) => (
            <TodoItem key={todo.id} {...todo} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoApp;
