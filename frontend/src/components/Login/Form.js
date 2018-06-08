import FormInput from "./FormInput";
import React from "react";
import { Form, FormGroup, Button, Col } from "react-bootstrap";
import  { Redirect } from 'react-router-dom';


export default class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.Auth = this.props.auth;
    this.state = {
      username: "",
      password: "",
      redirect: false
    }
  }

  handleFormSubmit(e){
       e.preventDefault();
       this.Auth.login(this.state.username, this.state.password)
           .then(() => {
              this.setState({redirect: true})
           })
           .catch(err =>{
               alert(err);
           })
   }

   handleChange(e) {
     this.setState(
          {
              [e.target.name]: e.target.value
          }
      )
   }

  render() {
    const isSingUp = this.props.isSignUp &&
                    < FormInput title="Email" type="email"/>;

    if (this.state.redirect) {
      return <Redirect to="/" />;
    }

    return (
      <Form onSubmit={this.handleFormSubmit.bind(this)}>
        <FormInput
          title="Username"
          type="username"
          name="username"
          onChange={this.handleChange.bind(this)}
          id={0}
        />
        {isSingUp}
        <FormInput
          title="Password"
          type="password"
          name="password"
          onChange={this.handleChange.bind(this)}
          id={1}
        />
        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="submit">Sign in</Button>
          </Col>
        </FormGroup>

      </Form>
    );
  }
}
