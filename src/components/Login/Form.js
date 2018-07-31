import FormInput from "./FormInput";
import React from "react";
import { Button, Col, ControlLabel, HelpBlock,
         Form, FormControl, FormGroup } from "react-bootstrap";
import  { Redirect } from 'react-router-dom';

export default class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.Auth = this.props.auth;
    this.state = {
      username: "",
      email: "",
      password: "",
      redirect: false,
      invalidFormSubmit: false,
      invalidUsername: false,
      invalidPassword: false
    }
  }

  getValidationState() {
    const validUsername = this.usernameIsValid(this.state.username);
    const validPassword = this.passwordIsValid(this.state.password);

    if (this.props.isSignUp) {
      const validEmail = this.state.username.includes('@');
      if (validUsername && validPassword && validEmail) return 'success';
    }

    if (validUsername && validPassword) return 'success';

    return 'error';
  }

  usernameIsValid(username) {
    return /^[0-9a-zA-Z_.-]+$/.test(username) && username.length > 4 &&
                                                 username.length < 9;
  }

  passwordIsValid(password) {
    return /^[0-9a-zA-Z_.-]+$/.test(password) && password.length > 5 &&
                                                 password.length < 15;
  }


  handleFormSubmit(e) {
       e.preventDefault();

       if (this.getValidationState() == 'error') {
         this.setState({invalidFormSubmit: true});
         return;
       }

       if (this.props.isSignUp) {
         this.Auth.signUp(this.state.username, this.state.email, this.state.password)
             .then(() => {
                this.setState({redirect: true})
             })
             .catch(err =>{
                 alert(err);
             })
       } else {
         this.Auth.login(this.state.username, this.state.password)
             .then(() => {
                this.setState({redirect: true})
             })
             .catch(err =>{
                 alert(err);
             })
         }
   }

   handleChange(e) {
     this.setState(
          {
              [e.target.name]: e.target.value
          }
      )
   }

  render() {
    const needHelpBlock = this.state.invalidFormSubmit &&
    <HelpBlock> Username must be 5-8 characters of letters or numbers and
    password must be 5-15 characters of letters or numbers</HelpBlock>

    const isSingUp = this.props.isSignUp &&
                      <FormGroup id={1}>
                        <Col componentClass={ControlLabel} sm={2}>
                          Email
                        </Col>
                        <Col sm={10}>
                          <FormControl
                            type="email"
                            placeholder="email"
                            onChange={this.handleChange.bind(this)}
                            name="email"
                          />
                        </Col>
                      </FormGroup>

    if (this.state.redirect) {
      return <Redirect to="/" />;
    }

    return (
      <Form horizontal onSubmit={this.handleFormSubmit.bind(this)}>
        <FormGroup id={0} validationState={this.getValidationState()}>
          <Col componentClass={ControlLabel} sm={2}>
            Username
          </Col>
          <Col sm={10}>
            <FormControl
              type="username"
              placeholder="username"
              onChange={this.handleChange.bind(this)}
              name="username"
            />
          </Col>
        </FormGroup>
        {isSingUp}
        <FormGroup id={2} validationState={this.getValidationState()}>
          <Col componentClass={ControlLabel} sm={2}>
            Password
          </Col>
          <Col sm={10}>
            <FormControl
              type="password"
              placeholder="passowrd"
              onChange={this.handleChange.bind(this)}
              name="password"
            />
          </Col>
        </FormGroup>
        <FormGroup validationState={this.getValidationState()}>
          <Col smOffset={2} sm={10}>
            {needHelpBlock}
            <Button type="submit">Sign in</Button>
          </Col>
        </FormGroup>

      </Form>
    );
  }
}
