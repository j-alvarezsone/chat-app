import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/auth/AuthContext';
import { ChatContext } from '../context/chat/ChatContext';
import { SocketContext } from '../context/socket/SocketContext';

export const SendMessage = () => {
  const [message, setMessage] = useState('');

  const { socket } = useContext(SocketContext);
  const {
    auth: { uid },
  } = useContext(AuthContext);
  const {
    chatState: { activeChat },
  } = useContext(ChatContext);

  const handleChange = ({ target }) => {
    setMessage(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (message.length === 0) return;

    setMessage('');

    socket.emit('personal-message', {
      from: uid,
      to: activeChat,
      message: message,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='type_msg row'>
        <div className='input_msg_write col-sm-9'>
          <input
            type='text'
            className='write_msg'
            placeholder='Message...'
            value={message}
            onChange={handleChange}
          />
        </div>
        <div className='col-sm-3 text-center'>
          <button className='msg_send_btn mt-3' type='submit'>
            send
          </button>
        </div>
      </div>
    </form>
  );
};
