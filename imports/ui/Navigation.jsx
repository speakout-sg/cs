import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

// Navigation component - represents the whole app
export default class Navigation extends Component {
  render() {
    return (
      /* Navigation */
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">C4C</a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                    <li>
                        <a href="#">Create</a>
                    </li>
                    <li>
                        <a href="#">Manage</a>
                    </li>
                    <li>
                        <a href="#">Transpose</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
  }
}
