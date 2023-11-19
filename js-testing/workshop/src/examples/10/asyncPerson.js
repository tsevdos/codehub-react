import TodosService from "../api/todosService";
import UsersService from "../api/usersService";

class Person {
  constructor(id) {
    this.id = id;
    this.profile = null;
    this.todos = null;
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

  async fetchTodos() {
    const todos = await TodosService.fetchUserTodos(this.profile.username);

    this.todos = todos;
  }

  getTodos() {
    return this.todos;
  }
}

export default Person;
