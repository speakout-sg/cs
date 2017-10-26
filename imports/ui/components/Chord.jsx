import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';

// Chord component - represents a single todo item
export default class Chord extends Component {
  render() {
    return (
      <p className="title text-capitalize">
        <a id={this.props.chord._id} onClick={this.props.selectChord.bind(this)}>
        {this.props.chord.title}</a>
      </p>
    );
  }
}

Chord.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  chord: PropTypes.object.isRequired,
  selectChord: React.PropTypes.func.isRequired,
};
