import React from 'react';
import ChatInput from './ChatInput';
import ChatLog from './ChatLog';
import UserList from './UserList';
import AccountsUIWrapper from './AccountUI';

export default class Chat extends React.Component {
  render() {
    return (
      <div>
        <AccountsUIWrapper />

        <div>
          <UserList/>
        </div>
        <div>
          <ChatLog/>
        </div>
        <div>
          <ChatInput/>
        </div>
      </div>
    );
  }
}