import React from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import PropTypes from "prop-types";

const TextAreaInput = ({ name, placeholder, value, onChange }) => {
  return (
    <FormGroup controlId={name}>
      <ControlLabel>{placeholder}</ControlLabel>
      <FormControl
        componentClass="textarea"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </FormGroup>
  );
};

TextAreaInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default TextAreaInput;
