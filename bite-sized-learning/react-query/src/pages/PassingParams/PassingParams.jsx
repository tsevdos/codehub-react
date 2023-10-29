import { useState } from "react";

const PassingParams = () => {
  const [selectedTodo, setSelectedTodo] = useState("");
  const [todosState, setTodosState] = useState({ isLoading: false, todo: null });
  const { isLoading, todo } = todosState;

  const updateTodo = (e) => {
    setSelectedTodo(e.target.value);
  };

  const fetchTodo = async (id) => {
    setTodosState((state) => ({ ...state, isLoading: true }));
    const response = await fetch(`http://localhost:3001/todos/${id}`);
    const todo = await response.json();
    setTodosState((state) => ({ ...state, isLoading: false, todo }));
  };

  return (
    <div>
      <h2>Select ToDo</h2>
      <hr />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchTodo(selectedTodo);
        }}
      >
        Display Todo: <input type="text" value={selectedTodo} onChange={updateTodo} />
        <button type="submit">Fetch ToDo</button>
      </form>

      {isLoading && <p>Loading...</p>}
      {Boolean(todo) && !isLoading && (
        <ul>
          <li>{todo.done ? <strike>{todo.title}</strike> : <span>{todo.title}</span>}</li>
        </ul>
      )}
    </div>
  );
};

export default PassingParams;
