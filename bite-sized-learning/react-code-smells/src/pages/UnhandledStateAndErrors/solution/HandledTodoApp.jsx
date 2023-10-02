import { useState, useEffect } from "react";

const HandledTodoApp = () => {
  const [todosState, setTodosState] = useState({ isLoading: true, data: [], error: null });
  const { isLoading, data: todos, error } = todosState;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.npoint.io/7b0685d9058f9f9c0aa4");
        const data = await response.json();
        setTodosState((state) => ({ ...state, isLoading: false, data }));
      } catch (error) {
        console.error(error);
        setTodosState((state) => ({ ...state, isLoading: false, error }));
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>My ToDos</h2>
      <hr />
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong... Please retry...</p>}
      {Boolean(todos.length) && (
        <ul>
          {todos.map(({ title, done }) => (
            <li key={title}>
              <label>{done ? <strike>{title}</strike> : <span>{title}</span>}</label>{" "}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HandledTodoApp;
