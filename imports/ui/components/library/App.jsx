import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import Navigation from '../../template/Navigation.jsx';
import Library from './Library.jsx';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Library />
      </div>
    );
  }
}