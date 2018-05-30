import React from "react";
import { FormGroup, FormControl, Col, ControlLabel } from "react-bootstrap";

export default class FormInputs extends React.Component {
  render() {
    return (
      <FormGroup controlId="formHorizontalEmail">
        <Col componentClass={ControlLabel} sm={2}>
          {this.props.title}
        </Col>
        <Col sm={10}>
          <FormControl type={this.props.type} placeholder={this.props.title} />
        </Col>
      </FormGroup>
    );
  }
}
