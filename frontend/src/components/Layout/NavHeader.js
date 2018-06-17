import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";

export default class NavHeader extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      redirect: false,
    }
  }

  handleClick() {
    this.props.auth.logout()
    this.setState(
      {redirect: true}
    );
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

   if (this.state.redirect) {
     this.setState({redirect: false})
     return <Redirect to="/" />
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
