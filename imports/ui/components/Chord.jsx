import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';

// Chord component - represents a single todo item
export default class Chord extends Component {
  render() {
    return (
      <p className="title text-capitalize">
        {this.props.chord.title}
      </p>
    );
  }
}

Chord.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  chord: PropTypes.object.isRequired,
};
