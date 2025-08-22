import React from "react";
import StarWarsCharacters from "./StarWarsCharacters";
import Loader from "./Loader";

const App = () => (
  <div>
    <h2 className="is-size-4">Render props</h2>
    <h3 className="is-size-5">08: Render props component with multiple arguments</h3>
    <br/>
    <ul>
      <StarWarsCharacters
        url="https://swapi.co/api/people/"
        format="json"
        dataPath="results"
        render={
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
      />
    </ul>
  </div>
);

export default App;
