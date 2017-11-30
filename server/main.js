import { Meteor } from 'meteor/meteor';
import { ChatMessages } from '../imports/api';

// this sends all chat messages to connected clients
Meteor.publish('chatMessages', function chatPublication() {
  return ChatMessages.find({}, { $sort: { timeStamp: 1 } });
});


// this sends user information for user list and typing notification
Meteor.publish('users', function userPublication() {
  return Meteor.users.find({}, { $fields: { username: 1, typingNow: 1 } });
});