import React from 'react';
import ReactDOM from 'react-dom';

export default class ChatInput extends React.Component {
  handleSubmit(ev) {
    // grab chat text throw it over to server and clear chat box
    ev.preventDefault();
    const text = ReactDOM.findDOMNode(this.refs.chatBox).value.trim();
    Meteor.call('chatMessage', text);
    ReactDOM.findDOMNode(this.refs.chatBox).value = '';
  }

  render() {
    return (
      <div>
        <h2>user input goes here</h2>
        <form className="chatBox" onSubmit={ this.handleSubmit.bind(this) }>
          <input
            type="text"
            ref="chatBox"
            placeholder="chat here"
          />
        </form>
      </div>
    );
  }
}