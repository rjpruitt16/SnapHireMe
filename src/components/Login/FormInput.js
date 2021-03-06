import React from "react";
import { FormGroup, FormControl, Col, ControlLabel } from "react-bootstrap";

export default class FormInputs extends React.Component {
  render() {
    return (
      <FormGroup id={this.props.id}>
        <Col componentClass={ControlLabel} sm={2}>
          {this.props.title}
        </Col>
        <Col sm={10}>
          <FormControl
            type={this.props.type}
            placeholder={this.props.title}
            onChange={this.props.onChange}
            name={this.props.name}
          />
        </Col>
      </FormGroup>
    );
  }
}
