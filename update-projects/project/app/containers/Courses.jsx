import React, { Component } from "react";
import { Row, PageHeader } from "react-bootstrap";
import CourseListItem from "components/CourseListItem";
import Loader from "components/Loader/Loader";
import { fetchCourses } from "../api";

class Courses extends Component {
  state = {
    courses: null
  };

  async componentDidMount() {
    const courses = await fetchCourses();
    this.setState({ courses });
  }

  render() {
    const { courses } = this.state;

    return (
      <>
        <PageHeader>
          Courses <small>(all)</small>
        </PageHeader>
        <Row>
          {
            courses
              ? courses.map((course) =>
                <CourseListItem key={course.id} {...course} />)
              : <Loader />
          }
        </Row>
      </>
    );
  }
}

export default Courses;
