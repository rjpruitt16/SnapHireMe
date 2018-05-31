import React from "react";
import { Col, Thumbnail } from "react-bootstrap";

export default class Capsule extends React.Component {
  render() {
    return (
      <Col xs={6} md={4}>
        <Thumbnail src="" alt="242x200">
          <h3>Thumbnail label</h3>
          <p>Description</p>
        </Thumbnail>
      </Col>
    );
  }
}
