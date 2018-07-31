import axios from 'axios';
var MyForm = require('form-data');
import moment from 'moment';
import React from "react";
import { Redirect } from 'react-router-dom';
import { Button, Col, controlId, ControlLabel, HelpBlock,
         Form, FormGroup, FormControl } from "react-bootstrap";
import DatePicker from 'react-datepicker';

import css from 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default class CapsuleForm extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      userUrl: this.props.auth.domain + "/users/" + this.props.userID + "/",
      dateToPost: moment().add(1, "m"),
      image: null,
      caption: "",
      redirect: false,
      invalidFormSubmit: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  getValidationState() {
    const threshold = moment().subtract(5, "m")
    const validLength = this.state.caption.length < 21;
    const validFile = this.state.image != null;
    const validDate = threshold.diff(this.state.dateToPost) < 0;
    if (validLength && validFile && validDate) return 'success';
    else return 'error';
  }

  handleFormSubmit(e) {
    e.preventDefault();

    if (this.getValidationState() == 'error') {
      this.setState({invalidFormSubmit: true})
      return;
    }

    axios.defaults.headers.common['Authorization'] = 'Token ' + this.props.auth.getToken();
    console.log(this.props.auth.getToken());

    var capsule = new MyForm();
    capsule.append("user", this.state.userUrl);
    capsule.append("dateToPost", this.state.dateToPost.format());
    capsule.append("image", this.state.image);
    capsule.append("caption", this.state.caption);
    capsule.append("dateToDelete", this.state.dateToPost.add(1, "d").format());

    axios.post(this.props.auth.domain + "/snapcapsule/", capsule)
    .then(() => {
       this.setState({redirect: true})
    }).catch(err =>{
        alert(err);
    })
  }

  handleDateChange(date) {
    this.setState({
      dateToPost: date
    });
  }

  handleChange(e) {
    this.setState(
         {
             caption: e.target.value
         }
     )
  }

  render() {
    const needHelpBlock = this.state.invalidFormSubmit &&
    <HelpBlock>Invalid follow the color</HelpBlock>


    if (this.state.redirect) {
      return <Redirect to="/SnapCapsule" />;
    }

    return (
      <Form onSubmit={this.handleFormSubmit.bind(this)}>
        <Col smOffset={1} sm={5}>
          <h1> Create a SnapCapusle </h1>
          <ControlLabel> Date </ControlLabel>
          <DatePicker
            selected={this.state.dateToPost}
            onChange={this.handleDateChange}
            style={ css }
            showTimeSelect
            dateFormat="LLL"
          />
          <FormGroup id="1">
            <ControlLabel> File </ControlLabel>
            <FormControl
              type="file"
              label="Image"
              name="image"
              accept="image/*"
              inputRef={ref => {
                try {
                  this.state.image = ref.files[0];
                }
                catch (err) {
                  this.state.image = null;
                }
              }}
            />
          </FormGroup>
          <FormGroup id="2" validationState={this.getValidationState()}>
            <ControlLabel> Caption </ControlLabel>
            <FormControl
              type="text"
              placeholder="Enter text"
              name="caption"
              onChange={this.handleChange}
            />
            {needHelpBlock}
          </FormGroup>
          <FormGroup>
              <Button type="submit"> Submit </Button>
          </FormGroup>
        </Col>
      </Form>
    );
  }
}
