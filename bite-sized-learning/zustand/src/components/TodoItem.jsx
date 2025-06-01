import { useTodos } from "../stores/todos";

// eslint-disable-next-line react/prop-types
const TodoItem = ({ id, title, done }) => {
  const { toggleTodo, deleteTodo } = useTodos((state) => state);

  return (
    <li>
      <label>
        <input type="checkbox" checked={done} onChange={() => toggleTodo(id)} />
        &nbsp;
        {done ? <strike>{title}</strike> : <span>{title}</span>}
        <button onClick={() => deleteTodo(id)}>delete</button>
      </label>
    </li>
  );
};

export default TodoItem;
