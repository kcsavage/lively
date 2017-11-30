import React from 'react';
import ChatInput from './ChatInput';
import ChatLog from './ChatLog';
import UserList from './UserList';
import AccountsUIWrapper from './AccountUI';

export default class Chat extends React.Component {
  render() {
    return (
      <div>
        <div style={ { position: 'fixed' } }>
          <AccountsUIWrapper/>
        </div>
        <div className="userList">
          <UserList/>
        </div>
        <div className="chatContainer">
          <div className="chatLog">
            <ChatLog/>
          </div>
          <div className="chatInput">
            <ChatInput/>
          </div>
        </div>
      </div>
    );
  }
}