import React from "react";
import ReactDOM from "react-dom";
import Button from "./components/Button/Button";
import Link from "./components/Link/Link";
import "app.css";

ReactDOM.render(
  <div className="padding">
    <Button />
    <Link />
  </div>,
  document.getElementById("app")
);
