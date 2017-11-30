import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import ChatMessage from './ChatMessage';
import { ChatMessages } from '../imports/api';

const logStyle = { 'overflowY': 'scroll', height: '100%'};

class ChatLog extends React.Component {
  scrollToCaret = (behavior = 'smooth') => {
    this.placeHolder.scrollIntoView({ behavior });
  };

  renderMessages() {
    const messages = this.props.messages;
    return messages.map(message => {
      return <ChatMessage key={message._id} message={message} />
    })
  }

  render() {
    return (
      <div style={logStyle}>
        <ul className='message-list'>
          {this.renderMessages()}
        </ul>
        <div style={{ float:'left', clear: 'both' }}
             ref={(el) => { this.placeHolder = el; }}>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.scrollToCaret();
  }

  componentDidUpdate() {
    this.scrollToCaret();
  }
}

export default withTracker(() => {
  Meteor.subscribe('chatMessages');
  return {
    messages: ChatMessages.find({}, { sort: { timeStamp: 1 } }).fetch(),
  };
})(ChatLog);