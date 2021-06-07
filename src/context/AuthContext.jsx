import React, { useCallback, useState } from 'react';
import { createContext } from 'react';
import { fetchWithoutToken } from '../helpers/fetch';
export const AuthContext = createContext();

const initialState = {
  uid: null,
  checking: true,
  logged: false,
  name: null,
  email: null,
};

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialState);

  const login = async (email, password) => {
    const resp = await fetchWithoutToken('login', { email, password }, 'POST');

    if (resp.ok) {
      localStorage.setItem('token', resp.token);
      const { user } = resp;

      setAuth({
        uid: user.uid,
        checking: false,
        logged: true,
        name: user.name,
        email: user.email,
      });
    }

    return resp.ok;
  };

  const register = async (name, email, password) => {
    const resp = await fetchWithoutToken('login/new', { name, email, password }, 'POST');

    if (resp.ok) {
      localStorage.setItem('token', resp.token);
      const { user } = resp;

      setAuth({
        uid: user.uid,
        checking: false,
        logged: true,
        name: user.name,
        email: user.email,
      });
      return true;
    }

    return resp.msg;
  };

  const verifyToken = useCallback(() => {}, []);

  const logout = () => {};

  return (
    <AuthContext.Provider
      value={{
        auth,
        login,
        register,
        verifyToken,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
