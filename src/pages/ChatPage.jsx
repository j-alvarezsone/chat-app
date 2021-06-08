import React, { useContext } from 'react';
import { InboxPeople } from '../components/InboxPeople';
import { Messages } from '../components/Messages';
import { ChatSelect } from '../components/ChatSelect';

import '../css/chat.css';
import { ChatContext } from '../context/chat/ChatContext';

export const ChatPage = () => {
  const {
    chatState: { activeChat },
  } = useContext(ChatContext);

  return (
    <div className='messaging'>
      <div className='inbox_msg'>
        <InboxPeople />

        {activeChat ? <Messages /> : <ChatSelect />}
      </div>
    </div>
  );
};
