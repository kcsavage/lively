import React from 'react';
import ChatInput from './chatInput';
import ChatLog from './chatLog';
import UserList from './userList';

export default class Chat extends React.Component {
  render() {
    return (
      <div>
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