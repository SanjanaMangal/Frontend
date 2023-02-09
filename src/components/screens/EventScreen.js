import React from 'react'
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
function Events (props){
  return (
    <Card style={{ width: "320px", height: "500px" }} className="card my-3 p-3 rounded">
      <Link to={'/product/' + props._id}>
        <Card.Img variant="top" width="300px" height="250px" src={props.image} />
      </Link>
      <Card.Body>
        <Card.Title as="div">
          <Link to={'/product/' + props._id} style={{ textDecoration: "none" }}>
            {props.name}
          </Link>
        </Card.Title>
        <Card.Text as="div">
          <p>A product from {props.brand}</p>
        </Card.Text>
        <Card.Text as="div">
          {props.numOfReviews} reviews
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Events
