import { useState, useEffect } from "react";
import { fetchUser as fetchUserAPI, fetchUserPosts } from "../../../lib/api";

const DependentQueriesExercise = () => {
  const [todosState, setTodosState] = useState({ isLoading: true, posts: [] });
  const { isLoading: isLoadingPosts, posts } = todosState;
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
    const fetchPosts = async (username) => {
      const posts = await fetchUserPosts(username);
      setTodosState((state) => ({ ...state, isLoading: false, posts }));
    };

    if (user?.username) {
      fetchPosts(user.username);
    }
  }, [user?.username]);

  return (
    <div>
      <h2>Parallel queries exercise</h2>
      <hr />

      {isLoadingUser && <p>Loading user...</p>}
      {user && (
        <h3>
          {user.name} ({user.username}) Posts:
        </h3>
      )}

      {isLoadingPosts && <p>Loading user posts...</p>}
      {Boolean(posts.length) && (
        <div>
          {posts.map(({ id, title, imgPath, body }) => (
            <div key={id}>
              <h4>{title}</h4>
              <div>
                <img src={imgPath} />
              </div>
              <p>{body}</p>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DependentQueriesExercise;
