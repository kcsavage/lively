import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import Chat from './Chat';
import { Accounts } from 'meteor/accounts-base';
import './style.css';

Meteor.startup(() => {
  // this configures the user signup flow to not require an email
  Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY',
  });

  // main entry point for app
  render(<Chat />, document.getElementById('app'));
});