import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Chords = new Mongo.Collection('chords');

if (Meteor.isServer) {
  // This code only runs on the server
  // Only publish tasks that are public or belong to the current user
  Meteor.publish('chords', function chordsPublication() {
    return Chords.find({});
  });
}

Meteor.methods({
  'chords.insert'(title, chord) {
    check(title, String);
    check(chord, String);

    Chords.insert({
      title,
      chord,
      createdAt: new Date(),
    });
  },
});
