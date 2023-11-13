import UsersService from "../api/usersService";

class User {
  constructor(id) {
    this.id = id;
    this.profile = null;
    this.posts = null;
  }

  getID() {
    return this.id;
  }

  async fetchUserProfile() {
    const profile = await UsersService.fetchUserById(this.getID());

    this.profile = profile;
  }

  getProfile() {
    return this.profile;
  }

  async fetchPosts() {
    const posts = await UsersService.fetchUserPosts(this.profile.username);

    this.posts = posts;
  }

  getPosts() {
    return this.posts;
  }
}

export default User;
