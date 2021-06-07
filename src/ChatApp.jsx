import { AuthProvider } from './context/auth/AuthContext';
import { AppRouter } from './router/AppRouter';

export const ChatApp = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};
