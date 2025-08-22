import React from "react";
import ReactDOM from "react-dom";
import Alert from "./components/Alert/Alert";
import AlertWithStyledComponents from "./components/AlertWithStyledComponents";

ReactDOM.render(
  <>
    {/* <Alert msg="Alert basic emotion example using 'css'" /> */}

    <AlertWithStyledComponents msg="Primary: Alert basic emotion example using 'styled'" />
    <AlertWithStyledComponents type="info" msg="Info: Alert basic emotion example using 'styled'" />
    <AlertWithStyledComponents type="warning" msg="Warning: Alert basic emotion example using 'styled'" />
    <AlertWithStyledComponents bigTitle type="error" msg="Error: Alert basic emotion example using 'styled'" />
  </>,
  document.getElementById("app")
);
