import React from "react";
import { Form, controlId, ControlLabel, FormControl, Button, FormGroup } from "react-bootstrap";
import DatePicker from 'react-datepicker';
import moment from 'moment';

import css from 'react-datepicker/dist/react-datepicker-cssmodules.css';


export default class CapsuleForm extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      dateToPost: moment(),
      dateToDelete: moment(),
      imagePath: "",
      username: "rjpruitt",
      title: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault()
    path = "../../images"

  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    function FieldGroup({ id, label, help, ...props }) {
      return (
        <FormGroup controlId={id}>
          <ControlLabel>{label}</ControlLabel>
          <FormControl {...props} />
        </FormGroup>
      );
    }

    return (
      <Form>
        <h1> Create a SnapCapusle </h1>
        <FieldGroup
          id="formControlsText"
          type="text"
          label="title"
          placeholder="Enter text"
        />
        <FieldGroup
          id="formControlsFile"
          type="file"
          label="Image"
          help="Example block-level help text here."
          inputRef={ref => {console.log(ref.files[0])}}
        />
        <DatePicker
          selected={this.state.dateToPost}
          onChange={this.handleChange}
          style={ css }
          showTimeSelect
          dateFormat="LLL"
        />
        <Button> Submit </Button>
      </Form>
    );
  }
}
