import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const ChatMessages = new Mongo.Collection('chatMessages');

Meteor.methods({
  chatMessage(text) {
    const date = new Date();
    const timeStamp = Date.now();
    const user = Meteor.users.findOne(Meteor.userId()) || { _id: 'unknown', username: 'unknown' };
    const { username: userName, _id: userId } = user;
    ChatMessages.insert({ text, date, timeStamp, userId, userName })
  },

  typingNow(userId, typingNow = false) {
    Meteor.users.update(userId, { $set: { typingNow } });
  }
});