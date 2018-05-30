import React from "react";
import { Modal, Button } from "react-bootstrap";
import AuthForm from "../components/Login/Form";

export default class Login extends React.Component {
  render() {
    return (
      <div >
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title> {this.props.title} </Modal.Title>
          </Modal.Header>

          < AuthForm isSignUp={this.props.isSignUp} />

          <Modal.Footer>
          <Button>Close</Button>
          <Button bsStyle="primary">Submit</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
  }
}
