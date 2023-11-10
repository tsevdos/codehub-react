// Specify how many words contains a string
export const wordCount = (str) => {
  if (typeof str !== "string") {
    throw new Error("Please provide a string");
  }

  return str === "" ? 0 : str.split(" ").length;
};
