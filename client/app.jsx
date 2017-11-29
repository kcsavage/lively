import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import Chat from './chat';

Meteor.startup(() => {
  render(<Chat />, document.getElementById('app'));
});