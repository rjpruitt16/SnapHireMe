import React from "react";
import { Grid, Row, Col, Thumbnail } from "react-bootstrap";
import { observer } from "mobx-react"

@observer
export default class SnapCapsule extends React.Component {
  render() {
    const { capsules } = this.props.store;

    const capsuleList = capsules.map(capsule => {
      console.log(capsule);
      <Col xs={6} md={4}>
        <Thumbnail src={capsule.imagePath} alt="242x200">
          <h3> {capsule.username} </h3>
          <p> {capsule.title }</p>
        </Thumbnail>
      </Col>
    });

    return (
      <Grid>
        <Row>
          { capsuleList }
        </Row>
      </Grid>
    );
  }
}
