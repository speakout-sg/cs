import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

// manage chords library
export default class Manage extends Component {
  render() {
    return (

        /* Page Content */
        <div className="container-fluid">
          <div className="row">
              <div className="col-lg-12 text-center">
                <div>
                  <h1>Manage Your Chords</h1>

                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 text-center">
                    List the chords here
                  </div>

                </div>
              </div>
          </div>
        </div>
    );
  }
}