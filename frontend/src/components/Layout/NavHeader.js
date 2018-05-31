import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class NavHeader extends React.Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
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

      <Nav pullRight>
        <NavItem eventKey={3} href="SignUp">SignUp</NavItem>
        <NavItem eventKey={4} href="Login">Login</NavItem>
      </Nav>
  </Navbar.Collapse>
      </Navbar>
    );
  }
}
