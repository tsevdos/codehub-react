import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => (
  <nav>
    <h3>Hooks</h3>
    <ul>
      <li>
        <Link to="/hooks/use-state">01: useState()</Link>
      </li>
      <li>
        <Link to="/hooks/use-effect-1">02: useEffect()</Link>
      </li>
      <li>
        <Link to="/hooks/use-effect-2">03: useEffect()</Link>
      </li>
      <li>
        <Link to="/hooks/use-effect-3">04: useEffect()</Link>
      </li>
      <li>
        <Link to="/hooks/use-effect-4">05: useEffect()</Link>
      </li>
      <li>
        <Link to="/hooks/use-reducer">06: useReducer()</Link>
      </li>
    </ul>
    <h3>Form events</h3>
    <ul>
      <li>
        <Link to="/form/simple-input">01: Input</Link>
      </li>
      <li>
        <Link to="/form/input-and-textarea">02: Input and textarea</Link>
      </li>
      <li>
        <Link to="/form/select-radio-button-checkbox">
          03: Select, radio button and checkbox
        </Link>
      </li>
      <li>
        <Link to="/form/form-submit-async">04: Form submit (async)</Link>
      </li>
    </ul>
  </nav>
);

export default Sidebar;
