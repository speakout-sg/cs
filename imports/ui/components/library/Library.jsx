import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Chords } from '../../../api/chords';
import Chord from '../Chord.jsx';

// View chords library
class Library extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedChord: 'not selected',
    };

    this.selectChord = this.selectChord.bind(this);
  }

  selectChord(selectedChord) {
    this.setState({
      selectedChord
    });
  }

  showSelectedChord(e) {
    return {
      __html: this.state.selectedChord
    };
  }

  renderChordList() {
    let chords = this.props.chords;
    return chords.map((chord) => {
      return (
        <Chord
          key={chord._id}
          chord={chord}
          selectChord={this.selectChord.bind(this, chord.chord)}
        />
      );
    });
  }

  render() {
    return (

        /* Page Content */
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <h1>View Chord Library</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              {this.renderChordList()}
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <p
                className="chord-display"
                dangerouslySetInnerHTML={this.showSelectedChord()}
              />
            </div>
          </div>
        </div>
    );
  }
}

Library.propTypes = {
  chords: PropTypes.array.isRequired,
};

export default createContainer(() => {
  Meteor.subscribe('chords');

  return {
    chords: Chords.find({}, { sort: {} }).fetch()
  };
}, Library);