import React, { Component } from "react";
import CourseForm from "containers/CourseForm";
import Loader from "components/Loader/Loader";
import CourseItem from "components/CourseItem";
import { Modal, Button } from "react-bootstrap";
import { fetchCourse, fetchCourseInstructors, updateCourse, deleteCourse } from "../api";

class Course extends Component {
  state = {
    course: null,
    courseInstructors: null,
    showDeleteModal: false,
    showEditModal: false
  };

  async componentDidMount() {
    const { match } = this.props;
    const course = await fetchCourse(match.params.id);
    const courseInstructors = await fetchCourseInstructors(course.instructors);

    this.setState({ course, courseInstructors });
  }

  handleDeleteCourse = async () => {
    const { course } = this.state;
    const { history } = this.props;

    await deleteCourse(course.id);
    history.push("/courses");
  }

  handleUpdateCourse = async (course) => {
    const { history } = this.props;
    const { price: { early_bird, normal } } = course;
    const newPrice = {
      early_bird: parseInt(early_bird, 10),
      normal: parseInt(normal, 10),
    };
    const data = { ...course, price: newPrice };

    await updateCourse(data);
    history.push("/courses");
  }

  toggleDeleteModal = () => {
    this.setState((prevState) => ({ showDeleteModal: !prevState.showDeleteModal }));
  }

  toggleEditModal = () => {
    this.setState((prevState) => ({ showEditModal: !prevState.showEditModal }));
  }

  render() {
    const { course, courseInstructors, showEditModal, showDeleteModal } = this.state;

    return (
      <>
        {
          course &&
            <Modal show={showEditModal} onHide={this.toggleEditModal} bsSize="lg">
              <Modal.Header closeButton>
                <Modal.Title>{`Edit Course: ${course.title}`}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <CourseForm course={course} handleCourse={this.handleUpdateCourse} />
              </Modal.Body>
            </Modal>
        }

        {
          course &&
            <Modal show={showDeleteModal} onHide={this.toggleDeleteModal}>
              <Modal.Header closeButton>
                <Modal.Title>Delete Course</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h4>{`Are you sure you want to delete "${course.title}" course?`}</h4>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.toggleDeleteModal}>Cancel</Button>
                <Button bsStyle="primary" onClick={this.handleDeleteCourse}>Delete</Button>
              </Modal.Footer>
            </Modal>
        }

        {
          course
            ? <CourseItem
              {...course}
              instructors={courseInstructors}
              handleDelete={this.toggleDeleteModal}
              handleEdit={this.toggleEditModal}
            />
            : <Loader />
        }
      </>
    );
  }
}

export default Course;
