import { useState, useEffect } from "react";

const UnhandledStateAndErrors = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.npoint.io/7b0685d9058f9f9c0aa4");
      const data = await response.json();
      setTodos(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>My ToDos</h2>
      <hr />
      <ul>
        {todos.map(({ title, done }) => (
          <li key={title}>
            <label>{done ? <strike>{title}</strike> : <span>{title}</span>}</label>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UnhandledStateAndErrors;
