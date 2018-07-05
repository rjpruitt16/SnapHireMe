import axios from 'axios';
import { observer } from "mobx-react";
import React from "react";
import { Grid, Row, Col, Thumbnail, Button } from "react-bootstrap";

@observer
export default class SnapCapsule extends React.Component {
  componentDidMount() {
    axios.get(`${this.props.domain}/snapcapsule`)
      .then(res => {
        res.data.map((capsule) => {
          this.props.store.addCapsule(
            capsule["caption"],
            capsule["image"],
            capsule["dateToPost"].substring(0, 10),
            capsule["username"]
          )
        })
      });
  }

  componentWillUnmount() {
    this.props.store.clear();
  }

  render() {
    const { capsules } = this.props.store;
    const capsuleList = capsules.map((capsule, i) => (
      <Col key={i} xs={6} md={4}>
        <Thumbnail src={capsule.imagePath} alt="242x200">
          <h2> {capsule.title} </h2>
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
