import { jest } from "@jest/globals";
import { getHtmlTodo } from "./getHtmlTodo";
import TodosService from "../api/todosService";

jest.mock("../api/todosService");

describe("getHtmlTodo function:", () => {
  it("must return correct markup (with id 2)", async () => {
    TodosService.fetchTodoById = jest.fn().mockResolvedValue({
      id: 2,
      user: "tsevdos",
      title: "Go to Code.Hub",
      done: true,
    });
    const todos = await getHtmlTodo(2);

    expect(todos).toBe('<a href="path/to/2">Go to Code.Hub (tsevdos) - 👍</a>');
  });

  it("must return correct markup (with id 5)", async () => {
    TodosService.fetchTodoById = jest.fn().mockResolvedValue({
      id: 4,
      user: "joe",
      title: "Learn Query",
      done: false,
    });

    const todos = await getHtmlTodo(4);

    expect(todos).toBe('<a href="path/to/4">Learn Query (joe) - 👎</a>');
  });
});
