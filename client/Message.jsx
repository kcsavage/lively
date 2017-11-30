import React from 'react';

export default class Message extends React.Component {
  render() {
    return (
      <li>
        {this.props.message.text}
      </li>
    )
  };
}