import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Chords } from '../../../api/chords.js';

// Create component - to add chords to library
class Create extends Component {
  constructor(props) {
    super(props);

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handlePreviewChange = this.handlePreviewChange.bind(this);

    this.state = {
      preview: 'Preview Chords',
      title: 'Preview Title'
    };
  }

  handleSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref
    const title = ReactDOM.findDOMNode(this.refs.titleInput).value;
    const chord = ReactDOM.findDOMNode(this.refs.chordTextarea).value;

    Meteor.call('chords.insert', title, chord);

    // Clear form
    ReactDOM.findDOMNode(this.refs.titleInput).value = '';
    ReactDOM.findDOMNode(this.refs.chordTextarea).value = '';
  }

  handlePreviewChange(e) {
    this.setState({
      preview: e.target.value
    });
  }

  handleTitleChange(e) {
    this.setState({
      title: e.target.value
    });
  }

  getTitle() {
    return {
      __html: this.state.title
    };
  }

  getPreview() {
    let preview = this.state.preview;

    preview = preview.replace(/\n/g, '<br/>')

    return {
      __html: preview
    };
  }

  render() {
    return (

        /* Page Content */
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 text-left">
              <h2>CREATE YOUR CHORD</h2>
            </div>
          </div>

          <div className="row">
            <div className="form-group col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <form onSubmit={this.handleSubmit.bind(this)}>
                <input
                  className="form-control"
                  type="text"
                  ref="titleInput"
                  placeholder="Enter song title here"
                  onChange={this.handleTitleChange.bind(this)}
                />

                <br />

                <textarea
                  className="form-control"
                  ref="chordTextarea"
                  placeholder="Enter chord here"
                  rows="25"
                  onChange={this.handlePreviewChange.bind(this)}>
                </textarea>

                <br />

                <button type="submit" className="btn btn-primary btn-block">Create</button>
              </form>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 text-left">
              <p
                className="lead text-capitalize"
                dangerouslySetInnerHTML={this.getTitle()}
              />

              <p
                className="chord-display"
                dangerouslySetInnerHTML={this.getPreview()}
              />

            </div>
          </div>
        </div>
    );
  }
}

Create.propTypes = {
  chords: PropTypes.array.isRequired,
};

export default createContainer(() => {
  Meteor.subscribe('chords');

  return {
    chords: Chords.find({}, { sort: { createdAt: -1 } }).fetch(),
  };
}, Create);