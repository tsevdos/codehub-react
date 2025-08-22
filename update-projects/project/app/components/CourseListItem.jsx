import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Panel, Col } from "react-bootstrap";

const CourseListItem = ({ id, title, imagePath, price, dates, duration, open }) => {
  const { normal } = price;
  const { start_date: startDate, end_date: endDate } = dates;
  const startDateFormatted = new Date(startDate).toLocaleDateString("el-gr");
  const endDateFormatted = new Date(endDate).toLocaleDateString("el-gr");

  return (
    <Col xs={12} sm={6} md={4}>
      <Panel bsStyle="primary" className='list-item'>
        <Panel.Heading>
          <Panel.Title><h4>{ title }</h4></Panel.Title>
        </Panel.Heading>
        <Panel.Body className="no-padding">
          <Link to={`/courses/${id}`}>
            <img src={imagePath} alt={`${title} course image`} className="img-responsive" />
          </Link>
          <div className="panel-info clearfix">
            <p>Price: <strong>{ normal }€</strong> | Bookable: <strong>{ open ? "✔" : "✖" }</strong></p>
            <p>Duration: <strong>{ duration }</strong></p>
            <p>Dates: <strong>{ startDateFormatted } - { endDateFormatted }</strong></p>
            <Link to={`/courses/${id}`} className="btn btn-primary pull-right">View</Link>&nbsp;
          </div>
        </Panel.Body>
      </Panel>
    </Col>
  );
};

CourseListItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  price: PropTypes.shape({
    normal: PropTypes.number.isRequired,
    early_bird: PropTypes.number,
  }).isRequired,
  dates: PropTypes.shape({
    start_date: PropTypes.string.isRequired,
    end_date: PropTypes.string.isRequired,
  }).isRequired,
  duration: PropTypes.string.isRequired
};

export default CourseListItem;
