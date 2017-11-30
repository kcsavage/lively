import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const ChatMessages = new Mongo.Collection('chatMessages');

Meteor.methods({
  // new inbound message, add to our collection of chat messages
  chatMessage(text) {
    const date = new Date();
    const timeStamp = Date.now();
    const user = Meteor.users.findOne(Meteor.userId()) || { _id: 'unknown', username: 'unknown' };
    const { username: userName, _id: userId } = user;
    ChatMessages.insert({ text, date, timeStamp, userId, userName })
  },

  // if a user is typing or has stopped, update their typing flag
  typingNow(userId, typingNow = false) {
    Meteor.users.update(userId, { $set: { typingNow } });
  }
});