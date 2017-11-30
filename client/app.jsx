import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import Chat from './Chat';
import { Accounts } from 'meteor/accounts-base';
import './style.css';

Meteor.startup(() => {
  Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY',
  });
  render(<Chat />, document.getElementById('app'));
});