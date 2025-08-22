export const getTodos = () =>
  fetch("https://api.myjson.com/bins/l0dto").then(res => res.json());
