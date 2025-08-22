import React from "react";
import useStarWarsCharacters from "./useStarWarsCharacters";
import Loader from "./Loader";

export default function CustomHook() {
  const settings = {
    url: "https://swapi.co/api/people/",
    format: "json",
    dataPath: "results"
  };
  const { data, isLoading } = useStarWarsCharacters(settings);

  return (
    <div>
      <h2 className="is-size-4">Hooks</h2>
      <h3 className="is-size-5">14: Custom Hook</h3>
      <br />
      <br />
      <ul>
        {isLoading ? (
          <Loader />
        ) : (
          data.map(({ name, gender }) => (
            <div key={name}>
              <h3 className="is-size-5">{name}</h3>
              <p>gender: {gender}</p>
            </div>
          ))
        )}
      </ul>
    </div>
  );
}
