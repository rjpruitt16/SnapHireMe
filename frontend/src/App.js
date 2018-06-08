import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom'

import AboutMe from './pages/AboutMe';
import Home from './pages/Home';
import Login from './pages/Login';
import SnapCapsule from './pages/SnapCapsule';

import CapsuleForm from "./components/CreateCapsule/CapsuleForm";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import NavHeader from "./components/Layout/NavHeader";

import CapsuleStore from "./CapsuleStore";


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.Auth = this.props.Auth;
  }


  render() {
    const LoginVar = () => {
      return (
          <Login
            title="Login"
            auth={this.Auth}
          />
      );
    }

    const SignUp = () => {
      return (
        <Login
          title="Sign up"
          isSignUp={true}
        />
      );
    }

    const SnapCapsuleStore = () => {
      return (
        <SnapCapsule store={CapsuleStore} />
      );
    }

    const CreateCapsule = () => {
        if (this.Auth.loggedIn()) {
          return <CapsuleForm auth={this.Auth} />
        }
        return <Redirect to="Login" />
    }

    return (

      <div>
        < NavHeader auth={this.Auth} />
        < Header />

        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/SnapCapsule" render={SnapCapsuleStore}></Route>
          <Route path="/AboutMe" component={AboutMe}></Route>
          <Route path="/SignUp" render={SignUp}></Route>
          <Route path="/Login" render={LoginVar}></Route>
          <Route path="/CreateCapsule" render={CreateCapsule}></Route>
        </Switch>

        < Footer />
      </div>
    );
  }
}
