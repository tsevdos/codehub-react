import { useState, useEffect } from "react";

const BasicGETExercise = () => {
  const [todosState, setTodosState] = useState({ isLoading: true, user: null, error: null });
  const { isLoading, user, error } = todosState;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("http://localhost:3001/user/1");
        const user = await response.json();
        setTodosState((state) => ({ ...state, isLoading: false, user }));
      } catch (error) {
        setTodosState((state) => ({ ...state, isLoading: false, error: true }));
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      <h2>Fetch User (exercise)</h2>
      <hr />
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong! Please try again...</p>}
      {Boolean(user) && (
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

export default BasicGETExercise;
