import { getHTMLUserTodos } from "./getHTMLUserTodos";

describe("getHTMLUserTodos function:", () => {
  it("must return correct markup", async () => {
    const todos = await getHTMLUserTodos("tsevdos");

    expect(todos).toBe(
      "<ul><li>Learn React</li><li>Go to Code.Hub</li><li>Go out for a drink</li></ul>"
    );
  });
});
