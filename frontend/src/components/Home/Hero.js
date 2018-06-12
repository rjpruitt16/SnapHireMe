import React from "react";
import { Carousel } from "react-bootstrap";
import BeachPeople from './BeachPeople.jpg';
import Women from './YellowWoman.jpg';

export default class Hero extends React.Component {
  render() {
    return (
      <Carousel controls={false}>
        <Carousel.Item>
          <img src={ BeachPeople } />
          <Carousel.Caption>
            <h3>Share you memories</h3>
            <p>Snapcapsule allow you to save memories for a later day</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={ Women } />
          <Carousel.Caption>
           <h1> View Snapcapsules of other users. </h1>
           <h3> Snapcapsules can only be seen for a day. </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
