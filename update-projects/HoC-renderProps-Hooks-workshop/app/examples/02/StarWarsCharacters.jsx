import React from "react";
import PropTypes from "prop-types";
import withData from "./withData";

const StarWarsCharacters = ({ data }) => (
  <div>
    <h2 className="is-size-4">Higher-order components</h2>
    <h3 className="is-size-5">02: withData HOC</h3>
    <br />
    <ul>
      {Boolean(data.length) &&
        data.map(({ name, gender }) => (
          <div key={name}>
            <h3 className="is-size-5">{name}</h3>
            <p>gender: {gender}</p>
          </div>
        ))}
    </ul>
  </div>
);

StarWarsCharacters.propTypes = {
  data: PropTypes.array.isRequired
};

export default withData(StarWarsCharacters);
