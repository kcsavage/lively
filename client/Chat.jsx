import React from 'react';
import ChatInput from './ChatInput';
import ChatLog from './ChatLog';
import UserList from './UserList';
import AccountsUIWrapper from './AccountUI';

const loginStyle = { float: 'right' };
export default class Chat extends React.Component {
  render() {
    return (
      <div>
        <div style={ loginStyle }>
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