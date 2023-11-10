import { isLeapYear } from "./isLeapYear";

describe("isLeapYear", () => {
  test("Leap year (divisible by 4 but not by 100)", () => {
    expect(isLeapYear(2000)).toBe(true);
  });

  test("Leap year (divisible by 4 and by 400)", () => {
    expect(isLeapYear(2020)).toBe(true);
  });

  test("Not a leap year (divisible by 100 but not by 400)", () => {
    expect(isLeapYear(1900)).toBe(false);
  });

  test("Not a leap year (not divisible by 4)", () => {
    expect(isLeapYear(2021)).toBe(false);
    expect(isLeapYear(2023)).toBe(false);
  });

  test("Invalid input (not a number)", () => {
    expect(() => isLeapYear("2024")).toThrowError("Please provide a number");
  });
});
