import React from "react";
import  { Redirect } from 'react-router-dom';
import { Modal, Button } from "react-bootstrap";
import AuthForm from "../components/Login/Form";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    }
  }

  handleClick(e) {
    this.setState({redirect: true});
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }

    return (
      <div >
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title> {this.props.title} </Modal.Title>
          </Modal.Header>

          < AuthForm isSignUp={this.props.isSignUp} auth={this.props.auth} />

          <Modal.Footer>
          <Button onClick={this.handleClick.bind(this)}> Close </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
  }
}
