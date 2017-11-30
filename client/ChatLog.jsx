import React from 'react';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';
import Message from './Message';
import { ChatMessages } from '../imports/api';

class ChatLog extends React.Component {
  renderMessages() {
    const messages = this.props.messages;
    return messages.map(message => {
      return <Message key={message._id} message={message} />
    })
  }

  render() {
    return (
      <div>
        <h2>chatting stuff goes here</h2>
        <ul>
          {this.renderMessages()}
        </ul>
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe('chatMessages');
  return {
    messages: ChatMessages.find({}, { sort: { timeStamp: 1 } }).fetch(),
  };
})(ChatLog);