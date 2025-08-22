import React from "react";
import { FormGroup, Checkbox, ControlLabel } from "react-bootstrap";
import PropTypes from "prop-types";

const TextInput = ({ name, title, values, selectedValues, onChange }) => {
  return (
    <FormGroup controlId={name}>
      <ControlLabel>{title}</ControlLabel>
      {
        Boolean(values.length) && values.map(({ id, name }) =>
          <Checkbox
            key={id}
            name={name}
            checked={selectedValues.includes(id)}
            onChange={(e) => onChange(e.target.checked, id)}
          >
            {name.first} {name.last}
          </Checkbox>
        )
      }
    </FormGroup>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  values: PropTypes.array.isRequired,
  selectedValues: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};

export default TextInput;