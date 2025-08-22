import React from "react";
import PropTypes from "prop-types";

const CharacterList = ({ data, onSelectCharacter }) => (
  <div>
    <h2 className="is-size-4">Unit Testing</h2>
    <h3 className="is-size-5">03: Enzyme testing</h3>
    <br/>
    <ul id="characters">
      {
        Boolean(data.length) &&
          data.map(({ name, gender }) => (
            <li onClick={onSelectCharacter} key={name}>{ name } is { gender }</li>
          ))
      }
    </ul>
  </div>
);

CharacterList.propTypes = {
  data: PropTypes.array.isRequired,
  onSelectCharacter: PropTypes.func
};

CharacterList.defaultProps = {
  onSelectCharacter: () => console.log("Clicked")
};

export default CharacterList;
