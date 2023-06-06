import { createContext } from 'react';

export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
  const user = { name: 'asif' };
  const authInfo = {
    user,
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
};

export default AuthProviders;