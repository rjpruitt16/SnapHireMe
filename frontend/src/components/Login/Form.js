import React from "react";
import { Form, FormGroup, Button, Col } from "react-bootstrap";
import FormInput from "./FormInput";

export default class AuthForm extends React.Component {


  render() {
    console.log(this.props.isSignUp);
    const isSingUp = this.props.isSignUp &&
                    < FormInput title="Username" type="username"/>;

    return (
      <Form>
        < FormInput title="Email" type="email"/>
        {isSingUp}
        < FormInput title="Password" type="password"/>
      </Form>
    );
  }
}
