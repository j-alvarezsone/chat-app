import { AuthProvider } from './context/auth/AuthContext';
import { SocketProvider } from './context/socket/SocketContext';
import { AppRouter } from './router/AppRouter';

export const ChatApp = () => {
  return (
    <AuthProvider>
      <SocketProvider>
        <AppRouter />
      </SocketProvider>
    </AuthProvider>
  );
};
