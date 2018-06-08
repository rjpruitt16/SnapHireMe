import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class NavHeader extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.auth.logout()
  }

  render() {
    const navStyle = {
      paddingBottom: "0px",
      borderBottom: "0px",
      margin: "0px",
      border: "3px",
    };

    function LoginOrCreateCapsule(props) {
      if (props.isLogin) {
        return (
          <Nav pullRight>
            <NavItem eventKey={3} href="CreateCapsule">CreateCapsule</NavItem>
            <NavItem eventKey={4} onClick={props.onClick}>Logout</NavItem>
          </Nav>
        );
      }
      return (
        <Nav pullRight>
          <NavItem eventKey={5} href="SignUp">SignUp</NavItem>
          <NavItem eventKey={6} href="Login">Login</NavItem>
        </Nav>
      );
   }

    return (
      <Navbar style={navStyle} inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            SnapCapsule
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>

        <Nav>
          <NavItem eventKey={0} href="/">Home</NavItem>
          <NavItem eventKey={1} href="AboutMe">About Me</NavItem>
          <NavItem eventKey={2} href="SnapCapsule">SnapCapsule</NavItem>
        </Nav>

        < LoginOrCreateCapsule
          isLogin={this.props.auth.loggedIn()}
          onClick={this.handleClick}
        />


        </Navbar.Collapse>
      </Navbar>
    );
  }
}
