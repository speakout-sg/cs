import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import Navigation from '../../template/Navigation.jsx';
import Create from './Create.jsx';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Create />
      </div>
    );
  }
}

