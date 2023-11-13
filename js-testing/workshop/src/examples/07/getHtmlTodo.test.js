import { getHtmlTodo } from "./getHtmlTodo";

describe("getHtmlTodo function:", () => {
  it("must return correct markup (with id 2)", async () => {
    const todos = await getHtmlTodo(2);

    expect(todos).toBe('<a href="path/to/2">Go to Code.Hub (tsevdos) - 👍</a>');
  });

  it("must return correct markup (with id 5)", async () => {
    const todos = await getHtmlTodo(4);

    expect(todos).toBe('<a href="path/to/4">Learn Query (joe) - 👎</a>');
  });
});
