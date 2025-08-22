import React from "react";
import StarWarsCharacters from "./StarWarsCharacters";
import Loader from "./Loader";

const App = () => (
  <div>
    <h2 className="is-size-4">Render props</h2>
    <h3 className="is-size-5">09: Render props as children</h3>
    <br/>
    <ul>
      <StarWarsCharacters
        url="https://swapi.co/api/people/"
        format="json"
        dataPath="results"
      >
        {
          (data, isLoading) => (
            isLoading
              ? <Loader />
              : data.map(({ name, gender }) => (
                <div key={name}>
                  <h3 className="is-size-5">{name}</h3>
                  <p>gender: {gender}</p>
                </div>
              ))
          )
        }
      </StarWarsCharacters>
    </ul>
  </div>
);

export default App;
