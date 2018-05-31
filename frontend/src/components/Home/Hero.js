import React from "react";
import { Carousel } from "react-bootstrap";
import Landscape from "./Landscape.jpeg";
import People from "./People.jpeg";

export default class Hero extends React.Component {
  render() {
    return (
      <Carousel controls={false}>
        <Carousel.Item>
          <img src="src/components/Home/BeachPeople.jpg" />
          <Carousel.Caption>
            <h3>Share you memories</h3>
            <p>Snapcapsule allow you to save memories for a later day</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src="src/components/Home/YellowWoman.jpg" />
          <Carousel.Caption>
           <h3> View Snapcapsules of other users. </h3>
           <p> Snapcapsules can only be seen for a day. </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
