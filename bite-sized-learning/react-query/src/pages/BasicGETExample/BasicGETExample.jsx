import { useState, useEffect } from "react";

const BasicGETExample = () => {
  const [todosState, setTodosState] = useState({ isLoading: true, data: [], error: null });
  const { isLoading, data: todos, error } = todosState;

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch("http://localhost:3001/todos?user=tsevdos");

        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        const data = await response.json();
        setTodosState((state) => ({ ...state, isLoading: false, data }));
      } catch (error) {
        setTodosState((state) => ({ ...state, isLoading: false, error: true }));
      }
    };

    fetchTodos();
  }, []);

  return (
    <div>
      <h2>My ToDos (Get request)</h2>
      <hr />
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong! Please try again...</p>}
      {Boolean(todos.length) && (
        <ul>
          {todos.map(({ title, done }) => (
            <li key={title}>{done ? <strike>{title}</strike> : <span>{title}</span>}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BasicGETExample;
