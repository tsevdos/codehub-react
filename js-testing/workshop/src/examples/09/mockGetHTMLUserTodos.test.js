import { jest } from "@jest/globals";
import { getHTMLUserTodos } from "./getHTMLUserTodos";
import TodosService from "../api/todosService";

// Mock the TodosService
jest.mock("../api/todosService");

// jest.mock("../api/todosService", () => ({
//   // ...jest.requireActual("../api/todosService"),
//   getTodos: jest.fn().mockResolvedValue([
//     { id: 1, title: "Learn React" },
//     { id: 2, title: "Go to Code.Hub" },
//     { id: 3, title: "Go out for a drink" },
//   ]),
// }));

describe("getHTMLUserTodos function:", () => {
  it("must return correct markup", async () => {
    // Mock the resolved value for the TodosService
    TodosService.getTodos = jest.fn().mockResolvedValue([
      { id: 1, title: "Learn React" },
      { id: 2, title: "Go to Code.Hub" },
      { id: 3, title: "Go out for a drink" },
    ]);

    const todos = await getHTMLUserTodos("tsevdos");

    // Assert that the function returns the correct markup
    expect(todos).toBe(
      "<ul><li>Learn React</li><li>Go to Code.Hub</li><li>Go out for a drink</li></ul>"
    );
  });
});
