import { Meteor } from 'meteor/meteor';
import { ChatMessages } from '../imports/api';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.publish('chatMessages', function chatPublication() {
  return ChatMessages.find({}, { $sort: { timeStamp: 1 } });
});