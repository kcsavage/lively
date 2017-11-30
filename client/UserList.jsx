import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import UserListItem from './UserListItem';

class UserList extends React.Component {
  renderUsers() {
    const users = this.props.users;
    return users.map(user => {
      return <UserListItem key={ user._id } user={ user }/>
    });
  }

  render() {
    return (
      <div>
        <h2>user list</h2>
        <ul>
          { this.renderUsers() }
        </ul>
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe('users');
  return {
    users: Meteor.users.find({}, { sort: { username: 1 } }).fetch(),
  };
})(UserList);