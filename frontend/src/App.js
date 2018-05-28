import React from 'react';
import Header from './pages/Header';
import Navheader from './pages/Navheader';
import Footer from './pages/Footer';

export default class App extends React.Component {
  render() {
    return (
      <div>
        < Navheader />
        < Header />
        < Footer />
      </div>
    );
  }
}
