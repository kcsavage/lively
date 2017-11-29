import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import Chat from './Chat';

Meteor.startup(() => {
  render(<Chat />, document.getElementById('app'));
});