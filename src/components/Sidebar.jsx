import React, { useContext } from 'react';
import { AuthContext } from '../context/auth/AuthContext';
import { ChatContext } from '../context/chat/ChatContext';
import { SidebarChatItem } from './SidebarChatItem';

export const Sidebar = () => {
  const {
    chatState: { users },
  } = useContext(ChatContext);

  const {
    auth: { uid },
  } = useContext(AuthContext);

  return (
    <div className='inbox_chat'>
      {users
        .filter((user) => user.uid !== uid)
        .map((user) => (
          <SidebarChatItem key={user.uid} user={user} />
        ))}

      {/* <!-- Espacio extra para scroll --> */}
      <div className='extra_space'></div>
    </div>
  );
};
