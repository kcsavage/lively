import React from 'react';

const friendlyDate = (date) => date.toLocaleString();

export default class ChatMessage extends React.Component {
  render() {
    return (
      <li className="message">
        <h3 className="message-header">{ this.props.message.userName } - { friendlyDate(this.props.message.date) }</h3>
        <p className="message-body">{ this.props.message.text }</p>
      </li>
    )
  };
}