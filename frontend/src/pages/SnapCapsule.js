import React from "react";
import { Grid, Row, Col, Thumbnail, Button } from "react-bootstrap";
import { observer } from "mobx-react";
import Capsule from "../components/SnapCapsule/Capsule";

@observer
export default class SnapCapsule extends React.Component {
  render() {
    this.props.store.addCapsule("Summer Day", "src/images/BeachPeople.jpg", "6/1/18", "6/2/18", "rjpruitt");
    this.props.store.addCapsule("paris", "src/images/Landscape3.jpg", "6/1/18", "6/2/18", "rjpruitt");
    this.props.store.addCapsule("Summer Day", "src/images/BeachPeople.jpg", "6/1/18", "6/2/18", "rjpruitt");
    this.props.store.addCapsule("paris", "src/images/Landscape3.jpg", "6/1/18", "6/2/18", "rjpruitt");
    this.props.store.addCapsule("Summer Day", "src/images/BeachPeople.jpg", "6/1/18", "6/2/18", "rjpruitt");
    this.props.store.addCapsule("paris", "src/images/Landscape3.jpg", "6/1/18", "6/2/18", "rjpruitt");

    const { capsules } = this.props.store;

    const capsuleList = capsules.map((capsule, i) => (
      <Col key={i} xs={6} md={4}>
        <Thumbnail src={capsule.imagePath} alt="242x200">
          <h3> {capsule.title} </h3>
          <p> @{capsule.username} </p>
        </Thumbnail>
      </Col>
    ));

    return (
      <Grid>
        <Row>
          { capsuleList }

        </Row>
      </Grid>
    );
  }
}
