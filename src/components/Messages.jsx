import React, { useContext } from 'react';
import { SendMessage } from '../components/SendMessage';
import { IncomingMessage } from '../components/IncomingMessage';
import { OutgoingMessage } from '../components/OutgoingMessage';
import { ChatContext } from '../context/chat/ChatContext';
import { AuthContext } from '../context/auth/AuthContext';

export const Messages = () => {
  const {
    chatState: { messages },
  } = useContext(ChatContext);

  const {
    auth: { uid },
  } = useContext(AuthContext);

  return (
    <div className='mesgs'>
      <div id='messages' className='msg_history'>
        {messages.map((msg) =>
          msg.to === uid ? (
            <IncomingMessage key={msg._id} msg={msg} />
          ) : (
            <OutgoingMessage key={msg._id} msg={msg} />
          ),
        )}
      </div>
      <SendMessage />
    </div>
  );
};
