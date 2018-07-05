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
            <div className="centered">
               <font size="500">Share you memories</font>
            </div>
            <p>Snapcapsule allow you to save memories for a later day</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={ Women } />
          <Carousel.Caption>
           <font size="500">View Snapcapsules of other users.</font>
           <h3> Snapcapsules can only be seen for a day. </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
