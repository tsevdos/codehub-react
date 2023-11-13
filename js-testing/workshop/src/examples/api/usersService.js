export default {
  fetchUserById: async (userID) => {
    const response = await fetch(`http://localhost:3001/user/${userID}`);
    const user = await response.json();

    return user;
  },
  fetchUserPosts: async (username) => {
    const response = await fetch(
      `http://localhost:3001/posts?user=${username}`
    );
    const posts = await response.json();

    return posts;
  },
};
