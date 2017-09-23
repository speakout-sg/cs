import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import Navigation from './Navigation.jsx';
import Container from './Container.jsx';

// App component - represents the whole app
export default class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Container />
      </div>
    );
  }
}
