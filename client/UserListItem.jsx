import React from 'react';

export default class UserListItem extends React.Component {
  render() {
    return (
      <li className="user">
        { this.props.user.username } { this.props.user.typingNow ? '⌨️' : '' }
      </li>
    )
  };
}