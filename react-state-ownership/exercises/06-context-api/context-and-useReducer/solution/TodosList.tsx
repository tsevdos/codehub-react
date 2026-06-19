import { useTodos } from "./TodoContext";

const TodosList = () => {
  const { state, dispatch } = useTodos();

  const toggleDone = (index: number) => {
    dispatch({ type: "TOGGLE_TODO", payload: index });
  };

  const deleteTodo = (index: number) => {
    dispatch({ type: "DELETE_TODO", payload: index });
  };

  return (
    <ul>
      {state.todos.map(({ title, done }, index) => (
        <li key={title}>
          <label>
            <input type="checkbox" checked={done} onChange={() => toggleDone(index)} />{" "}
            {done ? <s>{title}</s> : <span>{title}</span>}
          </label>{" "}
          <button onClick={() => deleteTodo(index)}>delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodosList;
