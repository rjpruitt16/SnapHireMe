import React from 'react';

import { Route, Switch } from 'react-router-dom'

import AboutMe from './pages/AboutMe';
import Home from './pages/Home';
import SnapCapsule from './pages/SnapCapsule';

import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import NavHeader from "./components/Layout/NavHeader";


export default class App extends React.Component {
  render() {
    return (
      <div>
        < NavHeader />
        < Header />

        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/SnapCapsule" component={SnapCapsule}></Route>
          <Route path="/AboutMe" component={AboutMe}></Route>
        </Switch>

        < Footer />
      </div>
    );
  }
}
