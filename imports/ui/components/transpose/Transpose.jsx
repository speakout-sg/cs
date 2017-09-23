import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

// transpose chords to a different key
export default class Transpose extends Component {
  render() {
    return (

        /* Page Content */
        <div className="container-fluid">
          <div className="row">
              <div className="col-lg-12 text-center">
                <div>
                  <h1>Transpose</h1>

                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 text-center">
                    <form>
                      <p className="lead">Enter your chords here</p>

                      <textarea className="form-control" rows="25"></textarea>
                    </form>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 text-center">
                    <form>
                      <p className="lead">New chords</p>

                      <textarea className="form-control" rows="25"></textarea>
                    </form>
                  </div>

                </div>
              </div>
          </div>
        </div>
    );
  }
}