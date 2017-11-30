import React from 'react';

const friendlyDate = (date) => date.toLocaleString();

export default class Message extends React.Component {
  render() {
    return (
      <li className="message">
        <h3>{ this.props.message.userName } - { friendlyDate(this.props.message.date) }</h3>
        <p style={{overflowWrap:'break-word'}}>{ this.props.message.text }</p>
      </li>
    )
  };
}