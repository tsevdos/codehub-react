import { useState, useEffect } from "react";
import { fetchUser as fetchUserAPI, fetchUserTodos } from "../../lib/api";

const DependentQueries = () => {
  const [todosState, setTodosState] = useState({ isLoading: true, todos: [] });
  const { isLoading: isLoadingTodos, todos } = todosState;
  const [userState, setUserState] = useState({ isLoading: true, user: null });
  const { isLoading: isLoadingUser, user } = userState;

  useEffect(() => {
    const fetchUser = async () => {
      const user = await fetchUserAPI();
      setUserState((state) => ({ ...state, isLoading: false, user }));
    };

    fetchUser();
  }, []);

  useEffect(() => {
    const fetchTodos = async (username) => {
      const todos = await fetchUserTodos(username);
      setTodosState((state) => ({ ...state, isLoading: false, todos }));
    };

    if (user?.username) {
      fetchTodos(user.username);
    }
  }, [user?.username]);

  return (
    <div>
      <h2>Parallel queries</h2>
      <hr />

      {isLoadingUser && <p>Loading user...</p>}
      {user && (
        <h3>
          {user.name} ({user.username}) ToDos:
        </h3>
      )}

      {isLoadingTodos && <p>Loading todos...</p>}
      {Boolean(todos.length) && (
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
