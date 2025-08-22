// Spec
// count how many words contains a string

export const wordCount = (str) => {
  if (typeof str !== "string") {
    throw new Error("Prepei na mas doseis string, re!");
  }

  if (str === "") {
    return 0;
  }

  return str.split(" ").length;
};
