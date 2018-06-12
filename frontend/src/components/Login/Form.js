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
      email: "",
      password: "",
      redirect: false
    }
  }

  handleFormSubmit(e){
       e.preventDefault();
       console.log("FormSubmit Called", this.Auth);
       if (this.props.isSignUp) {
         console.log(this.state.username, this.state.email)
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
     console.log(e.target.value)
     this.setState(
          {
              [e.target.name]: e.target.value
          }
      )
   }

  render() {
    const isSingUp = this.props.isSignUp &&
                    < FormInput
                      title="Email"
                      name="email"
                      onChange={this.handleChange.bind(this)}/>;

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
