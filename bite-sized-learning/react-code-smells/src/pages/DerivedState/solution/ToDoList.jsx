const TodosList = ({ title, todos }) => {
  const noOftotal = todos.length;
  const noOfDone = todos.filter(({ done }) => done).length;

  return (
    <div>
      <h3>
        {title} ({noOfDone}/{noOftotal})
      </h3>
      <ul>
        {todos.map(({ title, done }) => (
          <li key={title}>
            <label>{done ? <strike>{title}</strike> : <span>{title}</span>}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodosList;
