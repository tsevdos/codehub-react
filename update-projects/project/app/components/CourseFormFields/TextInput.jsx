import React from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import PropTypes from "prop-types";

const TextInput = ({ name, placeholder, value, onChange }) => {
  return (
    <FormGroup controlId={name}>
      <ControlLabel>{placeholder}</ControlLabel>
      <FormControl
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </FormGroup>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default TextInput;