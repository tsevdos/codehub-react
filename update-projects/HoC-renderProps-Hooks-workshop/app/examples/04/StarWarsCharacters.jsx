import React from "react";
import PropTypes from "prop-types";
import withData from "./withData";
import withLoader from "./withLoader";

const StarWarsCharacters = ({ data, isLoading }) => (
  <div>
    <h2 className="is-size-4">Higher-order components</h2>
    <h3 className="is-size-5">04: HOC composition (withData and withLoader)</h3>
    <br/>
    <ul>
      {
        !isLoading &&
          data.map(({ name, gender }) => (
            <div key={name}>
              <h3 className="is-size-5">{name}</h3>
              <p>gender: {gender}</p>
            </div>
          ))
      }
    </ul>
  </div>
);

StarWarsCharacters.propTypes = {
  data: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const options = {
  url: "https://swapi.co/api/people/",
  format: "json",
  dataPath: "results"
};

// Order matters
export default withData(options)(withLoader(StarWarsCharacters));
