import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import { Grid } from "react-bootstrap";
import Dashboard from "./containers/Dashboard";
import Courses from "./containers/Courses";
import Course from "./containers/Course";
import AddCourse from "./containers/AddCourse";
import NotFound from "./components/NotFound";
import "./app.css";

ReactDOM.render(
  <BrowserRouter>
    <>
      <Header />
      <Grid>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/courses" component={Courses} />
          <Route exact path="/courses/:id" component={Course} />
          <Route exact path="/add-course" component={AddCourse} />
          <Route component={NotFound} />
        </Switch>
      </Grid>
    </>
  </BrowserRouter>,
  document.getElementById("⚛")
);
