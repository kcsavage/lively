import React from 'react';
import ReactDOM from 'react-dom';

const chatBoxStyle = { width: 'calc(100% - 15px)', height: '30px', fontSize: '15px', boxSizing: 'border-box', borderRadius: '5px' };
const chatContainerStyle = { marginBottom: '15px',  bottom: 0 };

let timerHandle;

export default class ChatInput extends React.Component {
  handleSubmit(ev) {
    // grab chat text throw it over to server and clear chat box
    ev.preventDefault();
    const text = ReactDOM.findDOMNode(this.refs.chatBox).value.trim();
    if (text === '')
      return;
    Meteor.call('chatMessage', text);
    ReactDOM.findDOMNode(this.refs.chatBox).value = '';
  }

  handleTyping(ev) {
    // this lets everyone know a user is typing, naive implmentation
    Meteor.call('typingNow', Meteor.userId(), true);

    // this clears typing notification if nothing has been done for a bit
    if (timerHandle) {
      Meteor.clearTimeout(timerHandle);
    }
    timerHandle = Meteor.setTimeout(() => {
      Meteor.call('typingNow', Meteor.userId(), false);
    }, 1000)
  }

  render() {
    return (
      <div style={ chatContainerStyle }>
        <form onSubmit={ this.handleSubmit.bind(this) }>
          <span style={ { display: 'block', overflow: 'hidden' } }>
          <input type="text"
                 ref="chatBox"
                 placeholder="chat here"
                 style={ chatBoxStyle }
                 onKeyPress={ this.handleTyping.bind(this) }
          />
          </span>
        </form>
      </div>
    );
  }
}