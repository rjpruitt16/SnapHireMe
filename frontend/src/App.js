import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom'

import AboutMe from './pages/AboutMe';
import CapsuleForm from "./pages/CapsuleForm";
import CapsuleStore from "./CapsuleStore";
import ErrorBoundary from './ErrorBoundary';
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import Home from './pages/Home';
import Login from './pages/Login';
import NavHeader from "./components/Layout/NavHeader";
import SnapCapsule from './pages/SnapCapsule';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.Auth = this.props.auth;
    this.profile = this.Auth.getProfile()
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
          auth={this.Auth}
        />
      );
    }

    const SnapCapsuleStore = () => {
      return (
        <SnapCapsule store={CapsuleStore} domain={this.Auth.domain}/>
      );
    }

    const CreateCapsule = () => {
        if (this.Auth.loggedIn()) {
          return <CapsuleForm auth={this.Auth} userID={this.profile["user_id"]} />
        }
        return <Redirect to="Login" />
    }

    return (

      <div>
        <ErrorBoundary message="Error in NavHeader or Header">
          < NavHeader auth={this.Auth} />
          < Header />
        </ErrorBoundary>

        <ErrorBoundary message="Error in PATH component">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/SnapCapsule" render={SnapCapsuleStore}></Route>
            <Route path="/AboutMe" component={AboutMe}></Route>
            <Route path="/SignUp" render={SignUp}></Route>
            <Route path="/Login" render={LoginVar}></Route>
            <Route path="/CreateCapsule" render={CreateCapsule}></Route>
          </Switch>
        </ErrorBoundary>


        < Footer />
      </div>
    );
  }
}
