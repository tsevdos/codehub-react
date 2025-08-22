import React from "react";
import { FormGroup, FormControl, ControlLabel, InputGroup } from "react-bootstrap";
import PropTypes from "prop-types";

const TextInputPrice = ({ name, placeholder, value, onChange }) => {
  return (
    <FormGroup controlId={name}>
      <ControlLabel>{placeholder}</ControlLabel>
      <InputGroup>
        <FormControl
          type="text"
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <InputGroup.Addon> €</InputGroup.Addon>
      </InputGroup>
    </FormGroup>
  );
};

TextInputPrice.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired
};

export default TextInputPrice;