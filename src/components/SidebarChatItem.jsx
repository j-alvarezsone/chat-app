import React, { useContext } from 'react';
import { ChatContext } from '../context/chat/ChatContext';
import { fetchWithToken } from '../helpers/fetch';
import { types } from '../types/types';
export const SidebarChatItem = ({ user }) => {
  const { name, online, uid } = user;
  const {
    chatState: { activeChat },
    dispatch,
  } = useContext(ChatContext);

  const handleClick = async () => {
    dispatch({
      type: types.activateChat,
      payload: uid,
    });

    // cargar los mensajes del chat
    const resp = await fetchWithToken(`messages/${uid}`);

    if (activeChat !== uid) {
      dispatch({
        type: types.loadMessages,
        payload: resp.messages.reverse(),
      });
    }

    // mover el scroll
  };

  return (
    <div className={`chat_list ${uid === activeChat && 'active_chat'} `} onClick={handleClick}>
      <div className='chat_people'>
        <div className='chat_img'>
          <img src='/assets/user.png' alt='sunil' width='40px' height='40px' />
        </div>
        <div className='chat_ib'>
          <h5>{name}</h5>
          {online ? (
            <span className='text-success'>Online</span>
          ) : (
            <span className='text-danger'>Offline</span>
          )}
        </div>
      </div>
    </div>
  );
};
