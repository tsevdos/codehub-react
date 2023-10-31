import { useFetchUserTodos, useFetchUser } from "./hooks";

const DependentQueries = () => {
  const { status: userStatus, data: user } = useFetchUser();
  const { status: todosStatus, data: todos } = useFetchUserTodos(user?.username);

  return (
    <div>
      <h2>Parallel queries</h2>
      <hr />
      {userStatus === "pending" && <p>Loading user...</p>}
      {userStatus === "success" && (
        <h3>
          {user.name} ({user.username}) ToDos:
        </h3>
      )}
      {todosStatus === "pending" && <p>Loading todos...</p>}
      {todosStatus === "success" && (
        <ul>
          {todos.map(({ title, done }) => (
            <li key={title}>{done ? <strike>{title}</strike> : <span>{title}</span>}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DependentQueries;
