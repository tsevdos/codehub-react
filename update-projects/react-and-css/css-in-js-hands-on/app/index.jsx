import React from "react";
import ReactDOM from "react-dom";
import Alert from "./components/Alert/Alert";
import AlertWithStyledComponents from "./components/AlertWithStyledComponents";
import ComposedCard from "./components/Card";

ReactDOM.render(
  <>
    <Alert msg="Alert basic emotion example using 'css'" />

    <AlertWithStyledComponents msg="Primary: Alert basic emotion example using 'styled'" />
    <AlertWithStyledComponents type="info" msg="Info: Alert basic emotion example using 'styled'" />
    <AlertWithStyledComponents type="warning" msg="Warning: Alert basic emotion example using 'styled'" />
    <AlertWithStyledComponents type="error" msg="Error: Alert basic emotion example using 'styled'" />

    <ComposedCard bigTitle title="Card title" body="My body text." buttonText="Click me" />
  </>,
  document.getElementById("app")
);
