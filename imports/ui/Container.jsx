import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import Navigation from './Navigation.jsx';

// Container component - represents the page content
export default class Container extends Component {
  render() {
    return (
      /* Page Content */
      <div className="container">
        <div className="row">
            <div className="col-lg-12 text-center">
                <h1>ChordShare for Christ</h1>
                <p className="lead">Create, manage, and bring your chords with you wherever you go!</p>
                <ul className="list-unstyled">
                    <li>Bootstrap v3.3.6</li>
                    <li>jQuery v1.11.1</li>
                </ul>
            </div>
        </div>
    </div>
    );
  }
}
