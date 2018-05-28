import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";

export default class Navheader extends React.Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">React-Bootstrap</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
      <Navbar.Collapse>

      <Nav>
        <NavItem eventKey={1} href="#">
          About Me
        </NavItem>
        <NavItem eventKey={2} href="#">
          SnapCapsule
         </NavItem>
      </Nav>

      <Nav pullRight>
        <NavItem eventKey={1} href="#">
          Sign Up
        </NavItem>
        <NavItem eventKey={2} href="#">
          Login
        </NavItem>
      </Nav>
  </Navbar.Collapse>
      </Navbar>
    );
  }
}
