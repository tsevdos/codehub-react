import { useFetchTodos, useFetchUser } from "./hooks";

const ParallelQueries = () => {
  const { status: todosStatus, data: todos } = useFetchTodos();
  const { status: userStatus, data: user } = useFetchUser();

  return (
    <div>
      <h2>Parallel queries</h2>
      <hr />
      <h3>Todos</h3>

      {todosStatus === "pending" && <p>Loading todos...</p>}
      {todosStatus === "success" && (
        <ul>
          {todos.map(({ title, done }) => (
            <li key={title}>{done ? <strike>{title}</strike> : <span>{title}</span>}</li>
          ))}
        </ul>
      )}

      <hr />
      <h3>User</h3>

      {userStatus === "pending" && <p>Loading user...</p>}
      {userStatus === "success" && (
        <div style={{ width: "300px" }}>
          <img alt={`${user.name} photo`} src={user.imgPath} width="300px" height="300px" />
          <h3>
            {user.name} ({user.username})
          </h3>
          <p>is admin: {user.admin ? "yes" : "no"}</p>
        </div>
      )}
    </div>
  );
};

export default ParallelQueries;
