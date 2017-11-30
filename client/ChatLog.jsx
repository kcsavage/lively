import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Message from './Message';
import { ChatMessages } from '../imports/api';

const logStyle = { 'overflowY': 'scroll', height: '100%'};

class ChatLog extends React.Component {
  scrollToCaret = (behavior = 'smooth') => {
    this.placeHolder.scrollIntoView({ behavior });
  };

  renderMessages() {
    const messages = this.props.messages;
    return messages.map(message => {
      return <Message key={message._id} message={message} />
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
    this.scrollToCaret('instant');
  }

  componentDidUpdate() {
    this.scrollToCaret('smooth');
  }
}

export default withTracker(() => {
  Meteor.subscribe('chatMessages');
  return {
    messages: ChatMessages.find({}, { sort: { timeStamp: 1 } }).fetch(),
  };
})(ChatLog);