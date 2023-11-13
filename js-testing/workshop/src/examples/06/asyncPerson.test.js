import Person from "./asyncPerson";

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
    await person.fetchUserProfile();
    await person.fetchTodos();

    expect(person.getTodos()).toEqual([
      { done: false, id: 1, title: "Learn React", user: "tsevdos" },
      { done: true, id: 2, title: "Go to Code.Hub", user: "tsevdos" },
      { done: false, id: 3, title: "Go out for a drink", user: "tsevdos" },
    ]);
  });
});
