import React from 'react';

const friendlyDate = (date) => date.toLocaleString();

export default class ChatMessage extends React.Component {
  render() {
    return (
      <li className="message">
        <div className="message-header">{ this.props.message.userName } - { friendlyDate(this.props.message.date) }</div>
        <div className="message-body">{ this.props.message.text }</div>
      </li>
    )
  };
}