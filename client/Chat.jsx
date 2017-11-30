import React from 'react';
import ChatInput from './ChatInput';
import ChatLog from './ChatLog';
import UserList from './UserList';
import AccountsUIWrapper from './AccountUI';


const userListStyle = { float: 'left', width: '150px' };
const chatContainerStyle = { marginLeft: '160px' };
const chatLogStyle = { height: 'calc(100vh - 50px)' };

// This is the main component of the chat app
export default class Chat extends React.Component {
  render() {
    return (
      <div>
        <div style={ { position: 'fixed' } }>
          <AccountsUIWrapper/>
        </div>
        <div style={userListStyle} className='userList'>
          <UserList/>
        </div>
        <div style={chatContainerStyle} className='chatContainer'>
          <div style={chatLogStyle} className='chatLog'>
            <ChatLog/>
          </div>
          <div className='chatInput'>
            <ChatInput/>
          </div>
        </div>
      </div>
    );
  }
}