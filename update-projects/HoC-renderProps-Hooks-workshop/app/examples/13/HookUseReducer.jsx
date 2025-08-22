import React, { useReducer, useEffect } from "react";
import Loader from "./Loader";

const initialState = {
  data: [],
  isLoading: true
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
  case "ADD_STARWARS_CHARACTERS":
    return { ...state, isLoading: false, data: payload };
  default:
    return state;
  }
};

export default function HookUseReducer () {
  const [{ data, isLoading }, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    fetch("https://swapi.co/api/people/?format=json")
      .then((res) => res.json())
      .then((res) => {
        dispatch({ type: "ADD_STARWARS_CHARACTERS", payload: res.results });
      });
  }, []);

  return (
    <div>
      <h2 className="is-size-4">Hooks</h2>
      <h3 className="is-size-5">13: useReducer()</h3>
      <br/>
      <br/>
      <ul>
        {
          isLoading
            ? <Loader />
            : data.map(({ name, gender }) => {
              return (
                <div key={name}>
                  <h3 className="is-size-5">{name}</h3>
                  <p>gender: {gender}</p>
                </div>
              );
            })
        }
      </ul>
    </div>
  );
}
