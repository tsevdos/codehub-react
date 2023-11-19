import { jest } from "@jest/globals";
import Person from "./asyncPerson";
import TodosService from "../api/todosService";
import UsersService from "../api/usersService";

// Mock services
jest.mock("../api/todosService");
jest.mock("../api/usersService");

const mockedProfile = {
  JWT: "1234567890",
  admin: true,
  id: 1,
  imgPath: "https://avatars1.githubusercontent.com/u/175707",
  name: "John Tsevdos",
  username: "tsevdos",
};

const mockedTodos = [
  {
    id: 1,
    user: "tsevdos",
    title: "Learn React",
    done: false,
  },
  {
    id: 2,
    user: "tsevdos",
    title: "Go to Code.Hub",
    done: true,
  },
  {
    id: 3,
    user: "tsevdos",
    title: "Go out for a drink",
    done: false,
  },
];

describe("asyncPerson", () => {
  let person;

  beforeEach(() => {
    person = new Person(1);
  });

  afterEach(() => {
    person = null;
  });

  it("creates a person with the correct defaults properties", () => {
    expect(person.id).toBe(1);
    expect(person.profile).toBe(null);
    expect(person.todos).toBe(null);
  });

  it("correctly returns useID", () => {
    expect(person.getID()).toEqual(1);
  });

  it("correctly fetches and sets user profile", async () => {
    UsersService.fetchUserById = jest.fn().mockResolvedValue(mockedProfile);

    await person.fetchUserProfile();

    expect(person.getProfile()).toEqual({
      JWT: "1234567890",
      admin: true,
      id: 1,
      imgPath: "https://avatars1.githubusercontent.com/u/175707",
      name: "John Tsevdos",
      username: "tsevdos",
    });
  });

  it("correctly fetches and sets user todos", async () => {
    TodosService.fetchUserTodos = jest.fn().mockResolvedValue(mockedTodos);

    await person.fetchUserProfile();
    await person.fetchTodos();

    expect(person.getTodos()).toEqual([
      {
        id: 1,
        user: "tsevdos",
        title: "Learn React",
        done: false,
      },
      {
        id: 2,
        user: "tsevdos",
        title: "Go to Code.Hub",
        done: true,
      },
      {
        id: 3,
        user: "tsevdos",
        title: "Go out for a drink",
        done: false,
      },
    ]);
  });
});
