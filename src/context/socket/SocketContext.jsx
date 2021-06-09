import { createContext, useContext, useEffect } from 'react';
import { useSocket } from '../../hooks/useSocket';
import { AuthContext } from '../auth/AuthContext';
import { ChatContext } from '../chat/ChatContext';

import { types } from '../../types/types';
import { scrollToBottomAnimated } from '../../helpers/scrollToBottom';

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const { socket, online, connectSocket, disconnectSocket } = useSocket('http://localhost:8080');
  const { auth } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    if (auth.logged) {
      connectSocket();
    }
  }, [auth, connectSocket]);

  useEffect(() => {
    if (!auth.logged) {
      disconnectSocket();
    }
  }, [auth, disconnectSocket]);

  // escuchar los cambios de los usuarios conectados
  useEffect(() => {
    socket?.on('users-list', (users) => {
      dispatch({
        type: types.usersLoaded,
        payload: users,
      });
    });
  }, [socket, dispatch]);

  useEffect(() => {
    socket?.on('personal-message', (message) => {
      dispatch({
        type: types.newMessage,
        payload: message,
      });
      // mover el scroll al final
      scrollToBottomAnimated('messages');
    });
  }, [socket, dispatch]);

  return <SocketContext.Provider value={{ socket, online }}>{children}</SocketContext.Provider>;
};
