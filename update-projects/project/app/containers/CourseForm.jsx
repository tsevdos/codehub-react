import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, FormGroup, Checkbox, ControlLabel, Button } from "react-bootstrap";
import TextInput from "components/CourseFormFields/TextInput";
import TextInputPrice from "components/CourseFormFields/TextInputPrice";
import TextAreaInput from "components/CourseFormFields/TextAreaInput";
import CheckboxGroup from "components/CourseFormFields/CheckboxGroup";
import { fetchInstructors } from "../api";

class CourseForm extends Component {
  state = {
    course: {
      title: "",
      imagePath: "",
      dates: {
        end_date: "",
        start_date: "",
      },
      description: "",
      duration: "",
      instructors: [],
      open: false,
      price: {
        early_bird: "0",
        normal: "0"
      }
    },
    instructors: []
  };

  constructor(props) {
    super(props);

    if (props.course) {
      this.state.course = { ...props.course };
    }
  }

  onHandleCourse = (e) => {
    e.preventDefault();
    this.props.handleCourse(this.state.course);
  }

  async componentDidMount() {
    const instructors = await fetchInstructors();
    this.setState({ instructors });
  }

  onFieldChange = (e) => {
    let { name, value } = e.target;

    this.setState((prevState) => {
      switch (name) {
      case "open":
        value = !prevState.course.open;
        break;
      case "start-date":
        name = "dates";
        value = this.getNewDates("start-date", value, { ...prevState.course.dates });
        break;
      case "end-date":
        name = "dates";
        value = this.getNewDates("end-date", value, { ...prevState.course.dates });
        break;
      case "early-bird":
        name = "price";
        value = this.getNewPrice("early-bird", value, { ...prevState.course.price });
        break;
      case "normal":
        name = "price";
        value = this.getNewPrice("normal", value, { ...prevState.course.price });
        break;
      }

      return {
        course: { ...prevState.course, [name]: value }
      };
    });
  }

  onInstructorsChange = (isChecked, id) => {
    this.setState((prevState) => {
      let newInstructors = [...prevState.course.instructors];

      if (isChecked) {
        newInstructors.push(id);
      } else {
        newInstructors = newInstructors.filter((instructorId) => !(instructorId === id));
      }

      return {
        course: { ...prevState.course, instructors: newInstructors }
      };
    });
  }

  getNewDates(dateType, value, currentDates) {
    return {
      start_date: dateType === "start-date" ? value : currentDates.start_date,
      end_date: dateType === "end-date" ? value : currentDates.end_date
    };
  }

  getNewPrice(priceType, value, currentPrice) {
    return {
      early_bird: priceType === "early-bird" ? value : currentPrice.early_bird,
      normal: priceType === "normal" ? value : currentPrice.normal
    };
  }

  render() {
    const { mode } = this.props;
    const { course, instructors } = this.state;
    const { title, duration, imagePath, open, description, dates, price } = course;
    const { start_date, end_date } = dates;
    const { early_bird, normal } = price;

    return (
      <Form className="clearfix" onSubmit={this.onHandleCourse}>
        <TextInput name="title" placeholder="Title" value={title} onChange={this.onFieldChange} />
        <TextInput name="duration" placeholder="Duration" value={duration} onChange={this.onFieldChange} />
        <TextInput name="imagePath" placeholder="Image path" value={imagePath} onChange={this.onFieldChange} />
        <FormGroup controlId="bookable">
          <ControlLabel>Bookable</ControlLabel>
          <Checkbox
            name="open"
            checked={open}
            onChange={this.onFieldChange}
          >Bookable</Checkbox>
        </FormGroup>
        <CheckboxGroup
          name="instructors"
          title="Instructors"
          values={instructors}
          selectedValues={course.instructors}
          onChange={this.onInstructorsChange}
        />
        <TextAreaInput name="description" placeholder="Description" value={description} onChange={this.onFieldChange} />
        <h3>Dates</h3>
        <TextInput name="start-date" placeholder="Start date" value={start_date} onChange={this.onFieldChange} />
        <TextInput name="end-date" placeholder="End date" value={end_date} onChange={this.onFieldChange} />
        <h3>Price</h3>
        <TextInputPrice name="early-bird" placeholder="Early Bird" value={early_bird} onChange={this.onFieldChange} />
        <TextInputPrice name="normal" placeholder="Normal" value={normal} onChange={this.onFieldChange} />

        <div className="pull-right">
          <Button type="submit" bsStyle="primary">{ (mode === "add") ? "Add Course" : "Edit Course" }</Button>
        </div>
      </Form>
    );
  }
}

CourseForm.propTypes = {
  course: PropTypes.object,
  mode: PropTypes.oneOf(["add", "edit"]),
  handleCourse: PropTypes.func.isRequired
};

export default CourseForm;
