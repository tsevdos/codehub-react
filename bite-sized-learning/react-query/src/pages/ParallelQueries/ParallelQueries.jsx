import { useState, useEffect } from "react";
import { fetchTodos as fetchTodosAPI, fetchUser as fetchUserAPI } from "../../lib/api";

const ParallelQueries = () => {
  const [todosState, setTodosState] = useState({ isLoading: true, todos: [] });
  const { isLoading: isLoadingTodos, todos } = todosState;
  const [userState, setUserState] = useState({ isLoading: true, user: null });
  const { isLoading: isLoadingUser, user } = userState;

  useEffect(() => {
    const fetchTodos = async () => {
      const todos = await fetchTodosAPI();
      setTodosState((state) => ({ ...state, isLoading: false, todos }));
    };

    fetchTodos();
  }, []);

  useEffect(() => {
    const fetchTodos = async () => {
      const user = await fetchUserAPI();
      setUserState((state) => ({ ...state, isLoading: false, user }));
    };

    fetchTodos();
  }, []);

  return (
    <div>
      <h2>Parallel queries</h2>
      <hr />
      <h3>Todos</h3>

      {isLoadingTodos && <p>Loading todos...</p>}
      {Boolean(todos.length) && (
        <ul>
          {todos.map(({ title, done }) => (
            <li key={title}>{done ? <strike>{title}</strike> : <span>{title}</span>}</li>
          ))}
        </ul>
      )}

      <hr />
      <h3>User</h3>

      {isLoadingUser && <p>Loading user...</p>}
      {user && (
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
