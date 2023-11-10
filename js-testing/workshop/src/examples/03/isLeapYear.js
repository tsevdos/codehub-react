// Specify if a year is leap or not
// Leap years are divisible by 4
// However, years divisible by 100 are not leap years unless they are also divisible by 400
export const isLeapYear = (year) => {
  if (typeof year !== "number") {
    throw new Error("Please provide a number");
  }

  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};
