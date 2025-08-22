import React from "react";
import StarWarsCharacters from "./StarWarsCharacters";

const App = () => (
  <div>
    <h2 className="is-size-4">Render props</h2>
    <h3 className="is-size-5">06: Render props component</h3>
    <br/>
    <ul>
      <StarWarsCharacters
        renderProp={
          (data) => (
            Boolean(data.length) &&
              data.map(({ name, gender }) => (
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
