import { useReducer, useEffect } from "react";

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

export default function useStarWarsCharacters(settings) {
  const { url, format, dataPath } = settings;
  const [{ data, isLoading }, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    fetch(`${url}?format=${format}`)
      .then(res => res.json())
      .then(res => {
        dispatch({ type: "ADD_STARWARS_CHARACTERS", payload: res[dataPath] });
      });
  }, []);

  return {
    data,
    isLoading
  };
}
