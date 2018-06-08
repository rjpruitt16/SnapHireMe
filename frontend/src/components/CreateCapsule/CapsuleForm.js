import React from "react";
import { Form, FieldGroup, Button } from "react-bootstrap";

export default class CapsuleForm extends React.Component {
  render() {
    console.log("Username pass through props", this.props.user);
    return (
      <Form action='http://localhost:8080' method='post'>
        <FieldGroup
          id="formControlsText"
          type="text"
          label="Text"
          placeholder="Enter text"
        />
        <FieldGroup
          id="formControlsFile"
          type="file"
          label="File"
          help="Example block-level help text here."
        />
        < Button />
      </Form>
    );
  }
}
