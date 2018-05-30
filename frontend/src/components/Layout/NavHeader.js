import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class NavHeader extends React.Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">SnapCapsule</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
      <Navbar.Collapse>

      <Nav>
        <NavItem eventKey={0} componentClass={Link} to="/">Home</NavItem>
        <NavItem eventKey={1} componentClass={Link} to="AboutMe">About Me</NavItem>
        <NavItem eventKey={2} componentClass={Link} to="SnapCapsule">SnapCapsule</NavItem>
      </Nav>

      <Nav pullRight>
        <NavItem eventKey={3} componentClass={Link} to="SignUp">SignUp</NavItem>
        <NavItem eventKey={4} componentClass={Link} to="Login">Login</NavItem>
      </Nav>
  </Navbar.Collapse>
      </Navbar>
    );
  }
}
