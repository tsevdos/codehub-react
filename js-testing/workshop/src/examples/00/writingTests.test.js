// TTD
describe("TDD testing syntax", () => {
  test("my very first TDD test", () => {
    const value = 5;

    expect(value).toEqual(5);
  });
});

// BDD
describe("BDD testing syntax", () => {
  it("my very first BDD test", () => {
    const value = 5;

    expect(value).toEqual(5);
  });
});

// Skipping tests
describe("Skipping testing suite", () => {
  it("skipping test", () => {
    const value = 5;

    expect(value).toEqual(5);
  });
});

// Setup helpers
describe("Setup beforeEach helper", () => {
  let value;

  beforeEach(() => {
    value = 5;
  });

  it("my value is 5", () => {
    expect(value).toEqual(5);
  });

  it("my value is 5 as well", () => {
    expect(value).not.toEqual(10);
  });
});
