import React, { useReducer, useEffect } from "react";

const initialState = {
  joke: "",
  isLoading: true,
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_JOKE":
      return { ...state, isLoading: false, joke: payload.value };
    default:
      return state;
  }
};

export default function UseReducer() {
  const [{ joke, isLoading }, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "GET_JOKE", payload: data });
      });
  }, []);

  return (
    <div>
      <h2>Hooks 06: useReducer()</h2>
      <hr />
      <div>
        <h3>{isLoading ? "Loading..." : joke}</h3>
      </div>
    </div>
  );
}
