import { useState, useEffect, type ChangeEvent, type SubmitEvent } from "react";

type Todo = {
  title: string;
  done: boolean;
};

const App = () => {
  const [toDoInput, setToDoInput] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const updateInput = (e: ChangeEvent<HTMLInputElement>) => {
    setToDoInput(e.target.value);
  };

  const addToDo = (e: SubmitEvent) => {
    e.preventDefault();
    const newToDo = {
      title: toDoInput,
      done: false,
    };
    setToDoInput("");
    setTodos([...todos, newToDo]);
  };

  const toggleDone = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };

  const deleteTodo = (index: number) => {
    setTodos([...todos.slice(0, index), ...todos.slice(index + 1)]);
  };

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
      <form onSubmit={addToDo}>
        Add ToDo: <input type="text" value={toDoInput} onChange={updateInput} />
        <button type="submit">Add ToDo</button>
      </form>
      <ul>
        {todos.map(({ title, done }, index) => (
          <li key={title}>
            <label>
              <input type="checkbox" checked={done} onChange={() => toggleDone(index)} />{" "}
              {done ? <s>{title}</s> : <span>{title}</span>}
            </label>{" "}
            <button onClick={() => deleteTodo(index)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;