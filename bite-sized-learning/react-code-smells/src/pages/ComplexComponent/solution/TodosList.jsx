const TodosList = ({ todos, setTodos }) => {
  const toggleDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    setTodos([...todos.slice(0, index), ...todos.slice(index + 1)]);
  };

  return (
    <ul>
      {todos.map(({ title, done }, index) => (
        <li key={title}>
          <label>
            <input type="checkbox" checked={done} onChange={() => toggleDone(index)} />{" "}
            {done ? <strike>{title}</strike> : <span>{title}</span>}
          </label>{" "}
          <button onClick={() => deleteTodo(index)}>delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodosList;
