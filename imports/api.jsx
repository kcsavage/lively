import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const ChatMessages = new Mongo.Collection('chatMessages');

Meteor.methods({
  chatMessage(text){
    const date = new Date();
    const timeStamp = Date.now();
    const userId = this.UserId || 'unknown';
    ChatMessages.insert({text, date, timeStamp, userId});
  }
});