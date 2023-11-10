import Calculator from "./Calculator";

describe("Calculator", () => {
  let calculator;

  beforeEach(() => {
    // Create a new instance of Calculator before each test
    calculator = new Calculator();
  });

  it("addition works corectly", () => {
    calculator.add(5);
    expect(calculator.getResult()).toBe(5);
    calculator.add(7);
    expect(calculator.getResult()).toBe(12);
  });

  it("subtraction works corectly", () => {
    calculator.add(15);
    calculator.subtract(10);
    expect(calculator.getResult()).toBe(5);
    calculator.subtract(7);
    expect(calculator.getResult()).toBe(-2);
  });

  it("multiplication works corectly", () => {
    calculator.add(2);
    calculator.multiply(3);
    expect(calculator.getResult()).toBe(6);
    calculator.multiply(4);
    expect(calculator.getResult()).toBe(24);
  });

  it("division works corectly", () => {
    calculator.add(20);
    calculator.divide(4);
    expect(calculator.getResult()).toBe(5);
    calculator.divide(2);
    expect(calculator.getResult()).toBe(2.5);
  });

  it("divide by zero throws an Error", () => {
    expect(() => calculator.divide(0)).toThrowError(
      "Divide by zero is not allowed."
    );
  });

  it("clear calculator", () => {
    calculator.add(20);
    expect(calculator.getResult()).toBe(20);
    calculator.clear();
    expect(calculator.getResult()).toBe(0);
  });
});
