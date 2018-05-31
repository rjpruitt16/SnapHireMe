import React from "react";
import { Grid, Row } from "react-bootstrap";
import Capsule from "../components/SnapCapsule/Capsule";

export default class SnapCapsule extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Capsule />
        </Row>
      </Grid>
    );
  }
}
