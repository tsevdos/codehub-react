class Calculator {
  constructor() {
    this.result = 0;
  }

  // Addition
  add(num) {
    this.result += num;
  }

  // Subtraction
  subtract(num) {
    this.result -= num;
  }

  // Multiplication
  multiply(num) {
    this.result *= num;
  }

  // Division
  divide(num) {
    if (num === 0) {
      throw new Error("Divide by zero is not allowed.");
    } else {
      this.result /= num;
    }
  }

  // Clear the result
  clear() {
    this.result = 0;
  }

  // Get the current result
  getResult() {
    return this.result;
  }
}

export default Calculator;
