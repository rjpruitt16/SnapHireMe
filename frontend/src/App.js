import React from 'react';

import { Route, Switch } from 'react-router-dom'

import AboutMe from './pages/AboutMe';
import Home from './pages/Home';
import Login from './pages/Login';
import SnapCapsule from './pages/SnapCapsule';

import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import NavHeader from "./components/Layout/NavHeader";


export default class App extends React.Component {
  render() {
    const LoginVar = () => {
      return (
        <Login title="Log in"/>
        );
    }
    const SignUp = () => {
      return (
        <Login title="Log in"
            isSignUp={true}
        />
      );
    }
    return (
      <div>
        < NavHeader />
        < Header />

        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/SnapCapsule" component={SnapCapsule}></Route>
          <Route path="/AboutMe" component={AboutMe}></Route>
          <Route path="/SignUp" render={SignUp} isSignUp={true}></Route>
          <Route path="/Login" render={LoginVar} title="Login"></Route>
        </Switch>

        < Footer />
      </div>
    );
  }
}
